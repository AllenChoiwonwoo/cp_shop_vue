<template>
<div>
    <form v-on:submit.prevent="submitForm">  
    <!-- 폼은 기본동작은 새로고침 을 .prevent 로 막는다. -->
    <div>
      <label for="username">id :</label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="password">pw :</label>
      <input id="password" type="passwrod" v-model="password">
    </div>
    <button type="submit">login</button>
    <!-- 클릭했을때 -->
   
  </form>
   <!-- <other-component></other-component> -->
   <in-user1 v-bind:propsdata="myid" v-on:addcount="addToMyid"></in-user1>
   <carousel-compo></carousel-compo>
  <div>
        <button v-on:click="logText">click me</button>
        <h1 v-if=yesOrNo>
            Yes
        </h1>
        <h1 v-else>
            No
        </h1>
        <ul id="">
            <!-- 이런식으로 안쓰면 에러 오지네뜨네 -->
            <li v-for="(user) in users1" :key="user.id">
               {{user.id}} - {{user.name}} - {{user.username}}
            </li>
        </ul>
        {{users1}}
  </div>

</div>
  
</template>

<script>
// import Vue from 'vue'
import axios from 'axios';
import inUser1 from './inUser1.vue';
import CarouselCompo from '../components/CarouselCompo.vue';

export default {
    components: {
        // inUser1 : '<div> this is in user </div>'
        inUser1,
        CarouselCompo,
    },
  data: function(){// 데이터가 겹치지 않게 return 을 통해 객체를 따로 생성한다.
//     // return{
//     //   username: '',
//     //   password: '',
//     // }
    // var vm = this;
   return{
      username: '',
      password: '',
      data: [],
      myid: 9,
      users1:[],
      ok : true,
    }
    // return mydata
  },

  methods :{
    submitForm: function(){
      // event.preventDefault();// form 제출후 새로고침을 막는다
      var vm = this;//!!!!!!!!!!!!!!!!!!!!!!! 이거다 
      console.log(vm.username, vm.password);//!!!!!!!!!!!!!!!!!!!!!!! 이거다 
      var url = 'https://jsonplaceholder.typicode.com/users/';
      var data = {
        username: this.username,
        password: this.password,
        // response: '',
      }
      axios.post(url, data)
      .then(function(response){
        // console.log(this.username);
        console.log(response);
        console.log(response.data.id);
        console.log(vm.myid); //!!!!!!!!!!!!!!!!!!!!!!! 이거다 
        vm.myid = response.data.id;
        console.log(vm.myid);
        // console.log(this.id)
        // data.id = response.data;
        // console.log(this.id);
      })
      .catch(function(error){
        console.log(error);
      });
    },
    logText: function(){
        var vm = this;
        var url = 'https://jsonplaceholder.typicode.com/users/';
        axios.get(url)
        .then(function name(response) {
            console.log(response.data);
            vm.users1 = response.data;
            console.log(vm.users1);
        })
        .catch(function(error){
            console.log(error);
        })
    },
    addToMyid: function(){
        this.myid = this.myid + 1;
    }
},
    computed: {
        yesOrNo: function(){
            console.log("computed");
            console.log("users1 ", this.users1);
           return this.users1.length > 0 ? true : false;
        }
        
    },


}



</script>