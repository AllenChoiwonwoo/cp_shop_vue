<template>
  <div class="container">
    <!-- <div>
      <b-carousel
      id="carousel-1"
      class=""
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="512"
      img-height="240"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
        <b-carousel-slide v-for="(data,index) in announceResultData.data" :key="index"
          v-bind:text="data.content"
          img-blank img-alt="Blank image"
        > 
        </b-carousel-slide>
      </b-carousel>
    </div> -->
    
    <section class="jumbotron text-center">
      <div class="container">
        <div>
        <b-carousel
        id="carousel-1"
        class=""
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="512"
        img-height="60"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
          <b-carousel-slide v-for="(data,index) in announceResultData.data" :key="index"
            v-bind:text="data.content"
            img-blank img-alt="Blank image"
          > 
          <!-- <p>{{index}}</p> -->
          </b-carousel-slide>
        </b-carousel>
      </div>
      <!-- <h1>Album example</h1>
      <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p> -->
      <div>     
        <a href="#" class="btn btn-primary my-2">Main call to action</a>
        <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        <div v-if="checkLogin">
            <button v-on:click="delCookie" >delCookie</button>
        </div>
        <div v-else>
            <button v-on:click="setCookie" >setCookie</button>
        </div>
      </div>
      <div v-for="(data) in announceResultData.data" :key="data.idx">
      </div>

    </div>
  </section>
 
<div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
        <div class="col-md-4" v-for="(data) in testList" :key="data.idx">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" src="https://www.gstatic.com/webp/gallery3/1.sm.png" alt="img">
            <div class="card-body" >
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        
      </div> 
    </div>
  </div>

    <ul id="">
            <!-- 이런식으로 안쓰면 에러 오지네뜨네 -->
            <li v-for="(data) in announceResultData.data" :key="data.idx">
               {{data.order}} - {{data.content}}
            </li>
        </ul>
        <button v-on:click="this.getmore">testshowmore</button>



    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
import axios from 'axios'
// import VueCookies from 'vue-cookies'
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        announceResultData:[],
        isLogin : false,
        testList : [],

      }
    },
    methods: {
      onSlideStart(slide) {
        console.log(slide);
        this.sliding = true
      },
      onSlideEnd(slide) {
        console.log(slide);
        this.sliding = false
      },
      getAnnounces() {
          // var vm = this;
          console.log("getAnnounce 호출");
          // axios.get()

      },
      setCookie(){
        // var date = new Date();
        // date.setDate(date.getDate()+7);
        // var jsoncookie = {
        //       "accesstoken" : "madeToken123"
        // }
        // var willCookie = "";
        // willCookie += "accesstoken="+jsoncookie+";";
        // willCookie += "expires="+date.toUTCString();

        // // 쿠키에 넣는다bundleRenderer.renderToStream
        // var jsoncookie = {
        //       "accesstoken" : "madeToken123"
        // }
        // document.cookie = willCookie;
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
      getmore(){
        console.log(" get more ");
        var vm = this;
        var url = 'http://localhost:8080/announce';
        axios.get(url)
        .then(function name(response) {
          console.log(response.data);
          // vm.announceResultData = response.data;
          // vm.testList.concat(response.data.data)
          vm.testList = vm.testList.concat(response.data.data);
          // 이렇게 하니까 list 업데이트에 따른 화면 변화가 된다.
          console.log(vm.testList);
        })
        .catch(function(error){
          console.log(error);
          
        })
      }
      
    },
    created() {
      // console.log("cookie = ",document.cookie);
      this.getCookie();
      this.getAnnounces();
      console.log(" created func is work");
      var vm = this;
      var url = 'http://localhost:8080/announce';
      axios.get(url)
      .then(function name(response) {
        console.log(response.data);
        vm.announceResultData = response.data;
        vm.testList = response.data.data;
        console.log(vm.announceResultData.data);
      })
      .catch(function(error){
        console.log(error);
        
      })


    //  url = 'http://localhost:8080/product/list/offset/0';
    //   var accesstoken = this.$cookies.get('accesstoken');
    //   console.log("token = ", accesstoken);
    //   let config = {
    //       headers:{
    //         accesstoken: accesstoken,
    //       }
    //   }

      // axios.get(url, config)
      // .then(function name(response) {
      //   console.log(response.data);
      //   // vm.productListResultData = response.data;
      //   // vm.listProdDTO = response.data.listProdDTO;
      //   // console.log(vm.announceResultData.data);
      // })
      // .catch(function(error){

      //   console.log(error);
      // })
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