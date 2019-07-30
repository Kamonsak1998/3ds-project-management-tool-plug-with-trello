<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto mt-5">
          <div class="card mx-4">
            <div class="card-body p-4">
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="icon-user"></i>
                  </span>
                </div>
                <input class="form-control" type="text" placeholder="Username" />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">@</span>
                </div>
                <input class="form-control" type="text" placeholder="Email" />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="icon-lock"></i>
                  </span>
                </div>
                <input class="form-control" type="password" placeholder="Password" />
              </div>
              <div class="input-group mb-4">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="icon-lock"></i>
                  </span>
                </div>
                <input class="form-control" type="password" placeholder="Repeat password" />
              </div>
              <button class="btn btn-block btn-success" type="button">Create Account</button>
            </div>
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
