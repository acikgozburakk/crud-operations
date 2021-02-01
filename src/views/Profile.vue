<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h2>{{ userdetail.name }}</h2>
          <h5>{{ userdetail.address.city }}</h5>

          <p>Username : {{ userdetail.username }}</p>
          <p>Email : {{ userdetail.email }}</p>
          <p>Phone :{{ userdetail.phone }}</p>
          <p>Website : {{ userdetail.website }}</p>
          <p>Company : {{ userdetail.company.name }}</p>
        </div>
        <div class="col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.7621373176894!2d29.229873115167614!3d40.89903233408944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac4b2d5439b97%3A0x877eb29192ce2d97!2sH%C3%BCrriyet%2C%20Sarp%20Sk.%2C%2034876%20Kartal%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1612121197752!5m2!1str!2str"
          ></iframe>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col">
          <p style="text-align: center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sit
            error aspernatur numquam tenetur dolores beatae adipisci ut.
            Voluptatum ipsam repudiandae delectus ducimus consequuntur laborum
            sequi ad odio dignissimos beatae?
          </p>

          <p style="text-align: center">
            <a href="https://www.sikayetvar.com/">Show More</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("fetchuser", this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      userdetail: "userdetail",
    }),
  },
};
</script>
<style scoped>
.card {
  position: relative;

  display: flex;
  justify-content: center;

  margin: auto;
  margin-top: 1%;
  width: 70%;
  height: 75%;
  padding: 3rem;
}
iframe {
  width: 100%;
  height: 100%;
}
</style>