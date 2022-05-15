<template>
  <div class="app">
<<<<<<< HEAD
    <AnimalCard
      v-for="(card, index) in cards"
      :key="index"
      :activity="card"
      :isSwinggable="true"
      :id="'card-' + card.id"
      :ref="'card-' + card.id"
      class="float-start"
    ></AnimalCard>
    <div class="form-group">
      <label for="email">Your Email Address</label>
      <input type="text"
           id="email"
           class="form-control"
           v-model="userData.email">
=======
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
>>>>>>> 34360cde1452f947db4adb8d58f3ee26e98a0d95
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
<<<<<<< HEAD
      cards: [
        {
          id: 1,
          name: "Vaquita marina",
          description:
            "El peligro de extinción de la vaquita marina es crítico ya que existen menos de 60 ejemplares en todo el mundo.",
          description_dangers:
            "La captura para su cría en pesquerías, la exposición en acuarios y la pesca comercial y deportiva son las principales amenazas que se ciernen sobre esta especie.",
          img_front_path:
            "https://elceo.com/wp-content/uploads/2022/02/vaquita-marina-especial-1.jpg",
          img_back_path:
            "https://ichef.bbci.co.uk/news/640/cpsprodpb/106AF/production/_118474276_233142c6-6596-44ea-a829-51545006a740.jpg",
        },
        {
          id: 2,
          name: "Tiburon Blanco",
          description:
            "El tiburón blanco es el pez depredador más grande de la tierra, con muestras de ejemplares capaces de sobrepasar los seis metros de longitud y alcanzar la tonelada de peso.",
          description_dangers:
            "La captura para su cría en pesquerías, la exposición en acuarios y la pesca comercial y deportiva son las principales amenazas que se ciernen sobre esta especie.",
          img_front_path:
            "https://fotos.perfil.com/2022/02/16/trim/950/534/tiburon-blanco-g20220216-1313989.jpg",
          img_back_path:
            "https://concepto.de/wp-content/uploads/2020/04/tiburon-blanco-e1588097090912.jpg",
        },
        {
          id: 3,
          name: "Tortuga Carey",
          description:
            "Su aspecto es similar al de otras tortugas marinas. Tiene un cuerpo plano, un caparazón protector, y sus extremidades en forma de aletas están adaptadas para nadar en mar abierto.",
          description_dangers:
            "La contaminación y los plásticos vertidos en el mar son una trampa mortal para muchas de ellas, pero en el caso de la tortuga Carey, es una animal amenazado por su consumo en China y Japón ya que en estos países su carne es conocida como un manjar.",
          img_front_path:
            "https://atlasanimal.com/wp-content/uploads/2021/02/tortuga-carey.jpg",
          img_back_path:
            "https://cumbrepuebloscop20.org/wp-content/uploads/2018/11/turtle-863336_640.jpg",
        },
      ],

      userData: {
                    email: ''
                },
=======
      animals: {
        response: [],
        loaded: false,
      },
>>>>>>> 34360cde1452f947db4adb8d58f3ee26e98a0d95
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