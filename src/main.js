import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import EmployeeList from "./components/Views/Employees/EmployeeList.vue";
import CustomerList from "./components/Views/Customers/CustomerList.vue";
Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  {
    path: "/nhan-vien",
    component: EmployeeList,
  },
  {
    path: "/khach-hang",
    component: CustomerList,
  },
];
const router = new VueRouter({
  routes,
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
