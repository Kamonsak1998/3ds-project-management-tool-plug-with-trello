<template>
  <div class="container">
    <p class="p">Test</p>
    <b-table
      class="table"
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: "score",
      sortDesc: false,
      fields: [
      
        { key: "isActive", sortable: false },
        { key: "last_name", sortable: true },
        { key: "first_name", sortable: true },
        { key: "age", sortable: true }
      ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
    };
  }
};
</script>

<style>
.p {
  margin-top: 50px;
}
.table {
  text-align: center;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  text-align: center;
}
</style>
