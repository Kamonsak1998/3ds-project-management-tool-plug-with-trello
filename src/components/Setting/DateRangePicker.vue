<template>
  <b-container class="bv-example-row row-setdate">
    <div class="animated fadeIn loading" v-if="isShowModel === false">
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>
    </div>
    <div class="card card-setdate" v-if="isShowModel === true">
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
        <b-col class="col-setdate">
          <h2 class="pb-4">Set Date Time Stamp</h2>
          <p>Start Sprint</p>
          <div class="form-group form-inline flex-nowrap">
            <input
              type="text"
              class="form-control w-100 daterangepicker-date-input"
              ref="startDate"
              :value="startDate | dateFormat"
              :disabled="validated"
              @click="reset"
              @focus="step = 'selectStartDate'"
              @blur="inputDate"
            />
          </div>
          <br />
          <p>Sprint Period (Day)</p>
          <input
            name="total"
            type="text"
            class="form-control w-100 daterangepicker-date-input"
            pattern="^[1-9]+"
            ref="endDate"
            placeholder="1 - 30"
            :disabled="validated"
            v-model="total"
            v-validate="'required|numeric|max:2'"
            :class="{ 'is-invalid': submitted && errors.has('total') }"
          />
          <br />
          <div
            v-if="submitted && errors.has('total')"
            class="invalid-feedback"
          >{{ errors.first('total') }}</div>
          <br />
          <div class="form-group form-inline justify-content-end mb-0">
            <button type="button" class="btn btn-light" @click="reset">Reset</button>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="col" v-if="isShowModel === true">
      <div class="row">
        <setscore
          :point="pointt"
          @input="(newpoint) => {pointt = newpoint}"
          :model="points"
          class="col-6 col-setting"
        ></setscore>
        <selectlist :model="cardlist" class="col-6 col-setting"></selectlist>
        <button
          type="button"
          class="btn btn-primary ml-2"
          @click="submit"
          :disabled="validated"
        >Submit</button>
      </div>
    </div>
  </b-container>
</template>

<script>
import setscore from "@/components/Setting/setscore";
import selectlist from "@/components/Setting/selectlist";
import moment from "moment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import DateRangePickerCalendar from "./DateRangePickerCalendar";
import { mapGetters } from "vuex";
import { BoardService } from "../../services/BoardService";
const boardservice = new BoardService();

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
    }
  },
  data() {
    return {
      pointt: [],
      cardlist: [],
      isShowModel: false,
      validated: false,
      total: "",
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
  mounted: function() {
    console.log(this.pointt);
    this.checkDate();
    // this.focusInput();
  },

  computed: {
    ...mapGetters({
      idBoard: "user/idBoard",
      nameBoard: "user/nameBoard",
      token: "user/token"
    }),
    nextMonth: function() {
      return moment.utc(this.month).add(1, "month");
    },
    // For multi prop watchers
    range: function() {
      return this.startDate, this.endDate;
    }
  },

  methods: {
    focusInput() {
      setTimeout(() => {
        this.$refs.startDate.focus();
      }, 200);
    },
    checkDate: function() {
      boardservice
        .fetchchecksetting({ idBoard: this.idBoard })
        .then(res => {
          // console.log(res);

          this.isShowModel = true;
          this.points = res.data.scoreSize;
          this.cardlist = res.data.lists;
          if (res.data.date.status == true) {
            this.cardlist = res.data.lists;
            this.total = res.data.date.sprintDay;
          }
        })
        .catch(err => {
          alert(err);
        });
    },
    clear: function() {
      this.total = "";
    },

    reset: function() {
      this.validated = false;
      this.startDate = moment.utc();
      this.endDate = moment.utc();
      this.total = "";
      this.focusInput();
    },

    goToPrevMonth: function() {
      this.month = moment.utc(this.month).subtract(1, "month");
    },
    goToNextMonth: function() {
      this.month = moment.utc(this.month).add(1, "month");
    },
    selectDate: function(date) {
      if (this.step === "selectStartDate") {
        this.startDate = date;
      } else if (this.step === "endDate") {
        this.endDate = date;
      }
    },
    // Step flow for date range selections
    nextStep: function() {
      if (this.step === "selectStartDate") {
        this.step = "selectEndDate";
        this.$refs.endDate.focus();
      } else if (this.step === "endDate") {
        this.step = null;
        this.$refs.endDate.blur();
      }
    },

    // Try to update the step date from an input value
    inputDate: function(input) {
      let date = moment.utc(input.target.value, "YYYY/MM/DD");
      if (date.isValid()) {
        this.selectDate(date);
      }
      this.nextStep();
    },
    submit: function() {
      console.log(this.pointt);
      this.submitted = true;
      this.$validator.validate().then(valid => {
        this.totaled = parseInt(this.total);
        if (valid) {
          // this.validated = true;
          // console.log(this.startDate);
          boardservice
            .fetchsettingdata({
              setDate: 
                {
                  startDate: this.startDate,
                  sprintDay: this.totaled,
                  endDate: this.endDate,
                  idBoard: this.idBoard,
                  boardName: this.nameBoard
                }
              ,
              setscore:  {Points : this.pointt} 
            })
            .then(() => {
              
              alert("Save Success");              
              // console.log(this.setDate);
              // this.$router.push("/feature");
              // console.log(this.setscore);
            })
            .catch(err => {
              if (err) {
                alert("Sorry Connection not found");
              }
            });
        }
      });
    }
  },
  watch: {
    total: function(value) {
      this.endDate = moment
        .utc(this.startDate, "YYYY/MM/DD")
        .add(1 * value - 1, "days");
    }
  },
  filters: {
    dateFormat: function(value) {
      return value ? value.format("YYYY/MM/DD") : "";
    }
  },
  components: { DateRangePickerCalendar, setscore, selectlist }
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
.col-setdate {
  padding: 40px;
}
.row-setdate {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.card-setdate {
  border-radius: 10px;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
