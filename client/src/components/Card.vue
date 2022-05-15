<template>
  <div
    class="animal-card handle"
    @mouseup="isFlipped = !isFlipped"
    :class="{ flip: isFlipped }"
    ref="animal-card"
  >
    <div
      class="face front"
      :style="{ backgroundImage: 'url(' + activity.img_front_path + ')' }"
    >
      <h2>{{ activity.name }}</h2>
      <p>
        {{ activity.description }}
      </p>
    </div>

    <div class="face back">
      <div
        class="header"
        :style="{ backgroundImage: 'url(' + activity.img_back_path + ')' }"
      ></div>
      <div class="description">
        <div class="row">
          <div class="col-12">
            <h4 class="text-center">{{ activity.name }}</h4>
          </div>
          <div class="col-12 mb-1">
            {{ activity.description_danger }}
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    activity: {
      type: Object,
      required: true,
    },
    isSwinggable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFlipped: false,
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>


<style>
.animal-card {
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  cursor: pointer;
  font-family: "vcr_osd_monoregular";
  width: 24%;
  height: 500px;
  color: white;
  border-radius: 10px;
  user-select: none;
}

.animal-card.flip {
  transform: rotateY(180deg) !important;
  transition: transform 0.5s !important;
}

.animal-card:hover {
  transform: scale(1.05);
}

.animal-card .face {
  position: relative;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0.1px);
}

.animal-card .back {
  transform: rotateY(180deg);
}

.animal-card .face {
  border-radius: 10px;
}

.animal-card .front {
  color: #ffffff;
  background-color: #101010;
  -moz-box-shadow: inset 0px -100px 45px 5px #000000;
  -webkit-box-shadow: inset 0px -100px 45px 5px #000000;
  box-shadow: inset 0px -100px 45px 5px #000000;
  height: -webkit-fill-available;
}

.animal-card .front {
  background-color: #333333;
  background-position: 50% 50%;
  transition: background 0.3s;
  background-size: cover;
}

.animal-card .back {
  font-size: 18px;
  line-height: 1.4em;
  background: #333333;
  background-size: cover;
  color: #ffffff;
  position: absolute;
  left: 12%;
  height: 53%;
  padding: -10%;
}

.animal-card .back .header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom: 3px double #ffffff;
  height: 150px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.animal-card .back .description {
  padding: -10%;
  height: 100%;
  position: absolute;
  justify-content: safe;
}

.animal-card .back .logo {
  position: relative;
  bottom: 10px;
  right: 10px;
  width: 100px;
  padding: 10px;
  border: none;
}

.animal-card h2 {
  text-transform: uppercase;
  font-size: 58px;
  position: relative;
  bottom: 145px;
  margin: 0;
  line-height: 0.9em;
  padding: 20px;
  font-weight: bold;
  text-shadow: 1px 1px 2px black;
}

.animal-card .front h2 small {
  font-size: 42px;
}

.animal-card .front p {
  position: relative;
  left: 0px;
  bottom: 0px;
  padding: 20px;
  font-size: 1rem;
  text-shadow: 1px 1px 2px black;
}

.fondo {
  position: fixed;
  width: 100%;
  z-index: -1;
}
.app {
  display: flex;
  padding-top: 10%;
  justify-content: center;
  width: 100%;
}

.Cesta {
  position: fixed;
  left: 1%;
  top: 89%;
  width: 8%;
}
.Cesta:hover {
  transform: scale(1.2);
  transition-duration: 300ms;
}
.Cesta img {
  width: 100%;
}
body {
  width: 100%;
  height: 100%;
  position: absolute;
}
#Formulario {
  top: 161%;
  position: absolute;
}
</style>