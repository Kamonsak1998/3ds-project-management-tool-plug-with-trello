<template>
<div class="login">
  <div class="container">
    <div class="row">
      <div class="col-md-9 mx-auto mt-5">
        <form @submit.prevent="login" class="form-group">
        <img center src="@/assets/475862-200.png" class="img" />
        <br />
        <br />
        <h2>Success! You have confirmed your email address.</h2>
        <br />
        <br />
         <router-link :to="{name : 'login'}">
               <button class="btnlogin">OK,let's go!</button>
                </router-link>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        // login:function(){
        //     this.$router.push("/login");
        // }
    }

};
</script>

<style>
.row {
  text-align: center;
  padding-left: 60px;
  /* float: right; */
}
.img {
  display: left;
  size: 90%;
  width: 75; 
  height: 75;
}
.btnlogin {
  color: #ffffff;
  font: 15px;
  font-family: sans-serif;
  background: #58d4d8;
  padding: 14px 40px;
  border: #ffffff;
}
</style>
