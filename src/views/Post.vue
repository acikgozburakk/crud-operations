<template>
  <div class="card">
    <router-link :to="`/profile/${userdetail.id}`"
      ><h5 class="card-header">{{ userdetail.name }}</h5></router-link
    >
    <div class="card-body">
      <h5 class="card-title">Title:</h5>
      <p class="card-text">
        {{ postdetail.title }}
      </p>
      <h5 class="card-title">Body:</h5>
      <p class="card-text">
        {{ postdetail.body }}
      </p>
      <router-link to="/"><a class="btn btn-primary">Geri Dön</a></router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("fetchpost", this.$route.params.id);
    this.$store.dispatch("fetchuser", this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      postdetail: "postdetail",
      userdetail: "userdetail",
    }),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.card {
  position: relative;
  border-radius: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 10%;
  width: 50%;
  height: 75%;
  padding: 35px;
}
</style>