<template>
    <div class="app">
        <carousel >
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
    </div>    
</template>

<script>
import Carousel from './components/carousel/Carousel.vue';
import CarouselSlide from './components/carousel/CarouselSlide';

export default {
    data(){
        return {
            slides: [
                //Vaquita marina
                'https://t1.ev.ltmcdn.com/es/posts/7/4/0/vaquita_marina_1047_0_600.webp',
                //Delfín de Héctor
                'https://t1.ev.ltmcdn.com/es/posts/7/4/0/delfin_de_hector_1047_1_600.webp',
                //Delfín del río Irawadi
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/delfin_del_rio_irawadi_1047_2_600.webp',
                //Raya águila de cabeza larga
                'https://t1.ev.ltmcdn.com/es/posts/7/4/0/raya_aguila_de_cabeza_larga_1047_3_600.webp',
                //Tiburón raya
                'https://t1.ev.ltmcdn.com/es/posts/7/4/0/tiburon_raya_1047_4_600.webp',
                //Pulpo paraguas
                'https://t1.ev.ltmcdn.com/es/posts/7/4/0/pulpo_paraguas_1047_5_600.webp',
                //Pez de sierras estrechas
                'https://t1.ev.ltmcdn.com/es/posts/7/4/0/pez_de_sierras_estrechas_1047_6_600.webp',
                //Pez Napoleón
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/pez_napoleon_1047_7_600.webp',
                //Sargo cabezón
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/sargo_cabezon_1047_8_600.webp',
                //Pez luna
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/pez_luna_1047_9_600.webp',
                //Cornuda planeadora
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/cornuda_planeadora_1047_10_600.webp',
                //Puffadder shyshark
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/puffadder_shyshark_1047_11_600.webp',
                //Tiburón mudo
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/tiburon_mudo_1047_12_600.webp',
                //Anguila europea
                'https://t1.ev.ltmcdn.com/es/posts/7/4/0/anguila_europea_1047_13_600.webp',
                //Anguila japonesa
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/anguila_japonesa_1047_14_600.webp',
                //Caballito de mar listado
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/caballito_de_mar_listado_1047_15_600.webp',
                //Caballito de mar espinoso
                'https://t1.ev.ltmcdn.com/es/posts/7/4/0/caballito_de_mar_espinoso_1047_16_600.webp',
                //Pepino de mar japonés
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/pepino_de_mar_japones_1047_17_600.webp',
                //Pepino de mar común
                'https://t2.ev.ltmcdn.com/es/posts/7/4/0/pepino_de_mar_comun_1047_18_600.webp',
                //Caracol cono venenoso
                'https://t1.ev.ltmcdn.com/es/posts/7/4/0/caracol_cono_venenoso_1047_19_600.webp',
            ]
        }
    },

    components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    }
}
</script>

<style>
    .app {
        display:flex;
        justify-content: center;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width:800px;
        height:500px;
        z-index:10;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }

</style>