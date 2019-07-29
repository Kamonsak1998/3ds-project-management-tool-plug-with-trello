<template>
  <!-- <div class="app-body"> -->
    <div class="sidebar">
      <nav class="sidebar-nav">
        <ul class="nav">
          <a class="nav-link dashboard" href="#">Dashboard</a>
          <li class="nav-item">

          <li class="nav-item nav-dropdown">
            <a class="nav-link nav-dropdown-toggle" href="#">
              <i class="nav-icon icon-star"></i> User
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
        </ul>
      </nav>
      <button class="sidebar-minimizer brand-minimizer" type="button"></button>
    </div>
  <!-- </div> -->
</template>

<style>
.dashboard{
  margin-top: 50px
}
</style>

