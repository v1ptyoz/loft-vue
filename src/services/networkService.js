import axios from "axios";

export const getPosts = () => {
  const week = 7 * 24 * 60 * 60 * 1000;
  const weekAgo = new Date(Date.now() - week);
  const dateFormatter = (value) => (value < 10 ? `0${value}` : value);
  const created = `${weekAgo.getFullYear()}-${dateFormatter(weekAgo.getMonth() + 1)}-${dateFormatter(weekAgo.getDate())}`;
  const params = new URLSearchParams();
  params.append("order", "desc");
  params.append("sort", "stars");
  params.append("q", `language:javascript created:>${created}`);
  params.append("perPage", "10");
  return axios(`https://api.github.com/search/repositories?${params}`);
};
