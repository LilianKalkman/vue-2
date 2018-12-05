import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

export const eventBus = new Vue({
  data() {
    return {
      names: ["lilian", "pamela", "sander", "nicole"],
      ages: ["28", "30", "29", "25"]
    };
  },
  methods: {
    showAge: function(i) {
      return this.ages[i];
    }
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
