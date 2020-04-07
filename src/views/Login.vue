<template>
    <div class="container-sm" style="max-width: 400px;">
        <form class="form-signin">
            <div class="text-center mb-4">
                <img class="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
                <h1 class="h3 mb-3 font-weight-normal">CodePresso_SHOP</h1>
                <p> this project is made in CodePresso - DevOps Enginer Education course. so all of copyright are in CodePresso
                    if you want more infomation. visit <a href="http://codepresso.kr">codepresso.kr</a>
                    </p>
            </div>

            <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required=""
                    autofocus="" v-model="data.email">
                <label for="inputEmail">Email address</label>
            </div>

            <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""
                v-model="data.password">
                <label for="inputPassword">Password</label>
            </div>

            <!-- <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div> -->
            <br>
            <button class="btn btn-lg btn-primary btn-block" type="button" @click="doLogin" >sign in</button>
            <div>
                <router-link to="/signup">
                    <h5>sign up</h5>
                </router-link>
            </div>
            <p class="mt-5 mb-3 text-muted text-center">© 2019-2020</p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                data:{
                    email : "",
                    password : "",
                },
                accesstoken : "",
                
            }
        },
        methods: {
            doLogin(){
                var router = this.$router;
                console.log(" do login");
                var vm = this;
                var url ='http://localhost:8080/user/login';
                
                axios.post(url,this.data)
                .then(function(response){
                    console.log(response.data);
                    if (response.data.code > 299) {
                        alert("서버장애로 인한 로그인 에러");
                        return;
                    }
                    // this.$cookies.set("accesstoken", '1jkknqnih');
                    vm.accesstoken = vm.$cookies.get('accesstoken');
                    console.log("accesstoken = ",vm.accesstoken);
                    console.log("token = ", response.data.data.token);
                    vm.$cookies.set('accesstoken', response.data.data.token);
                    router.push('/main');
                    return;
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