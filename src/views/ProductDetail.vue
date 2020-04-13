<template>

  <div class="container-md">
      <div class="py-3">
        <!-- <h1>(해결은 했으나 다른 방법을 씀) 라우터 path 를 통해서 :param 으로 데이터 넘기는 법을 모르겠다.</h1> -->
        <!-- <h2>{{prodId}}</h2> -->
      </div>
      <!-- <div class="jumbotron text-white rounded bg-dark">
          <div class="">
              <img class="img-fluid center-block" 
              src="https://i.pinimg.com/originals/20/f7/9d/20f79dc73d903a957929ffac3ef630de.jpg" alt="img" srcset="">
          </div>
        <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
            <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
            <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
        </div> 
  </div> -->

  <div class="row mb-2">
    <div class="col-md-8">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
           <img class="img-fluid center-block" 
              v-bind:src=prodMainData.mainImg alt="img" srcset="">
          <!-- <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a> -->
        </div>
        <!-- <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div> -->
      </div>
    </div>
    <div class="col-md-4">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">브랜드</strong>
          <h3 class="mb-0">{{prodMainData.name}}</h3>
          <div class="mb-1 text-muted">{{prodMainData.id}}</div>
          <h4 class="mb-0">{{prodMainData.salePrice}}</h4>
            <span><del>{{prodMainData.price}}</del></span>
          <p class="mb-auto">{{prodMainData.desc}}</p>
          <div class="py-3"></div>
          <button type="button" class="btn btn-outline-primary">바로구매</button>
            <!-- <button type="button" class="btn btn-outline-secondary">장바구니 담기</button>
            <button type="button" class="btn btn-outline-success">위시리스트 담기</button> -->
            <basket-and-like-button v-bind:prodMainData="prodMainData"></basket-and-like-button>
            <!-- <div v-if="this.token" class="btn-group my-1" role="group" aria-label="Basic example">
                <button @click="addProdToBasket(prodMainData)" type="button" class="btn btn-outline-primary">
                  {{setBasketButton(prodMainData.inBasket)}}
                    <b-icon-bucket-fill v-if="prodMainData.inBasket"></b-icon-bucket-fill>
                    <b-icon-bucket v-else ></b-icon-bucket>
                </button>
                <button  type="button" class="btn btn-outline-primary">
                  좋아요
                    <b-icon-heart-fill v-if="prodMainData.inBasket"></b-icon-heart-fill>
                    <b-icon-heart v-else >n</b-icon-heart>
                </button>
            </div>
            <div v-else class="btn-group my-1" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-primary" disabled>
                    hi<b-icon-bucket >hi</b-icon-bucket>
                </button>
                <button type="button" class="btn btn-outline-primary" disabled>
                    <b-icon-heart >hh</b-icon-heart>
                </button>
            </div> -->
          <!-- <a href="#" class="stretched-link">Continue reading</a> -->
        </div>
        <!-- <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div> -->
      </div>
    </div>
  </div>


  <main role="main" class="container-md">
  <div class="row">
    <div class="col-md-8 blog-main">
      <!-- <h3 class="pb-4 mb-4 font-italic border-bottom">
        상품 이름
      </h3> -->

      <div class="blog-post">
        <h2 class="blog-post-title">{{prodMainData.name}}</h2>
        <p class="blog-post-meta">January 1, 2014 by <a href="#">adidas</a></p>
        <p>제품번호 : 12345678</p>
        <p>실측사이즈</p>
        <p>어깨50   팔길이 61   가슴 58   총장 68  (cm)</p>
        <p>
            제품 컨디션 : 10/5(사진에 보이는 목뒤부분 약간 벗겨짐,양소매부분 늘어남)

            모니터에 따라 미세하게 색상에 차이가 있을수 있습니다.
            새상품이 아닌 Used상품으로 미세한 사용감과 오염이 존재할수 있습니다.
            특정 오염이나 데미지는 상세 설명에 표기하고 있으니 확인 부탁드립니다.^^
            평소 빈티지 상품에 대한 이해가 있으신 분들께 추천드립니다.^^
            주문후 다음날 6시전 미입금시 자동 주문 취소되오니 이점 양해 부탁드립니다
        </p>
        <hr>
        <div v-for="prodDetailData in prodDetailArray" :key="prodDetailData.idx">
          <img class="img-fluid center-block" 
              :src=prodDetailData.img alt="img" srcset="">
        <h4>
            id : {{prodDetailData.id}} , order : {{prodDetailData.order}}
        </h4>
        <h2>
          desc : {{prodDetailData.desc}}
        </h2>
        </div>
    </div>
    </div>
  </div><!-- /.row -->

