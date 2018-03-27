import { auth, db } from "../../firebase";

const state = {
  user: null,
  users: [],
  selectedUser: null
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setUsers(state, payload) {
    state.users = payload;
  },
  selectedUser(state, payload) {
    state.selectedUser = payload;
  }
};

const actions = {
  registerUser({ commit }, payload) {
    // Register user with firebase auth
    auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      // Add extra user details to database under the 'users' collection (keys=user.uid)
      .then(user => {
        db
          .collection("users")
          .doc(user.uid)
          .set({
            name: payload.name
          });
        // set newly created user as current user in vuex store
        const newUser = {
          id: user.uid,
          name: payload.name
        };
        commit("setUser", newUser);
      })
      .catch(err => console.log(err));
  },
  logInUser({ commit }, payload) {
    // Sign in with firebase
    auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      // retrieve user-details from database
      .then(user => {
        const tempUser = { id: user.uid, name: "" };
        commit("setUser", tempUser);
      });
  },
  logOutUser({ commit }) {
    // logout
    auth.signOut();
    // set user to empty in store
    commit("setUser", null);
    console.log("signed out");
  },
  autoLog({ commit }, payload) {
    commit("setUser", { id: payload.uid, name: "" });
  },
  loadUserDetails({ commit, getters }) {
    db
      .collection("users")
      .doc(getters.user.id)
      .get()
      .then(doc => {
        const updatedUserInfo = { id: getters.user.id, name: doc.data().name };
        commit("setUser", updatedUserInfo);
      });
  },
  loadAllUsers({ commit }) {
    db
      .collection("users")
      .get()
      .then(snapshot => {
        const users = [];
        snapshot.forEach(doc => {
          const tempUser = {
            id: doc.id,
            name: doc.data().name
          };
          users.push(tempUser);
        });
        commit("setUsers", users);
      });
  },
  loadUser({ commit }, payload) {
    db
      .collection("users")
      .doc(payload)
      .get()
      .then(doc => {
        const currentUser = { id: payload, name: doc.data().name };
        commit("selectedUser", currentUser);
      });
  }
};

const getters = {
  user(state) {
    return state.user;
  },
  users(state) {
    return state.users;
  },
  selectedUser(state) {
    return state.selectedUser;
  }
};

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions
};
