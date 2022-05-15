<template>
  <div class="app">
    <div class="row">
      <AnimalCard
        v-for="(card, index) in animals.response"
        :key="index"
        :activity="card"
        :isSwinggable="true"
        :id="'card-' + card.id"
        :ref="'card-' + card.id"
        class="col-12 col-md-6 col-lg-3"
      ></AnimalCard>
    </div>
  </div>
</template>

<script>
import AnimalCard from "./components/Card.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    AnimalCard,
  },
  data() {
    return {
      animals: {
        response: [],
        loaded: false,
      },
    };
  },
  methods: {
    fetchAnimals() {
      let self = this;
      axios
        .get("/api/animals")
        .then((response) => {
          self.animals.response = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          self.animals.loaded = true;
        });
    },
  },
  created() {
    this.fetchAnimals();
  },
};
</script>

<style>
</style>