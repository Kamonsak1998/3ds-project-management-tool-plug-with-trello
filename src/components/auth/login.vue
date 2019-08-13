<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto mt-5">
          <form name="login_form" id="login_form" @submit.prevent="logIn" class="form_login">
            <div class="card-group">
              <div class="card p-4 shadow bg-white">
                <div class="text-center">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                </div>
                <div class="card-body text-left">
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="icon-user"></i>
                      </span>
                    </div>
                    <input
                      data-cy="input-login-email"
                      class="form-control"
                      type="email"
                      name="email"
                      placeholder="Enter your e-mail..."
                      v-model="email"
                      v-validate="'required|email'"
                      :class="{ 'is-invalid': submitted && errors.has('email') }"
                    />
                    <div
                      v-if="submitted && errors.has('email')"
                      class="invalid-feedback"
                    >{{ errors.first('email') }}</div>
                  </div>
                  <div class="input-group mb-4">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="icon-lock"></i>
                      </span>
                    </div>
                    <input
                      data-cy="input-login-password"
                      class="form-control"
                      type="password"
                      name="password"
                      placeholder="Enter your password..."
                      v-validate="'required'"
                      v-model="password"
                      :class="{ 'is-invalid': submitted && errors.has('password')}"
                    />
                    <div
                      v-show="errors.has('password')"
                      class="invalid-feedback"
                    >{{ errors.first('password') }}</div>
                  </div>
                  <button class="btnlogin shadow p-3 mb-3" type="submit">Login</button>
                  <button
                    type="button"
                    class="btn btn-pill btn-info shadow w-100"
                    @click="Auth"
                  >Login with trello</button>
                </div>
              </div>
            </div>
            <a
              href="https://trello.com/signup"
              class="pull-left"
              target="_blank"
            >Create a new account</a>
            <!-- <router-link class="pull-left" :to="{name : 'register'}">Create a new account</router-link> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { OAuth } from "oauthio-web";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  data: function() {
    return {
      submitted: false,
      email: "",
      password: ""
    };
  },
  mounted: function() {
    if (this.token != "") {
      this.$router.push("/dashboards");
      return;
    } else {
      return;
    }
  },
  computed: {
    ...mapGetters(["token"])
  },
  methods: {
    ...mapActions(["getToken"]),
    Auth() {
      const self = this;
      OAuth.initialize("DHnRyNE6xOi3k0N6jJapv7YTITc");
      var provider = "trello";
      OAuth.popup(provider)
        .done(function(result) {
          const token = result.oauth_token;
          if (token != "") {
                self.getToken(token);
                self.$router.push("/dashboards");
              }
        })
        .fail(function(err) {
          alert(err);
        });

      // axios
      //   .post("http://93f616c1.ngrok.io/getdashboard", token)
      //   .then(Response => {
      //     console.log(Response);
      // self.getToken(token);
      // next;
      //   });
    }
  },
  logIn() {
    this.submitted = true;
    // this.$validator.validate().then(valid => {
    //   if (valid) {
    //   }
    // });
  }
};
</script>

<style>
.card {
  border-radius: 25px;
}

.btnlogin {
  border-radius: 25px;
  color: #ffffff;
  font: 15px;
  font-family: sans-serif;
  background: #1f1f1f;
  padding: 14px 40px;
  border: #ffffff;
  width: 100%;
}
.btn-title {
  color: #ffffff;
  font: 15px;
  font-family: sans-serif;
}
.block-inner {
  border-radius: 10px;
  /* border: 1px lightgray; */
  text-align: left;
  font: 5px;
  box-sizing: border-box;
}

.form-group label {
  margin-bottom: 0px;
  color: #24a0d1;
  font-size: 14px;
  padding: 9px;
}
.form-group input {
  margin-bottom: 0px;
  font-size: 14px;
  border: 0;
  font-family: inherit;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
  padding: 6px;
}
.pull-left {
  float: left !important;
  margin-top: 10px;
}
.pull-right {
  float: right !important;
  margin-top: 10px;
}
form {
  display: block;
  margin-top: 0em;
}
</style>
