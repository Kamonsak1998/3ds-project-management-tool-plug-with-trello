<template>
  <div class="login">
    <div class="container">
      <div class="row">
       
      </div>
    </div>
  </div>
</template>



<script>
import { OAuth } from "oauthio-web";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  mounted: function() {
    if (this.token != "") {
      this.$router.push("/dashboards");
      return;
    } else {
      return;
    }
  },
  computed: {
    ...mapGetters(["token"])
  },  
  methods: {
    ...mapActions(["getToken"]),
    Auth() {
      const self = this;
      OAuth.initialize("DHnRyNE6xOi3k0N6jJapv7YTITc");
      var provider = "trello";
      OAuth.popup(provider,{cache: true})
        .done(function(trello) {
          const token = trello.oauth_token;
          self.getToken(token);
          if (this.token != "") {
            self.$router.push("/dashboards");
          }
        })
        .fail(function(err) {
          alert(err);
        });

    }
  },
};
</script>

<style>

</style>
