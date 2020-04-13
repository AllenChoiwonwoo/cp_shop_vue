<template>


    <div class="container mb-4">
        <div class="row">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"> </th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col" class="text-center">Price</th>
                                <th scope="col" class="text-right">Sale</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="" v-for="item in basketItemList" :key="item.idx">
                                <td><img class="thumnail " :src=item.prodMainImg /> </td>
                                <td>{{item.prodName}}</td>
                                <td><input class="text-center" type="text" :value=item.prodVolume readonly></td>
                                <td>{{item.prodPrice}}</td>
                                <td class="text-right">{{item.prodSalePrice}}</td>
                                <td class="text-right">

                                    <b-icon-trash @click="deleteBasketItem(item)"></b-icon-trash>

                                </td>
                            </tr>
                            <!-- <tr>
                            <td><img class="thumnail" src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                            <td>Product Name Toto</td>
                            <td>In stock</td>
                            <td><input class="form-control" type="text" value="1" /></td>
                            <td class="text-right">33,90 €</td>
                            <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                        </tr>
                        <tr>
                            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                            <td>Product Name Titi</td>
                            <td>In stock</td>
                            <td><input class="form-control" type="text" value="1" /></td>
                            <td class="text-right">70,00 €</td>
                            <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                        </tr> -->
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Sub-Total</td>
                                <td class="text-right">{{this.subTotal}} &#8361; </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Shipping</td>
                                <td class="text-right">0 &#8361;</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>Total</strong></td>
                                <td class="text-right"><strong> {{this.totalPrice}} &#8361; </strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col mb-2">
                <div class="row">
                    <div class="col-sm-12  col-md-6">
                        <button class="btn btn-block btn-light">Continue Shopping</button>
                    </div>
                    <div class="col-sm-12 col-md-6 text-right">
                        <button class="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    /*
장바구니 정보를 가저오는 메서드
장바구니의 상품의 가격을 더하는 메서드
특정 상품을 장바구니에서 제거하는 메서드
상품 클릭시 해당 상품 상세페이지로 이동하게 라우팅
*/
    import axios from 'axios'
    export default {
        data() {
            return {
                accesstoken: "",
                basketItemList: [],
                totalPrice : 0,
            }
        },
        created() {
            this.accesstoken = this.$cookies.get('accesstoken');
            // this.accesstoken = '';
            console.log("accesstoken = ", this.accesstoken);

            this.getBasketItems();
        },
        computed: {
            subTotal(){
                // var totalPrice = 0;
                var length = this.basketItemList.length;
                console.log("basketitemList.lenght = "+length);
                
                this.basketItemList.forEach(element => {
                    console.log("element = ",element);
                    this.totalPrice = this.totalPrice + element.prodSalePrice;
                });
                // this.totalPrice = totalPrice;
                return this.totalPrice;
                // return length;
            }
        },
        methods: {
            getBasketItems() {
                console.log("do getUserBasket");
                var vm = this;
                var url = 'http://localhost:8080/basket';
                let config = {
                    headers: {
                        accesstoken: this.accesstoken,
                    }
                }
                axios.get(url, config)
                    .then(function (response) {
                        console.log("get Basket", response.data);
                        if (response.data.code > 299) {
                            alert("서버 장애로 장바구니를 불러올 수 없습니다.");
                            return;
                        }
                        vm.basketItemList = vm.basketItemList.concat(response.data.data);

                    })
                    .catch(function (error) {
                        console.log(error);
                    })

            },
            deleteBasketItem: function (item) {
                console.log("delete basket item ", item);
                var url = 'http://localhost:8080/basket';
                let config = {
                    headers: {
                        accesstoken: this.accesstoken,
                    },
                    data: {
                        prodId: item.prodId
                    }
                }

                axios.delete(url, config)
                    .then(function (response) {
                        console.log(response.data);
                        if (response.data.code > 299) {
                            alert("장바구니에서 상품삭제를 실패했습니다.");
                        }
                        this.$router.go();
                        return;
                    })
                    .catch(function (error) {
                        console.log(error);

                    })
            },
            
        },

    }
</script>

<style>
    .basketImage {
        max-width: 100%;
        height: auto;

    }

    .thumnail {
        width: auto;
        height: auto;
        max-width: 250px;
        max-height: 250px;
    }
</style>