</main>
      
  </div>
</template>

<script>
import axios from 'axios'
import BasketAndLikeButton from '../components/basketAndLikeButton.vue'
export default {
  data() {
    return {
      // prodId : "",
      selectedProdId : 1,
      token : null,
      prodMainData : {
        id : "",
        name : "",
        mainImg: "",
        desc: "",
        price: "",
        salePrice: "",
        createdAt:"",
        inBasket:"",
      },
      prodDetailData : {
        id: "",
        prodId: "",
        order: "",
        img: "",
        desc: "",
        createdAt: "",
      },
      prodDetailArray : [
        // prodDetailData,
      ],
    }
  },
  components:{
    BasketAndLikeButton,
  },
  props: ['prodId'],
  mounted() {
    // this.$cookies.set("accesstoken", '1jkknqnih');
    
  },
  created() {  
    this.token = this.$cookies.get('accesstoken');
    console.log("token = ",this.token," , prodId = ",this.prodId);
    // this.getProdMainInfo();
    if (this.token) {// 토큰 있으면 = 로그인 한상태면
      this.getProdMainInfo();
    } else {//로그인 안한 상태면
      this.getProdMainInfoNoToken();
    }
    this.getProdDetailInfo();
    
  },
  methods: {
    /* // basketAndLikeButton.vue 로 옮겼다.
    setBasketButton(inBasket){
      if (inBasket) {
        return '빼기';
      } else {
        return '담기'
      }
    },
    addProdToBasket : function(prodMainData){
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
                      data:{ 
                        prodId : prodMainData.id,
                      }
                  }
        console.log("config :",config);
        axios.delete(url, config)
        .then(function(response){
          console.log(response.data.data);
          alert("상품이 장바구니에서 삭제되었습니다.");
          // vm.prodMainData.inBasket = true;
          vm.$router.go();
          console.log();
        })
        .catch(function(error){
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
        console.log("config :",config);
          axios.post(url,{prodId: prodMainData.id}, config)
          .then(function(response){
            console.log(response.data.data);
            alert("상품이 장바구니에 담겼습니다.");
            // vm.prodMainData.inBasket = true;
            vm.$router.go();
            console.log();
          })
          .catch(function(error){
            alert("에러 - 상품이 안담김");
            console.log(error);
            return;
          })         
      }
      
    },
    */
    getProdMainInfo(){
      var vm = this;
      var url = 'http://localhost:8080/product/detail/'+this.prodId+'/main'
      let config = {
                    headers: {
                        accesstoken: this.token,
                    }
                } 
      console.log("url = ",url);
      axios.get(url,config)
      .then(function(response){
        // response.data.data.mainImg
        console.log(response.data.data);
        vm.prodMainData = response.data.data;
        console.log("name = ", vm.prodMainData.name);
      })
      .catch(function(error){
        console.log(error);
      })
    },
    getProdMainInfoNoToken(){
      var vm = this;
      var url = 'http://localhost:8080/product/detail/'+this.prodId+'/main';

      console.log("url = ",url);
      axios.get(url)
      .then(function(response){
        // response.data.data.mainImg
        console.log(response.data.data);
        vm.prodMainData = response.data.data;
        console.log("name = ", vm.prodMainData.name);
      })
      .catch(function(error){
        console.log(error);
      })
    },
    getProdDetailInfo(){
      var vm = this;
      var url = 'http://localhost:8080/product/detail/'+this.prodId+'/info'
      let config = {
                    headers: {
                        accesstoken: this.token,
                    }
                } 
      axios.get(url,config)
      .then(function(response){
         console.log(response.data);
        vm.prodDetailArray = response.data.data;
        // vm.prodDetailData
      })
      .catch(function(error){
        console.log(error);
        
      })
    }
  },

}
</script>

<style>

</style>