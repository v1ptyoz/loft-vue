import axios from "axios";


const getData = axios.create({});

export const getIssues = (url) => {
  return getData(url);
};

export const getPosts = () => {
  const week = 7 * 24 * 60 * 60 * 1000;
  const weekAgo = new Date(Date.now() - week);
  const dateFormatter = (value) => (value < 10 ? `0${value}` : value);
  const created = `${weekAgo.getFullYear()}-${dateFormatter(weekAgo.getMonth() + 1)}-${dateFormatter(weekAgo.getDate())}`;
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
