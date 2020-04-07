<template>
    <div>

<div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
        <div class="col-md-4" v-for="(prodDTO) in listProdDTO" :key="prodDTO.id">
          <div class="card cmb-4 shadow-sm">
            <div class="">
              <!-- 카드이미지 동일하게 하고싶다. -->
              <router-link to="/productDetail/1" >
              <img class="card-img-top" :src="prodDTO.mainImg" :alt="prodDTO.name">
            </router-link>
            </div>
              <!-- <img class="bd-placeholder-img card-img-top" :src="prodDTO.mainImg" :alt="prodDTO.name"> -->
            <div class="card-body" >
              <h5 class="card-title"> {{prodDTO.name}} </h5>
              <span><del>&#8361;{{prodDTO.price}}</del> </span>
              <span> &#8361;{{prodDTO.salePrice}}</span>
              <!-- <p class=""> {{prodDTO.price}} </p>
              <p class=""> {{prodDTO.salePrice}} </p> -->
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" v-if="prodDTO.inBasket">
                  <button class="btn btn-sm btn-outline-secondary">
                    <b-icon-bucket></b-icon-bucket>
                  </button>
                  <button class="btn btn-sm btn-outline-secondary">
                    <b-icon-heart></b-icon-heart>
                  </button> 
                </div>
                <div v-else>
                  
                  <button class="btn btn-sm btn-outline-secondary">
                    <b-icon-bucket-fill></b-icon-bucket-fill>
                  </button>
                  <button class="btn btn-sm btn-outline-secondary">
                    <b-icon-heart-fill></b-icon-heart-fill>
                  </button>
                </div>
                <small class="text-muted">{{ prodDTO.name}}</small>
              </div>
            </div>
          </div>
        </div>

        <button v-on:click="this.getMoreProducts">show more</button>
        <h1>{{testStr}}</h1>
        
      </div> 
    </div>
  </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        productListResultData:{},
        listProdDTO : [],
        isLogin : false,
        productPageNumb : 0,
        testStr : "a",
      }
    },
    methods: {
      getAnnounces() {
          console.log("getAnnounce 호출");
      },
      setCookie(){
 
        this.$cookies.set('accesstoken', 'newAccessToken11#1');
        this.isLogin =true;
        console.log("쿠키가 셋팅됨");

      },
      getCookie(){
         console.log("cookie = ", this.$cookies.get('accesstoken'));
      },
      delCookie(){
        this.$cookies.remove('accesstoken');
        this.isLogin = false;
        console.log("쿠키 토큰 삭제됨 , cookie = ",this.$cookies.get('accesstoken') );
        this.$router.go();
      },
      getMoreProducts(){
        console.log("get more");
        var vm = this;
        //   /* 여기 페이지[0]는 나중에 동적으로 바뀌게 해야해 */
        var url = 'http://localhost:8080/product/list/offset/'+this.productPageNumb;
        console.log(url);
        var token = this.$cookies.get('accesstoken');
        console.log("token = ",token);
        //   headers = {'accesstoken' : accesstoken}
        let config = {
                    headers: {
                        accesstoken: token,
                    }
                }

        axios.get(url, config)
        .then(function name(response ) {
          console.log(response.data);
          // vm.productListResultData = response.data;
          console.log("listproddto = ",response.data.data.listProdDTO);
          // (response.data.data).forEach(element => {
          //     console.log("ele , ",element);
          // });
          // vm.data.listProdDTO.concat(response.data.data.listProdDTO);
          vm.listProdDTO = vm.listProdDTO.concat(response.data.data.listProdDTO);
          // vm.console.log(listProdDTO);
          console.log(vm.listProdDTO);
          
          vm.productPageNumb++;
          vm.testStr = "b";

      })
      .catch(function(error){

        console.log(error);
      })
        
      }
      
    },
    created() {
      // console.log("cookie = ",document.cookie);
    //   this.getCookie();
    //   this.getAnnounces();
     console.log(" created func is work");
     console.log("prodLisjtTest ");
      this.getMoreProducts();
      
    },
    computed: {
      checkLogin: function(){
        var isGotToken = this.$cookies.get('accesstoken');
        if(isGotToken != null){
          return true;
        }
        return false;
      }
      
    },
    
  }
</script>