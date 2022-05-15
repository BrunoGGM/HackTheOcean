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
      document.getElementById("Fondovid").src="https://vod-progressive.akamaized.net/exp=1652775089~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3558%2F5%2F142790249%2F428992243.mp4~hmac=bfced0bf292fcf6baf86599e4dd1a039b78a084c8cd3ffad04a7bbf1716a4edd/vimeo-prod-skyfire-std-us/01/3558/5/142790249/428992243.mp4";
    }
    

    if(cambiofondo.path[1].scrollY==230){
        document.getElementById("Fondovid").src="https://vod-progressive.akamaized.net/exp=1652736633~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2293%2F26%2F661469865%2F3041266541.mp4~hmac=ecc2ae2574636141ba096a0ecab3a3adaa4d1e1d68c81e59096e43accbe07f6d/vimeo-prod-skyfire-std-us/01/2293/26/661469865/3041266541.mp4";
    }

  })

document.getElementsByClassName("Cesta").addEventListener(   function(barras){
  console.log(barras)
})





