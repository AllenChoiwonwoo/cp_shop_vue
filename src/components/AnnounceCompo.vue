<template>
    <div>
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
      <!-- <div>     
        <a href="#" class="btn btn-primary my-2">Main call to action</a>
        <a href="#" class="btn btn-secondary my-2">Secondary action</a>

      </div> -->
    </div>
  </section>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'AnnounceCompo',
    data() {
      return {
        slide: 0,
        sliding: null,
        announceResultData:[],
        isLogin : false,

      }
    },
    methods: {
      onSlideStart() {
        // console.log(slide);
        this.sliding = true
      },
      onSlideEnd() {
        // console.log(slide);
        this.sliding = false
      },
    },
    created() {
      // console.log("cookie = ",document.cookie);
    //   this.getCookie();
    //   this.getAnnounces();
      console.log(" created func is work");
      var vm = this;
      var url = 'http://localhost:8080/announce';
      axios.get(url)
      .then(function name(response) {
        console.log(response.data);
        vm.announceResultData = response.data;
        console.log(vm.announceResultData.data);
      })
      .catch(function(error){
        console.log(error);
        
      })
    },
}
</script>
