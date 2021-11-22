import axios from "axios";
import secret from "../../secret";

const getData = axios.create({});

export const getDataFromUrl = (url) => {
  return getData({
    url,
    headers: {
      accept: "application/vnd.github.v3.html+json",
    },
  });
};

export const getTrendingsByWeek = () => {
  const week = 7 * 24 * 60 * 60 * 1000;
  const weekAgo = new Date(Date.now() - week);
  const dateFormatter = (value) => (value < 10 ? `0${value}` : value);
  const created = `${weekAgo.getFullYear()}-${dateFormatter(
    weekAgo.getMonth() + 1
  )}-${dateFormatter(weekAgo.getDate())}`;
  const params = new URLSearchParams();
  params.append("order", "desc");
  params.append("sort", "stars");
  params.append("q", `language:javascript created:>${created}`);
  params.append("per_page", "10");
  return getData(`https://api.github.com/search/repositories?${params}`);
};

export const getReadme = ({ owner, repo }) => {
  return getData({
    url: `https://api.github.com/repos/${owner}/${repo}/readme`,
    headers: {
      accept: "application/vnd.github.v3.html+json",
    },
  });
};

export const getUser = () => {
  return getData({
    url: "https://api.github.com/user",
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
    },
  });
};

export const getCode = () => {
  const params = new URLSearchParams();
  params.append("client_id", secret.clientId);
  params.append("scope", "repo:status read:user");
  window.location.href = `https://github.com/login/oauth/authorize?${params}`;
};

export const getToken = (code) => {
  const params = new URLSearchParams();
  params.append("client_id", secret.clientId);
  params.append("client_secret", secret.clientSecret);
  params.append("code", code);
  return getData({
    url: `http://localhost:8080/login/oauth/access_token?${params}`,
    method: "POST",
    headers: {
      accept: "application/vnd.github.v3.html+json",
    },
  });
};

export const starRepo = (owner, repo) => {
  return getData({
    url: `https://api.github.com/user/starred/${owner}/${repo}`,
    method: "PUT",
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
      accept: "application/vnd.github.v3.html+json",
    },
  });
};

export const unStarRepo = ({ owner, repo }) => {
  return getData({
    url: `https://api.github.com/user/starred/${owner}/${repo}`,
    method: "DELETE",
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
    },
  });
};
