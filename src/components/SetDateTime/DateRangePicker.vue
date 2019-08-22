<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col v-for="calendarIndex in calendarCount" :key="calendarIndex">
        <date-range-picker-calendar
          :calendarIndex="calendarIndex"
          :calendarCount="calendarCount"
          :month="month"
          :startDate="startDate"
          :endDate="endDate"
          :step="step"
          v-on:goToPrevMonth="goToPrevMonth"
          v-on:goToNextMonth="goToNextMonth"
          v-on:selectDate="selectDate"
          v-on:nextStep="nextStep"
        />
      </b-col>
      <b-col>
        <p>Start Sprint</p>
        <div class="form-group form-inline flex-nowrap">
          <input
            type="text"
            class="form-control w-100 daterangepicker-date-input"
            ref="startDate"
            :value="startDate | dateFormat"
            @focus="step = 'selectStartDate'"
            @blur="inputDate"
          />
        </div>
        <p>Sprint Period</p>
        <input
          name="total"
          type="text"
          class="form-control w-100 daterangepicker-date-input"
          ref="endDate"
          @focus="step = 'selectEndDate'"
          v-model="total"
          v-validate="'required|numeric|max:3'"
          :class="{ 'is-invalid': submitted && errors.has('total') }"
        />
        <div
          v-if="submitted && errors.has('phone')"
          class="invalid-feedback"
        >{{ errors.first('phone') }}</div>
        <br />
        <div class="form-group form-inline justify-content-end mb-0">
          <button type="button" class="btn btn-light" @click="clear">Reset</button>
          <button type="button" class="btn btn-primary ml-2" @click="submit">Submit</button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import DateRangePickerCalendar from "./DateRangePickerCalendar";
import { mapActions, mapGetters } from "vuex";
library.add(faCaretRight);

export default {
  props: {
    calendarCount: {
      type: Number,
      default: 2
    },

    ranges: {
      type: Object,
      default: function() {
        return {};
      }
    },
    defaultRangeSelect: {
      type: String,
      default: "currentMonth"
    }
  },
  data() {
    return {
      total: "",
      sprint: "",
      startDate: moment.utc(),
      endDate: moment.utc(),
      rangeSelect: null,
      month: moment
        .utc()
        .subtract(1, "month")
        .startOf("month"),
      step: null,
      submitted: false
    };
  },
  mounted: function (){
    
  },

  computed: {
    ...mapGetters(["startDates", "Sprints","idBoard"]),
    nextMonth: function() {
      return moment.utc(this.month).add(1, "month");
    },
    // For multi prop watchers
    range: function() {
      return this.startDate, this.endDate;
    }
  },

  methods: {
    clear: function() {
      this.startDate = moment.utc();
      this.endDate = moment.utc();
      this.total = "";
      this.$refs.startDate.focus();
    },

    goToPrevMonth: function() {
      this.month = moment.utc(this.month).subtract(1, "month");
    },
    goToNextMonth: function() {
      this.month = moment.utc(this.month).add(1, "month");
    },
    selectRange: function(rangeKey) {
      let predefinedRange = false;

      // Predefined ranges
      for (const _rangeKey of Object.keys(this.ranges)) {
        const range = this.ranges[_rangeKey];
        if (rangeKey === _rangeKey) {
          predefinedRange = true;

          if (!this.startDate.isSame(range.startDate)) {
            this.startDate = moment.utc(range.startDate);
          }
          if (!this.endDate.isSame(range.endDate)) {
            this.endDate = moment.utc(range.endDate);
          }
        }
      }

      // Custom range
      if (!predefinedRange && this.step == null) {
        this.step = "selectStartDate";
        this.$refs.startDate.focus();
      }
    },

    selectDate: function(date) {
      if (this.step === "selectStartDate") {
        this.startDate = date;
      } else if (this.step === "selectEndDate") {
        this.endDate = date;
      }
    },
    // Step flow for date range selections
    nextStep: function() {
      if (this.step === "selectStartDate") {
        this.step = "selectEndDate";
        this.$refs.endDate.focus();
      } else if (this.step === "selectEndDate") {
        this.step = null;
        this.$refs.endDate.blur();
      }
    },
    // Try to update the step date from an input value
    inputDate: function(input) {
      let date = moment.utc(input.target.value, "YYYY-MM-DD");
      if (date.isValid()) {
        this.selectDate(date);
      }
      this.nextStep();
    },
    // Submit button
    ...mapActions(["getStartDate", "getSprint"]),
    submit: function() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          let endDate = this.endDate;
          this.getStartDate(this.startDate);
          this.getSprint(this.total);
          axios
            .post("http://localhost:9000/setdate", { startDate: this.startDates, Sprint: this.Sprints, endDate, idBoard: this.idBoard })
            .then(res => {
              alert("บันทึกข้อมูลเรียบร้อย");
            })
            .catch(err => {
              if ((err.message = "Sprint error")) {
                alert("Sorry Connection not found");
              }
            });
        }
      });
    }
  },
  watch: {
    rangeSelect: function(rangeKey) {
      this.selectRange(rangeKey);
    },
    total: function(value) {
      this.endDate = moment(this.startDate, "YYYY-MM-DD").add(
        6 * value,
        "days"
      );
    },

    range: function() {
      let predefinedRange = false;
      // Predefined ranges
      for (const rangeKey of Object.keys(this.ranges)) {
        const range = this.ranges[rangeKey];
        if (
          this.startDate.isSame(range.startDate) &&
          this.endDate.isSame(range.endDate)
        ) {
          predefinedRange = true;
          if (this.rangeSelect !== rangeKey) {
            this.rangeSelect = rangeKey;
          }
        }
      }

      // Custom range
      if (!predefinedRange) {
        if (this.rangeSelect !== "custom") {
          this.rangeSelect = "custom";
        }
      }
    }
  },
  filters: {
    dateFormat: function(value) {
      return value ? value.format("YYYY-MM-DD") : "";
    }
  },
  created: function() {
    // Initialize ranges
    this.rangeSelect = this.defaultRangeSelect;
  },
  components: { DateRangePickerCalendar }
};
</script>

<style>
/* Custom row */
.daterangepicker-row {
  margin: -0.5rem;
}

.daterangepicker-col {
  padding: 0.5rem;
  flex-basis: 100%;
}
.daterangepicker-date-input {
  min-width: 120px;
}

/* Select menus border */
.daterangepicker-range-border {
  border-color: #17a2b8 !important;
}

.daterangepicker-range {
  background-color: red !important;
  color: #ffffff;
}
/* Date input focus */
.daterangepicker-date-input:focus {
  border-color: #17a2b8 !important;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.25) !important;
}
</style>
