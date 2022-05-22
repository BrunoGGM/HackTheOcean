import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

require('./css/app.css')

  window.addEventListener("scroll",  function(cambiofondo){
/*     console.log(cambiofondo.path[1].scrollY) Esta cosa es la buena xd
 */    
    
    if(cambiofondo.path[1].scrollY==400){
      document.getElementById("Fondovid").src="https://oceanx.blob.core.windows.net/container/Jellyfish%20-%2010480.mp4";
    }
    

    if(cambiofondo.path[1].scrollY==230){
        document.getElementById("Fondovid").src="https://oceanx.blob.core.windows.net/container/Jellyfish%20-%2010480.mp4";
    }

  })

document.getElementsByClassName("Cesta").addEventListener(   function(barras){
  console.log(barras)
})





