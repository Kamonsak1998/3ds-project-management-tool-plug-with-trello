<template>
  <div class="sidebar text-left ">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'dashboards'}">
            <i class="nav-icon icon-speedometer"></i> Dashboard
          </router-link>
        </li>
        <li class="nav-item"></li>
        <li class="nav-item nav-dropdown">
          <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="nav-icon icon-user"></i> User
          </a>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name : 'login'}">
                <i class="nav-icon icon-star"></i> Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name : 'register'}">
                <i class="nav-icon icon-star"></i> Register
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'leaderboard'}">
            <i class="nav-icon icon-pie-chart"></i> LeaderBoard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name : 'charts'}">
            <i class="nav-icon icon-pie-chart"></i> Charts
          </router-link>
        </li>
      </ul>
    </nav>
    <button class="sidebar-minimizer brand-minimizer" type="button"></button>
  </div>
</template>


<style>
/* .sidebar {
  border-radius: 25px;
} */
</style>
