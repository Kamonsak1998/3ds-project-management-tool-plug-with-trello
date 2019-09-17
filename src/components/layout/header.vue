<template>
  <header class="app-header  navbar">
      <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
        <span class="navbar-toggler-icon"></span>
      </button>
        <router-link class="navbar-brand" :to="{name : 'dashboards'}">
          <img class="navbar-brand-full" src="@/assets/3dslogo.png" width="100" height="30" alt="3DS Logo" />
          <img class="navbar-brand-minimized" src="@/assets/LOGO3DS.png" width="35" height="20" alt="3DS Logo">
        </router-link>
      <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="nav navbar-nav d-md-down-none"></ul>
      
      <ul class="nav navbar-nav ml-auto">
         <!-- <li class="nav-item d-md-down-none mr-3" v-if="username">
            <i class="icon-user mr-2"></i>
            {{this.username}}
        </li>      -->
        <div> 
        <b-dropdown :text="this.username || this.User " variant="outline-danger"  class="m-2 d-md-down-none" >
          <b-dropdown-item v-if="token"> 
            <a class="nav-link" href @click=" logout">
                <i class="nav-icon icon-logout"></i>Logout
            </a>
          </b-dropdown-item>
          <b-dropdown-item v-else>
            <router-link class="nav-link" :to="{name : 'login'}">
                <i class="nav-icon icon-login"></i> Login
              </router-link>
          </b-dropdown-item>
        </b-dropdown>
        </div>
      </ul>
    </header>
</template>

<script>
import {mapGetters} from 'vuex';
import { OAuth } from "oauthio-web";
export default {
  computed:{
    ...mapGetters({username:'user/username',token: 'user/token' })
  },
   data() {
    return {
      User:'User'
    };
  },
  methods: {
      logout: function() {
      location.reload();
      OAuth.clearCache();
      this.$store.dispatch('user/logout');
    }
  }
}
</script>

<style>
</style>
