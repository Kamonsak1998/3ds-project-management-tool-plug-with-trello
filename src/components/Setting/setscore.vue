<template>
  <div class="card">
    <div class="card-body">
      <div class="form-group row">
        <label class="col-md-6 col-form-label form-control-label">XXS</label>
        <div class="col-md-6">
          <div class="form-group">
            <input
              @keyup.enter="$refs.XS.focus"
              name="XXS"
              type="text"
              class="form-control"
              pattern="[0-9]+"
              v-model="point[0]"
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
              @keyup.enter="$refs.S.focus"
              name="XS"
              type="text"
              class="form-control"
              pattern="[0-9]+"
              v-on:keyup.enter="$event.target.nextElementSibling.focus()"
              v-model="point[1]"
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
              @keyup.enter="$refs.M.focus"
              name="S"
              type="text"
              class="form-control"
              pattern="[0-9]+"
              v-model="point[2]"
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
              @keyup.enter="$refs.L.focus"
              name="M"
              type="text"
              class="form-control"
              pattern="[0-9]+"
              v-model="point[3]"
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
              @keyup.enter="$refs.XL.focus"
              name="L"
              type="text"
              class="form-control"
              pattern="[0-9]+"
              v-model="point[4]"
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
              @keyup.enter="$refs.XXL.focus"
              name="XL"
              type="text"
              class="form-control"
              pattern="[0-9]+"
              v-model="point[5]"
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
              @keyup.enter="$refs.XXXL.focus"
              name="XXL"
              type="text"
              class="form-control"
              pattern="[0-9]+"
              v-model="point[6]"
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
              pattern="[0-9]+"
              v-model="point[7]"
              v-validate="'required|decimal|max:5'"
              :class="{ 'is-invalid': submitted && errors.has('point') }"
            />
            <div
              v-if="submitted && errors.has('point')"
              class="invalid-feedback"
            >{{ errors.first('point') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject:["parentValidator"],
  created() {
    this.$validator = this.parentValidator
  },
  props: {
    point: [],
    model: {
      type: Object,
      required: true
    },
    point: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      submitted: false,
    };
  },
  mounted: function() {
    this.checkscore();
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    }
  },
  methods: {
    formValidate() {
        // valiadate this form parent components call this
        console.log('validate',this.errors);
        this.submitted = true;
        console.log(this.valid);
        return this.$validator.validate().then(valid => {
          console.log('valid : setscore',valid);
        })
      },
    checkscore: function() {
      this.point[0] = this.model.sizes[6].sizePoint;
      this.point[1] = this.model.sizes[4].sizePoint;
      this.point[2] = this.model.sizes[2].sizePoint;
      this.point[3] = this.model.sizes[1].sizePoint;
      this.point[4] = this.model.sizes[0].sizePoint;
      this.point[5] = this.model.sizes[3].sizePoint;
      this.point[6] = this.model.sizes[5].sizePoint;
      this.point[7] = this.model.sizes[7].sizePoint;
    },
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