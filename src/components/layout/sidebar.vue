<template>
  <div class="sidebar text-left">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'dashboards'}">
            <i class="nav-icon icon-home"></i> Dashboard
          </router-link>
        </li>
        <li class="nav-item"></li>
        <li class="nav-item nav-dropdown" v-if="idBoard">
          <router-link class="nav-link nav-dropdown-toggle" :to="{name : 'feature'}">
            <i class="nav-icon icon-list"></i> Feature
          </router-link>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name : 'charts'}">
                <i class="nav-icon icon-chart"></i> Charts
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name : 'leaderboard'}">
                <i class="nav-icon icon-pie-chart"></i> LeaderBoard
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item nav-dropdown">
          <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="nav-icon icon-user"></i> User
          </a>
          <ul class="nav-dropdown-items">
            <li class="nav-item" v-if="token">
              <a class="nav-link" href @click=" logout">
                <i class="nav-icon icon-logout"></i>Logout
              </a>
            </li>
            <li class="nav-item" v-else>
              <router-link class="nav-link" :to="{name : 'login'}">
                <i class="nav-icon icon-login"></i> Login
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" :to="{name : 'register'}">
                <i class="nav-icon icon-star"></i> Register
              </router-link>
            </li>-->
          </ul>
        </li>
      </ul>
    </nav>
    <button class="sidebar-minimizer brand-minimizer" type="button"></button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { OAuth } from "oauthio-web";
export default {
  computed: {
    ...mapGetters(["token", "idBoard"]),
  },
  methods: {
    ...mapMutations(['remove']),
    logout: function() {
      location.reload();
      this.remove()
      OAuth.clearCache();
      return;
    }
  }
};
</script>

<style>
  .sidebar{ 
    border-top-right-radius: 30px;
  }
</style>
