<template>
  <div>
    <b-navbar class="navbar navbar-expand-lg navbar-light bg-light mx-auto">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <img src />
              </template>

              <b-dropdown-item href="#">Profile</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<style>
.navbar {
  background-color: #f8f9f9;
  color: #bdc3c7;
}
</style>
