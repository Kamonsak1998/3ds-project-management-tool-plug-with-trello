<template>
  <div class="card">
    <div class="card-header feature">
      <div class="mb-0">
        <h3>Set Score Up to You !</h3>
      </div>
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
              pattern="[1-9]+"
              v-model="point[0].XXS"
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
              pattern="[1-9]+"
              ref="startscorexs"
              v-model="point[1].XS"
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
              pattern="[1-9]+"
              v-model="point[2].S"
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
              pattern="[1-9]+"
              v-model="point[3].M"
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
              pattern="[1-9]+"
              v-model="point[4].L"
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
              pattern="[1-9]+"
              v-model="point[5].XL"
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
        <label class="col-md-6 col-form-label form-control-label">XXL</label>
        <div class="col-md-6">
          <div class="form-group">
            <input
              name="XXL"
              type="text"
              class="form-control"
              pattern="[1-9]+"
              v-model="point[6].XXL"
              :disabled="validated"
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
      <div class="form-group row">
        <label class="col-md-6 col-form-label form-control-label">XXXL</label>
        <div class="col-md-6">
          <div class="form-group">
            <input
              name="XXXL"
              type="text"
              class="form-control"
              pattern="[1-9]+"
              :disabled="validated"
              v-model="point[7].XXXL"
              v-validate="'required|numeric|max:2'"
              :class="{ 'is-invalid': submitted && errors.has('XXXL') }"
            />
            <div
              v-if="submitted && errors.has('XXXL')"
              class="invalid-feedback"
            >{{ errors.first('XXXL') }}</div>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-light">Reset</button>
      <button type="button" class="btn btn-primary ml-2" @click="addPoint">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      point: [
        { XXS: 0 },
        { XS: 0 },
        { S: 0 },
        { M: 0 },
        { L: 0 },
        { XL: 0 },
        { XXL: 0 },
        { XXXL: 0 }
      ],
      // step: null,
      submitted: false,
      validated: false
    };
  },
  mounted: function() {
    this.checkscore();
    // this.focusInput();
  },
  methods: {
    // focusInput() {
    //   this.$refs.startDate.focus();
    // },
    checkscore: function() {
      axios.get("http://localhost:9000/checkscoresize").then(res => {
        console.log(res);
        this.point[0].XXS = res.data[6].sizePoint;
        this.point[1].XS = res.data[4].sizePoint;
        this.point[2].S = res.data[2].sizePoint;
        this.point[3].M = res.data[1].sizePoint;
        this.point[4].L = res.data[0].sizePoint;
        this.point[5].XL = res.data[3].sizePoint;
        this.point[6].XXL = res.data[5].sizePoint;
        this.point[7].XXXL = res.data[7].sizePoint;
        console.log(this.point);
        
      });
     
    },
    addPoint: function() {
      // this.submitted = false;
      this.$validator.validate().then(valid => {
        if (valid) {
          // this.validated = true;
          axios
            .post("http://localhost:9000/setscoresize", { point: this.point })
            .then(res => {
              console.log(this.point);
            });
        }
      });
    },
    // clear: function() {
    //   (this.validated = false),
    //     (this.point.XXS = ""),
    //     (this.point.XS = ""),
    //     (this.point.S = ""),
    //     (this.point.M = ""),
    //     (this.point.L = ""),
    //     (this.point.XL = ""),
    //     (this.point.XLL = ""),
    //     (this.point.XXL = "");
    // }
    // nextStep: function() {
    //   if (this.step === "startscore") {
    //     this.step = "startscorexs";
    //     // this.$refs.endDate.focus();
    //   } else if (this.step === "startscorexs") {
    //     this.step = null;
    //     this.$refs.endDate.blur();
    //   }
    // }
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