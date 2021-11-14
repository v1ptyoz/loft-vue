import { createStore } from "vuex";
import { getIssues, getPosts, getReadme } from "@/services/networkService";

export default createStore({
  state: {
    repos: {},
    issues: {},
    trendings: {},
  },
  getters: {
    getIssue: (state) => (url) => {
      return state.issues[url];
    },
    getRepoById: (state) => (id) => {
      return state.repos.find((item) => item.id === id);
    },
  },
  mutations: {
    setData(state, payload) {
      state.repos = payload;
    },
    setIssues(state, payload) {
      this.state.issues[payload.url] = payload.data;
    },
    setReadme(state, payload) {
      state.repos = state.repos.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content;
        }
        return repo;
      });
    },
  },
  actions: {
    async fetchRepos(state) {
      try {
        const { data } = await getPosts();
        state.commit("setData", data.items);
        // for (const item of data.items) {
        //   const { data } = await getIssues(item.url + "/issues");
        //   item.issuesList = data;
        // }
      } catch (e) {
        throw new Error(e);
      }
    },
    async fetchIssues(store, url) {
      try {
        const { data } = await getIssues(url);
        const issue = { url, data };
        store.commit("setIssues", issue);
      } catch (e) {
        throw new Error(e);
      }
    },
    async fetchReadme(store, { id, owner, repo }) {
      const currentRepo = store.getters.getRepoById(id);
      if (currentRepo.readme !== undefined) return;
      try {
        const { data } = await getReadme({ owner, repo });
        store.commit("setReadme", { id, content: data });
      } catch (e) {
        throw new Error(e);
      }
    },
  },
});
