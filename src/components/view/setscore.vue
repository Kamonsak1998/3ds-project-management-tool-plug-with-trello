<template>
  <div class="card">
    <div class="card-header feature">
      <h3 class="mb-0">Set Score Up to You!</h3>
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
              ref="startxxs"
              pattern="[1-9]+"
              v-model="point[0].XXS"
              :disabled="validated"
              v-validate="'required|decimal|max:5'"
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
              v-model="point[1].XS"
              :disabled="validated"
              v-validate="'required|decimal|max:5'"
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
              v-validate="'required|decimal|max:5'"
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
              v-validate="'required|decimal|max:5'"
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
              v-validate="'required|decimal|max:5'"
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
              v-validate="'required|decimal|max:5'"
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
              v-validate="'required|decimal|max:5'"
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
              v-validate="'required|decimal|max:5'"
              :class="{ 'is-invalid': submitted && errors.has('XXXL') }"
            />
            <div
              v-if="submitted && errors.has('XXXL')"
              class="invalid-feedback"
            >{{ errors.first('XXXL') }}</div>
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
        { XXS:Float64Array },
        { XS: Float64Array },
        { S: Float64Array },
        { M: Float64Array },
        { L: Float64Array },
        { XL: Float64Array },
        { XXL: Float64Array },
        { XXXL: Float64Array }
      ],
      submitted: false,
      validated: false
    };
  },
  mounted: function() {
    this.checkscore();
  },
  methods: {
    checkscore: function() {
      axios.get("http://localhost:9000/checkscoresize").then(res => {
        if (res.data.status == true) {
          this.validated = res.data.status;
          this.point[0].XXS = res.data.sizes[6].sizePoint;
          this.point[1].XS = res.data.sizes[4].sizePoint;
          this.point[2].S = res.data.sizes[2].sizePoint;
          this.point[3].M = res.data.sizes[1].sizePoint;
          this.point[4].L = res.data.sizes[0].sizePoint;
          this.point[5].XL = res.data.sizes[3].sizePoint;
          this.point[6].XXL = res.data.sizes[5].sizePoint;
          this.point[7].XXXL = res.data.sizes[7].sizePoint; 
        }
      });
    },
    addPoint: function() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.validated = true;
          axios
                  .post("http://localhost:9000/setscoresize", {
                    Points:
                            [
                              parseFloat(this.point[0].XXS,10),
                              parseFloat(this.point[1].XS,10),
                              parseFloat(this.point[2].S,10),
                              parseFloat(this.point[3].M,10),
                              parseFloat(this.point[4].L,10),
                              parseFloat(this.point[5].XL,10),
                              parseFloat(this.point[6].XXL,10),
                              parseFloat(this.point[7].XXXL,10),
                            ]
                  })
            .then(()=> {
              console.log(this.point);
              alert("Save success");
            });
        }
      });
    },
    clear: function() {
        this.$refs.startxxs.focus();
        this.validated = false,
        this.point[0].XXS = '',
        this.point[1].XS = '',
        this.point[2].S = '',
        this.point[3].M = '',
        this.point[4].L = '',
        this.point[5].XL = '',
        this.point[6].XXL = '',
        this.point[7].XXXL = '';
    }
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