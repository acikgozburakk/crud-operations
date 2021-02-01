import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    baseurl: "https://jsonplaceholder.typicode.com",
    postList: [],
    postdetail: [],
    userdetail: []
  },
  mutations: {

    setposts(state, post) {
      state.postList = post;
    },
    fetchpost(state, post) {
      state.postdetail = post;
    },
    fetchuser(state, user) {
      state.userdetail = user;
    }
  },
  actions: {


    initpost({ commit, state }) {
      axios
        .get(`${state.baseurl}/posts`).then((get_response) => {
          console.log("get_response", get_response);
          commit("setposts", get_response.data);
        }).catch(e => console.log("error", e))
    },
    fetchpost({ commit, state }, id) {
      axios
        .get(`${state.baseurl}/posts/${id}`).then((get_response) => {
          console.log("fetch get", get_response);
          commit("fetchpost", get_response.data);
        }).catch(e => console.log("error", e))
    },
    fetchuser({ commit, state }, id) {
      axios
        .get(`${state.baseurl}/users/${id}`).then((get_response) => {
          console.log("user get", get_response);
          commit("fetchuser", get_response.data);
        }).catch(e => console.log("error", e))
    },
    deletepost({ state }, id) {
      axios.delete(`${state.baseurl}/posts/${id}`).then(delete_response => {
        console.log("Delete Response", delete_response);
        if (delete_response.status == 200) {
          alert("Kayıt silinmiştir!!!");
        }

      });

    },
    updatepost({ state }, updateData) {
      axios.patch(`${state.baseurl}/posts/${updateData.id}`, { title: updateData.title, body: updateData.body }).then(update_response => {
        console.log("update_response", update_response.data);
        alert("Güncelleme Tamamlandı!!");
      }).catch(e => console.log("error", e));
    }

  },
  modules: {
  },
  getters: {
    mypostlist: (state) => state.postList,
    postdetail: (state) => state.postdetail,
    userdetail: (state) => state.userdetail,
  }
})
