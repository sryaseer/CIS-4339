const state = {
    person: {
        firstName: null,
        lastName: null,
        email: null,
        tokens: null,
        token: null
    },
    appUser: {
        firstName: null,
        lastName: null,
        email: null,
        token: null
    },
    errorMessage: null
};
const actions = {
    setPerson({ commit }, person) {
        commit('setPerson', person);
    },
    setAppUser({ commit }, appUser) {
        commit('setAppUser', appUser);
    }
};
const mutations = {
    setPerson: (state, person) => {
        (state.person.firstName = person.firstName),
            (state.person.lastName = person.lastName),
            (state.person.email = person.email),
            (state.person.tokens = person.tokens),
            (state.person.token = person.token);
    },
    setAppUser: (state, appUser) => {
        (state.appUser.firstName = appUser.firstName),
            (state.appUser.lastName = appUser.lastName),
            (state.appUser.email = appUser.email),
            (state.appUser.token = appUser.token);
    }
};
const getters = {
    getPerson: state => state.person,
    getAppUser: state => state.appUser
};

export default {
    state,
    actions,
    mutations,
    getters
};
