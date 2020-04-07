<template>
    <div>
        <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/maintest">CP.Shop</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <!-- b-nav-item to 를 썻기에 reouter-link 와 같은 역활을 할 수 있다. -->
                <b-nav-item to="/basket">About</b-nav-item>
                <!-- <b-nav-item to="/read">Read</b-nav-item> -->
                <b-nav-item to="/User">User</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form> -->

                <!-- <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown> -->
                <!-- <b-nav-item to="/read">Read</b-nav-item>
                <b-nav-item to="/User">User</b-nav-item> -->
                <div v-if="this.isLogin">
                    <!-- <b-button size="sm" class="my-2 my-sm-0" type="button">mypage</b-button> -->
                    <router-link to="/mypage">
                        <b-button size="sm" class="my-2 my-sm-0" type="button">mypage</b-button>
                    </router-link>
                    <!-- <b-nav-item to="/mypage">
                        <b-button size="sm" class="my-2 my-sm-0" type="button">mypage</b-button>
                    </b-nav-item> -->
                    <b-button size="sm" class="my-2 my-sm-0" v-on:click="this.logOut">logout</b-button>
                </div>
                <div v-else>
                    <router-link to="/login">
                        <b-button size="sm" class="my-2 my-sm-0" type="button">login</b-button>
                    </router-link>
                    <router-link to="/signup">
                        <b-button size="sm" class="my-2 my-sm-0" type="button">sign up</b-button>
                    </router-link>
                </div>
               
                <!-- Using 'button-content' slot -->
                <!-- <b-nav-item-dropdown right>
                <template v-slot:button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown> -->
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    name : 'HeaderComponent',
    components: {
        
    },
    data() {
        return {
            token : "",
            isLogin : false,
        }
    },
    methods: {
        logOut(){
            console.log("logOut = delete cookie");
            this.$cookies.remove('accesstoken');
            // 현재 페이지 세로고침
            this.$router.go();
        }
    },
    created() {
        console.log(" header 의 created 발동 ");
        this.token = this.$cookies.get('accesstoken');
        console.log("this.token = ",this.token);
        if(this.$cookies.get('accesstoken') === null){
            this.isLogin = false;
            console.log(" isLogin = false");
            
        }else{
            this.isLogin = true;
            console.log(" is login = true");
            
        }
        
        
    },
}
</script>
