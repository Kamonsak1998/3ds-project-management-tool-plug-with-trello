<template>
    <div class="card p-5">
        *First list:
        <b-form-select v-model="selectedone">
            <option v-for="(list,index) in model" :key="model">{{list.ListName}}</option>
        </b-form-select>
        <br/>

        Second list:
        <b-form-select v-model="selectedtwo">
            <option v-for="(list,index) in model2">{{list.ListName}}</option>
        </b-form-select>
        <br/>

        Third list:
        <b-form-select v-model="selectedthree">
            <option v-for="(list,index) in model3">{{list.ListName}}</option>
        </b-form-select>
    </div>

</template>

<script>
    export default {
        props: {
            model: [],
        },
        computed: {
            model2() {
                this.result = this.model.filter((list) => {
                    return list.ListName !== this.selectedone
                })
                return this.result
            },
            model3() {
                return this.result.filter((list) => {
                    return list.ListName !== this.selectedtwo
                })
            }
        },
        data() {
            return {
                selectedone: '',
                selectedtwo: '',
                selectedthree: '',
                result: ''
            };
        },
        methods: {
            test() {
                console.log(this.selectedone, this.selectedtwo, this.selectedthree)
            }
        }
    }
</script>

<style>
</style>
