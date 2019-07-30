<template>
  <div class="container">

    <!-- <div class="row">
      <div class="col-md-15 mx-auto mt-5">
        <h1>Verification link sent!</h1>
        <p>We emailed a confirmation link to 3Ds Project</p>
        <p>Check your email for a link to sign and create</p>
        <br />
        <br />
        <br />
        <br />
        <p>didn't get a confirmation email?</p>
        <p>
          Check you spam folde or
          <a href="#">Send again</a>
        </p>
      </div>
    </div> -->
    <div class="row mt-5">
      <div class="column" style="background-color:#fffff;">
          <img src="@/assets/iconemail.png" alt class="img" />
      </div>
      <div class="column">
        <h1>Verification link sent!</h1>
        <p>We emailed a confirmation link to 3Ds Project</p>
        <p>Check your email for a link to sign and create</p>
        <br> <br> <br> <br> <p>didn't get a confirmation email?</p>
        <p>
          Check you spam folde or
          <a href="#">Send again</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.row {
  text-align: left;
  padding-left: 60px;
  /* float: right; */
}
.img {
  display: left;
}
.column {
  background-color:f8f9f9;
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

</style>
