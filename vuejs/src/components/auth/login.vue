<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-5 mx-auto mt-5">
          <form name="login_form" id="login_form" class="form_login">
            <article>
              <header class="clearfix">
                <h4 class="left">Sign in</h4>
              </header>
              <div class="block-inner">
                <div class="form-group">
                  <label for="username" class="col-form-label">E-mail</label>
                  <br />
                  <input
                    type="text"
                    name="E-mail"
                    class="required form-control"
                    value
                    placeholder="Enter your e-mail..."
                  />
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
                  />
                </div>
              </div>
              <button class="btnlogin">SIGN IN</button>
            </article>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {};
</script>

<style>
.btnlogin {
  color: #ffffff;
  font: 15px;
  font-family: sans-serif;
  background: #1f1f1f;
  padding: 14px 40px;
  border: #ffffff;
}
.btn-title {
  color: #ffffff;
  font: 15px;
  font-family: sans-serif;
}
.white-block {
  display: block;
  display: inline;
  border-radius: 3px;
  border: 2px solid lightgray;
}
.article {
  position: relative;
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

/* .inp {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
  /* transform: rotateX(45deg) rotateY(-10deg) rotate(25deg) scale(2); 
}*/
.label {
  position: absolute;
  top: 16px;
  left: 0;
  font-size: 16px;
  color: #9098a9;
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
}

.border {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #0077ff;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
}
input {
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
}

/* .input-field label {
     color: #000;
   }
 
   .input-field input[type=text]:focus + label {
     color: #000;
   }

   .input-field input[type=text]:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
 
   .input-field input[type=text].valid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
  
   .input-field input[type=text].invalid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }

   .input-field .prefix.active {
     color: #000;
   }  */
</style>
