<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-5 mx-auto mt-5">
          <form name="login_form" id="login_form" class="form_login" @submit.prevent="addUser()">
            <article>
              <header class="clearfix">
                <h4 class="left">Create a new account</h4>
              </header>
              <div class="block-inner mt-4">
                <div class="form-group">
                  <label for="username" class="col-form-label">E-mail</label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    class="required form-control"
                    value
                    placeholder="Enter your e-mail..."
                    v-model="output.email"
                    v-validate="'required|email'"
                    :class="{'is-invalid' : submitted && errors.has('email')}"
                  />
                  <div
                    v-if="submitted && errors.has('email')"
                    class="invalid-feedback"
                  >{{ errors.first('email') }}</div>
                </div>
                <div class="form-group">
                  <label for="username" class="col-form-label">Password</label>
                  <br />
                  <input
                    name="password"
                    type="password"
                    class="required form-control"
                    style
                    placeholder="Enter your password..."
                    v-model="output.password"
                    v-validate="'required|min:6|max:12'"
                    :class="{ 'is-invalid': submitted && errors.has('password')}"
                  />
                  <div
                    v-if="submitted && errors.has('password')"
                    class="invalid-feedback"
                  >{{errors.first('password')}}</div>
                </div>

                <div class="form-group">
                  <label for="username" class="col-form-label">First name</label>
                  <br />
                  <input
                    name="firstname"
                    type="firstname"
                    class="required form-control"
                    style
                    placeholder="Enter your first name..."
                    v-model="output.firstname"
                    v-validate="'required|max:15'"
                    :class="{ 'is-invalid': submitted && errors.has('firstname') }"
                  />
                  <div
                    v-if="submitted && errors.has('firstname')"
                    class="invalid-feedback"
                  >{{ errors.first('firstname') }}</div>
                </div>

                <div class="form-group">
                  <label for="username" class="col-form-label">Last name</label>
                  <br />
                  <input
                    name="lastname"
                    type="lastname"
                    class="required form-control"
                    style
                    placeholder="Enter your last name..."
                    v-model="output.lastname"
                    v-validate="'required|max:15'"
                    :class="{ 'is-invalid': submitted && errors.has('lastname') }"
                  />
                  <div
                    v-if="submitted && errors.has('lastname')"
                    class="invalid-feedback"
                  >{{ errors.first('lastname') }}</div>
                </div>
                <div class="form-group">
                  <label for="username" class="col-form-label">Phone</label>
                  <br />
                  <input
                    name="phone"
                    type="phone"
                    class="required form-control"
                    style
                    placeholder="Enter your phone..."
                    v-model="output.phone"
                    v-validate="'required|numeric|max:10'"
                    :class="{ 'is-invalid': submitted && errors.has('phone') }"
                  />
                  <div
                    v-if="submitted && errors.has('phone')"
                    class="invalid-feedback"
                  >{{ errors.first('phone') }}</div>
                </div>
              </div>
              <br />
              <button type="submit" class="btnregister">SIGN UP</button>
              <br />
            </article>
          </form>
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
      this.$validator.validate().them(valid => {
        if (valid) {
        }
      });
    }
  }
};
</script>


<style>
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
