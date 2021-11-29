import { createStore } from "vuex";
import {
  getDataFromUrl,
  getTrendingsByWeek,
  getReadme,
  getUser,
  starRepo,
  getUserRepos,
  getFollowers,
} from "@/services/networkService";

export default createStore({
  state: {
    starredRepos: {},
    issues: {},
    trendings: {},
    user: {},
    userRepos: {},
  },
  getters: {
    getIssue: (state) => (url) => {
      return state.issues[url];
    },
    getTrendingsById: (state) => (id) => {
      return state.trendings.find((item) => item.id === id);
    },
    getUserRepoById: (state) => (id) => {
      return state.userRepos.find((item) => item.id === id);
    },
  },
  mutations: {
    setTrendings(state, payload) {
      state.trendings = payload;
      state.trendings.forEach((item) => {
        item.starred = {
          status: false,
          loading: false,
        };
      });
    },
    setIssues(state, payload) {
      this.state.issues[payload.url] = payload.data;
    },
    setReadmeInTrendings(state, payload) {
      state.trendings = state.trendings.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content;
        }
        return repo;
      });
    },
    setUserData(state, payload) {
      state.user = payload;
    },
    setUserRepos(state, payload) {
      state.userRepos = payload;
    },
    setUserStarredRepos(state, payload) {
      state.starredRepos = payload.data;
    },
    setStarred(state, payload) {
      state.trendings = state.trendings.map((repo) => {
        if (payload.id === repo.id) {
          repo.starred = {
            ...repo.starred,
            ...payload.starred,
          };
        }
      });
    },
    setUserFollowers(state, payload) {
      state.user.followersList = payload;
    },
  },
  actions: {
    async fetchTrendings(store) {
      try {
        const { data } = await getTrendingsByWeek();
        store.commit("setTrendings", data.items);
      } catch (e) {
        throw new Error(e);
      }
    },
    async fetchIssues(store, url) {
      try {
        const { data } = await getDataFromUrl(url);
        const issue = { url, data };
        store.commit("setIssues", issue);
      } catch (e) {
        throw new Error(e);
      }
    },
    async fetchReadmeForTrendings(store, { id, owner, repo }) {
      const currentRepo = store.getters.getTrendingsById(id);
      if (currentRepo.readme !== undefined) return;
      try {
        const { data } = await getReadme({ owner, repo });
        store.commit("setReadmeInTrendings", { id, content: data });
      } catch (e) {
        throw new Error(e);
      }
    },
    async fetchUser(store) {
      try {
        const { data } = await getUser();
        store.commit("setUserData", data);
        const repos = await getDataFromUrl(
          `https://api.github.com/users/${data.login}/starred`
        );
        store.commit("setUserStarredRepos", repos);
      } catch (e) {
        throw new Error(e);
      }
    },
    async fetchUserRepos(store) {
      try {
        const { data } = await getUserRepos();
        store.commit("setUserRepos", data);
      } catch (e) {
        throw new Error(e);
      }
    },
    async fetchFollowers(store) {
      try {
        const { data } = await getFollowers();
        store.commit("setUserFollowers", data);
      } catch (e) {
        console.log(e);
      }
    },
    async doStarOnRepo(store, id) {
      const repo = store.getters.getTrendingsById(id);
      store.commit("setStarred", {
        id: id,
        starred: {
          status: false,
          loading: true,
        },
      });
      try {
        await starRepo(repo.owner.login, repo.name);
      } catch (e) {
        throw new Error(e);
      }
    },
  },
});
