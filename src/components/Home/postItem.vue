<template>
  <div class="container">
    <div v-if="updatestatus" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">DÜZENLE</h5>
          <button
            @click="updatestatus = false"
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Title:</p>
          <input type="text" style="width: 100%" v-model="updatepost.title" />
          <p>Body:</p>
          <textarea v-model="updatepost.body" rows="4" cols="50"></textarea>
        </div>
        <div class="modal-footer">
          <button
            @click="updatestatus = false"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" @click="updateData()" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <ul id="list">
        <li v-for="(post, index) in postList" :key="post.id">
          <div class="row">
            <div class="col-8">
              <b
                ><u>{{ index + 1 }}</u></b
              >
              &nbsp; &nbsp;
              {{ post.body }}
            </div>
            <div class="col-4">
              <router-link :to="`/post/${post.id}`">
                <button type="button" class="btn btn-primary me-2">
                  DETAY
                </button>
              </router-link>
              <button
                @click="updateitem(post)"
                type="button"
                class="btn btn-success me-2"
              >
                DÜZENLE
              </button>
              <button
                type="button"
                @click="deletePost(post.id)"
                class="btn btn-danger me-2"
              >
                SİL
              </button>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      updatestatus: false,
      updatepost: {
        id: null,
        title: "",
        body: "",
      },
    };
  },
  created() {
    this.$store.dispatch("initpost");
  },
  methods: {
    deletePost(id) {
      if (confirm("Silmek istediğinize emin misiniz?")) {
        this.$store.dispatch("deletepost", id);
      }
    },
    updateitem(post) {
      this.updatepost.id = post.id;
      this.updatepost.title = post.title;
      this.updatepost.body = post.body;
      this.updatestatus = true;
    },
    updateData() {
      const Datas = { ...this.updatepost };
      this.$store.dispatch("updatepost", Datas);
    },
  },

  computed: {
    ...mapGetters({
      postList: "mypostlist",
    }),
  },
};
</script>
<style scoped>
.card {
  margin: auto;
  width: 75%;
  margin-top: 8%;
  height: 500px;
  overflow-y: scroll;
}

#list {
  padding: 5%;
}
li {
  padding: 5px;
  list-style: none;
}
.btn-primary {
  background-color: #5e72e4;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}
.btn-success {
  background-color: #2dce89;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}
.btn-danger {
  background-color: #fb6340;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}
.btn-primary:hover,
.btn-success:hover,
.btn-danger:hover {
  box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
}
.modal {
  position: relative;
  width: 500px;
  margin-left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
}
</style>