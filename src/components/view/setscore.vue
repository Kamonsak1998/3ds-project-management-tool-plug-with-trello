<template>
  <div class="card">
    <div class="card-header feature">
      <h3 class="mb-0">Set Score Up to You !</h3>
    </div>
    <div class="card-body">

        <div class="form-group row">
          <label class="col-md-6 col-form-label form-control-label">XXS</label>
          <div class="col-md-6">
            <div class="form-group">
              <input
                name="XXS"
                type="text"
                class="form-control"
                pattern="^[1-9+$]"
                v-model="point.XXS"
                :disabled="validated"
                v-validate="'required|numeric|max:3'"
                :class="{ 'is-invalid': submitted && errors.has('XXS') }"
              />
              <div
                v-if="submitted && errors.has('XXS')"
                class="invalid-feedback"
              >{{ errors.first('XXS') }}</div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-6 col-form-label form-control-label">XS</label>
          <div class="col-md-6">
            <div class="form-group">
              <input
                name="XS"
                type="text"
                class="form-control"
                pattern="^[1-9+$]"
                v-model="point.XS"
                :disabled="validated"
                v-validate="'required|numeric|max:3'"
                :class="{ 'is-invalid': submitted && errors.has('XS') }"
              />
              <div
                v-if="submitted && errors.has('XS')"
                class="invalid-feedback"
              >{{ errors.first('XS') }}</div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-6 col-form-label form-control-label">S</label>
          <div class="col-md-6">
            <div class="form-group">
              <input
                name="S"
                type="text"
                class="form-control"
                pattern="^[1-9+$]"
                v-model="point.S"
                :disabled="validated"
                v-validate="'required|numeric|max:3'"
                :class="{ 'is-invalid': submitted && errors.has('S') }"
              />
              <div
                v-if="submitted && errors.has('S')"
                class="invalid-feedback"
              >{{ errors.first('S') }}</div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-6 col-form-label form-control-label">M</label>
          <div class="col-md-6">
            <div class="form-group">
              <input
                name="M"
                type="text"
                class="form-control"
                pattern="^[1-9+$]"
                v-model="point.M"
                :disabled="validated"
                v-validate="'required|numeric|max:3'"
                :class="{ 'is-invalid': submitted && errors.has('M') }"
              />
              <div
                v-if="submitted && errors.has('M')"
                class="invalid-feedback"
              >{{ errors.first('M') }}</div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-6 col-form-label form-control-label">L</label>
          <div class="col-md-6">
            <div class="form-group">
              <input
                name="L"
                type="text"
                class="form-control"
                pattern="^[1-9+$]"
                v-model="point.L"
                :disabled="validated"
                v-validate="'required|numeric|max:3'"
                :class="{ 'is-invalid': submitted && errors.has('L') }"
              />
              <div
                v-if="submitted && errors.has('L')"
                class="invalid-feedback"
              >{{ errors.first('L') }}</div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-6 col-form-label form-control-label">XL</label>
          <div class="col-md-6">
            <div class="form-group">
              <input
                name="XL"
                type="text"
                class="form-control"
                pattern="^[1-9+$]"
                v-model="point.XL"
                :disabled="validated"
                v-validate="'required|numeric|max:3'"
                :class="{ 'is-invalid': submitted && errors.has('XL') }"
              />
              <div
                v-if="submitted && errors.has('XL')"
                class="invalid-feedback"
              >{{ errors.first('XL') }}</div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-6 col-form-label form-control-label">XLL</label>
          <div class="col-md-6">
            <div class="form-group">
              <input
                name="XLL"
                type="text"
                class="form-control"
                pattern="^[1-9+$]"
                v-model="point.XLL"
                :disabled="validated"
                v-validate="'required|numeric|max:3'"
                :class="{ 'is-invalid': submitted && errors.has('XLL') }"
              />
              <div
                v-if="submitted && errors.has('XLL')"
                class="invalid-feedback"
              >{{ errors.first('XLL') }}</div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-6 col-form-label form-control-label">XXL</label>
          <div class="col-md-6">
            <div class="form-group">
              <input
                name="XXL"
                type="text"
                class="form-control"
                pattern="^[1-9+$]"
                :disabled="validated"
                v-model="point.XXL"
                v-validate="'required|numeric|max:3'"
                :class="{ 'is-invalid': submitted && errors.has('XXL') }"
              />
              <div
                v-if="submitted && errors.has('XXL')"
                class="invalid-feedback"
              >{{ errors.first('XXL') }}</div>
            </div>
          </div>
        </div>
     
      <button type="button" class="btn btn-light" @click="clear">Reset</button>
      <button
        type="button"
        class="btn btn-primary ml-2"
        @click="addPoint"
        :disabled="validated"
      >Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      point: [
        { XXS: "" },
        { XS: "" },
        { S: "" },
        { M: "" },
        { L: "" },
        { XL: "" },
        { XLL: "" },
        { XXL: "" }
      ],
      submitted: false,
      validated: false
    };
  },
  mounted: function() {
    // this.checkDate();
  },
  methods: {
    // checkDate: function() {
    //   axios
    //     .post("http://localhost:9000/checkdate", {
    //     //   XXS: this.XXS,
    //     //   XS: this.XS,
    //     //   S: this.S,
    //     //   M: this.M,
    //     //   L: this.L,
    //     //   XL: this.XL,
    //     //   XLL: this.XLL,
    //     //   XXL: this.XXL
    //     })
    //     .then(res => {
    //       if (res.data.status == true) {

    //       }
    //     });
    // },
    addPoint: function() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          console.log(this.point.XXL);
        }
      });
    },
    clear: function() {
        this.validated = false,
      //   this.startDate = moment.utc();
      //   this.endDate = moment.utc();
      //   this.total = "";
      //   this.$refs.startDate.focus();
        this.point.XXS = "",
        this.point.XS =  "",
        this.point.S = "",
        this.point.M = "",
        this.point.L = "",
        this.point.XL = "",
        this.point.XLL = "",
        this.point.XXL = "";
    },
    //  nextStep: function() {
    //   if (this.step === "selectStartDate") {
    //     this.step = "selectEndDate";
    //     this.$refs.endDate.focus();
    //   } else if (this.step === "endDate") {
    //     this.step = null;
    //     this.$refs.endDate.blur();
    //   }
    // },
  }
};
</script>

<style>
.form-group {
  margin-bottom: 3px;
}
.form-control {
  display: table-row;
  width: 60%;
}
.btn-primary {
  color: #fff;
  background-color: #20a8d8;
  border-color: #20a8d8;
}
</style>