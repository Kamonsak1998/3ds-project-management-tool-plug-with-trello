<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto mt-5">
          <div class="card shadow p-4 bg-white">
            <form @submit.prevent="addUser">
              <div class="text-center">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
              </div>
              <div class="card-body text-left">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input
                    class="form-control"
                    type="text"
                    name="email"
                    placeholder="Enter e-mail"
                    v-model="output.email"
                    v-validate="'required|email'"
                    ref="email"
                    :class="{ 'is-invalid': submitted && errors.has('email') }"
                  />
                  <div
                    v-if="submitted && errors.has('email')"
                    class="invalid-feedback"
                  >{{ errors.first('email') }}</div>
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="icon-lock"></i>
                    </span>
                  </div>
                  <input
                    v-validate="'required|min:6|max:12'"
                    :class="{ 'is-invalid': submitted && errors.has('password')}"
                    name="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    ref="password"
                  />
                  <div
                    v-if="submitted && errors.has('password')"
                    class="invalid-feedback"
                  >{{errors.first('password')}}</div>
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="icon-lock"></i>
                    </span>
                  </div>
                  <input
                    v-validate="'required|confirmed:password'"
                    :class="{ 'is-invalid': submitted && errors.has('password_confirmation')}"
                    name="password_confirmation"
                    type="password"
                    class="form-control"
                    placeholder="Repeat password"
                  />
                  <div
                    v-if="submitted && errors.has('password_confirmation')"
                    class="invalid-feedback"
                  >{{errors.first('password_confirmation')}}</div>
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="icon-user"></i>
                    </span>
                  </div>
                  <input
                    class="form-control"
                    type="text"
                    name="firstname"
                    pattern="^[a-zA-Z-ก-๏\s]+$"
                    placeholder="Enter firstname"
                    v-model="output.firstname"
                    v-validate="'required|max:15'"
                    :class="{ 'is-invalid': submitted && errors.has('firstname') }"
                  />
                  <div
                    v-if="submitted && errors.has('firstname')"
                    class="invalid-feedback"
                  >{{ errors.first('firstname') }}</div>
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="icon-user"></i>
                    </span>
                  </div>
                  <input
                    class="form-control"
                    type="text"
                    name="lastname"
                    pattern="^[a-zA-Z-ก-๏\s]+$"
                    placeholder="Enter lastname"
                    v-model="output.lastname"
                    v-validate="'required|max:15'"
                    :class="{ 'is-invalid': submitted && errors.has('lastname') }"
                  />
                  <div
                    v-if="submitted && errors.has('lastname')"
                    class="invalid-feedback"
                  >{{ errors.first('lastname') }}</div>
                </div>
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="icon-phone"></i>
                    </span>
                  </div>
                  <input
                    class="form-control"
                    type="text"
                    name="phone"
                    pattern="^0([8|9|6])([0-9]{8}$)"
                    placeholder="Enter phone"
                    v-model="output.phone"
                    v-validate="'required|numeric|max:10'"
                    :class="{ 'is-invalid': submitted && errors.has('phone') }"
                  />
                  <div
                    v-if="submitted && errors.has('phone')"
                    class="invalid-feedback"
                  >{{ errors.first('phone') }}</div>
                </div>
                <button class="btn btn-block btn-success shadow p-3" type="submit">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      output: {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        phone: ""
      },
      submitted: false
    };
  },
  methods: {
    addUser: function() {
      this.submitted = true;
      // this.$validator.validate().then(valid => {
      //   if (valid) {
      //   }
      // });
    }
  }
};
</script>


<style>
.card{
  border-radius: 25px;
}
.btn {
  border-radius: 25px;
}
.btnregister {
  color: #ffffff;
  font: 15px;
  font-family: sans-serif;
  background: #30cc22;
  padding: 14px 40px;
  border: #ffffff;
}
.block-inner {
  border-radius: 10px;
  border: 1px lightgray;
  text-align: left;
  font: 5px;
  box-sizing: border-box;
}
.form-group label {
  margin-bottom: 0px;
  color: #24a0d1;
  font-size: 14px;
}
.form-group input {
  margin-bottom: 0px;
  font-size: 14px;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
}
</style>
