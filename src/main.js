import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Views
import HomeView from "./components/views/HomeView.vue";
import QuestionView from "./components/views/QuestionView.vue";
import ResultsView from "./components/views/ResultsView.vue";

// Define routes
const routes = [
  { path: "/", component: HomeView },
  { path: "/quiz", component: QuestionView },
  { path: "/results", name: "results", component: ResultsView, props: true },
];

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router: new VueRouter({ routes }),
  render: (h) => h(App),
}).$mount("#app");
