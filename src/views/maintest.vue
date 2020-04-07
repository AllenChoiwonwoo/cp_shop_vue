<template>
    <div>
        <h1> hi there</h1>
        <announce-compo></announce-compo>
        <product-list></product-list>
    </div>
</template>

<script>
// import CarouselCompo from '../components/CarouselCompo.vue';
import ProductList from '../components/productList.vue';
import AnnounceCompo from '../components/AnnounceCompo.vue';
export default {
    name: 'maintest',
    components: {
        AnnounceCompo,
        ProductList,
    },
    created() {
        console.log(" maintest.vue is run");
    },

}
</script>