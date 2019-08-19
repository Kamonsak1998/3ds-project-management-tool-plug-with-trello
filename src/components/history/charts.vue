<template>
    <div class="animated fadeIn" v-if="isShowModel === true">
        <b-card-group rows class="card-rows">
            <b-card class="shadow p-3 mb-5 bg-white rounded">
                <BarColumn v-bind:model="TotalModel"/>
            </b-card>
        </b-card-group>
        <b-card-group rows class="card-rows" v-for="(models,index) in this.SprintModel.scoreOfSprint" :key="index">
            <b-card class="shadow p-3 mb-5 bg-white rounded">
                <Bar v-bind:model="SprintModel.scoreOfSprint[index]"/>
            </b-card>
        </b-card-group>
    </div>
</template>


<script>
    import Bar from "@/components/history/Bar.vue";
    import BarColumn from "@/components/history/BarColumn.vue";
    import {mapGetters} from "vuex";
    import axios from "axios";

    export default {
        data() {
            return {
                TotalModel: Object,
                SprintModel: {
                    scoreOfSprint: Object
                },
                isShowModel: false
            };
        },
        mounted: function () {
            this.getHistory()
        },
        computed: {
            ...mapGetters(["idBoard", "token"])
        },
        components: {
            Bar,
            BarColumn
        },
        methods: {
            getHistory() {
                if (this.idBoard != "") {
                    axios
                        .post("http://localhost:9000/gethistory", {
                            token: this.token,
                            idBoard: this.idBoard
                        })
                        .then(resp => {
                            this.TotalModel = resp.data.ScoreTotal;
                            this.SprintModel = {
                                ...this.SprintModel, ...{
                                    scoreOfSprint: resp.data.scoreOfSprint
                                }
                            }
                            this.isShowModel = true
                        })
                        .catch(err => {
                            alert(err);
                        });
                    return;
                } else {
                    this.$router.push("/dashboards");
                    return;
                }
            },


        }
    };
</script>

