<template>
  <div class="container">
    <h2 class="my-4 pb-2 border-bottom"></h2>
    <h3 class="pb-2 border-bottom">Set Date Time Stamp</h3>
    <div class="mb-4">
      <date-range-picker v-on:submit="submitted" />
    </div>
    <h3 class="pb-2 border-bottom"></h3>
  </div>
</template>

<script>
import moment from 'moment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import BModalDirective from 'bootstrap-vue/es/directives/modal/modal'
import DateRangePicker from '@/components/SetDateTime/DateRangePicker'
import { mapGetters } from "vuex";


library.add(faCalendarAlt, faCaretDown)

export default {
  components: { DateRangePicker  },
  directives: { 'b-modal': BModalDirective },
  data: () => {
    return {
      startDate: moment.utc().subtract(1, 'month').startOf('month'),
      endDate: moment.utc().subtract(1, 'month').endOf('month').startOf('day')
    }
  },
 mounted: function() {
    if (this.idBoard != "") {
      // console.log(1234);
      
      return;
    } else {
      this.$router.push("/dashboards");
      return;
        // console.log(1234);
    }
  },
  computed: {
    ...mapGetters(["idBoard"])
  },
  methods: {
    setscore(arr){
        this.parameter[arr[0]] = arr[1]
    },
    submitted: function() {
      // console.log(range)
    },
    // Modal methods
    submittedModal: function(range) {
      this.startDate = range.startDate
      this.endDate = range.endDate
      this.closeModal()
    },
    cancelledModal: function() {
      this.closeModal()
    },
    closeModal: function() {
      this.$refs.exampleModal.hide()
    },
    // Popover methods
    submittedPopover: function(range) {
      this.startDate = range.startDate
      this.endDate = range.endDate
      this.closePopover()
    },
    cancelledPopover: function() {
      this.closePopover()
    },
    closePopover: function() {
      this.$refs.examplePopover.$emit('close')
    }
  },
  filters: {
    dateFormat: function(value) {
      return value ? value.format('YYYY-MM-DD') : ''
    }
  }
}
</script>

<style>


.popover {
  max-width: 800px;
}
</style>
