<template>
    <!-- <div> -->
        <div v-if="this.token" class="btn-group my-1" role="group" aria-label="Basic example">
            <button @click="addProdToBasket(prodMainData)" type="button" class="btn btn-outline-primary">
                {{setBasketButton(prodMainData.inBasket)}}
                <b-icon-bucket-fill v-if="prodMainData.inBasket"></b-icon-bucket-fill>
                <b-icon-bucket v-else></b-icon-bucket>
            </button>
            <button type="button" class="btn btn-outline-primary">
                좋아요
                <b-icon-heart-fill v-if="prodMainData.inBasket"></b-icon-heart-fill>
                <b-icon-heart v-else></b-icon-heart>
            </button>
        </div>
        <div v-else class="btn-group my-1" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-primary" disabled>
                <b-icon-bucket></b-icon-bucket>
            </button>
            <button type="button" class="btn btn-outline-primary" disabled>
                <b-icon-heart></b-icon-heart>
            </button>
        </div>
    <!-- </div> -->
</template>

<script>
import axios from 'axios'
    export default {
        name: 'basketAndLikeButton',
        props: ['prodMainData'],
        created() {
            console.log("prodMainData = ", this.prodMainData);
            this.token = this.$cookies.get('accesstoken');
            // console.log("token = ",this.token," , prodId = ",this.prodId);
        },
        methods: {
            setBasketButton(inBasket) {
                if (inBasket) {
                    return '빼기';
                } else {
                    return '담기'
                }
            },
            addProdToBasket: function (prodMainData) {
                var vm = this;
                console.log("prodMainData : ", prodMainData);
                var url = 'http://localhost:8080/basket';


                if (prodMainData.inBasket) {

                    console.log("remove item from basket");
                    // remove item from basket
                    var config = {
                        headers: {
                            accesstoken: this.token,
                        },
                        data: {
                            prodId: prodMainData.id,
                        }
                    }
                    console.log("config :", config);
                    axios.delete(url, config)
                        .then(function (response) {
                            console.log(response.data.data);
                            alert("상품이 장바구니에서 삭제되었습니다.");
                            // vm.prodMainData.inBasket = true;
                            vm.$router.go();
                            console.log();
                        })
                        .catch(function (error) {
                            alert("에러 -");
                            console.log(error);
                            return;
                        })
                } else {
                    console.log("add item to baskek");
                    // add item to baskek
                    config = {
                        headers: {
                            accesstoken: this.token,
                        },

                    }
                    console.log("config :", config);
                    axios.post(url, {
                            prodId: prodMainData.id
                        }, config)
                        .then(function (response) {
                            console.log(response.data.data);
                            alert("상품이 장바구니에 담겼습니다.");
                            // vm.prodMainData.inBasket = true;
                            vm.$router.go();
                            console.log();
                        })
                        .catch(function (error) {
                            alert("에러 - 상품이 안담김");
                            console.log(error);
                            return;
                        })
                }

            },
        },
    }
</script>

<style>

</style>