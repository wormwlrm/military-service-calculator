import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    startDate: null,
    endDate: null,
    username: null,
    serviceType: null,
    themeType: null,
    badgeType: 'percent',
    checkedReleasesIds: [],
    fetchedReleases: []
  },

  mutations: {},

  getters: {
    getStartDate(state) {
      return state.startDate;
    },

    getEndDate(state) {
      return state.endDate;
    },

    getUsername(state) {
      return state.username;
    },

    getServiceType(state) {
      return state.serviceType;
    },

    getThemeType(state) {
      return state.themeType;
    },

    getBadgeType(state) {
      return state.badgeType;
    },

    getCheckedReleasesIds(state) {
      return state.checkedReleasesIds;
    },

    getFetchedReleases(state) {
      return state.fetchedReleases;
    }
  }
});
