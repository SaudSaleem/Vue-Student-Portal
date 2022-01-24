import Vue from "vue";
import Router from "vue-router";
import teacherLogin from "@/components/teacherLogin";
import studentLogin from "@/components/studentLogin";
import adminLogin from "@/components/adminLogin";
import studentsData from "@/components/students";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "studentLogin",
      component: studentLogin,
    },
    {
      path: "/teacherLogin",
      name: "teacherLogin",
      component: teacherLogin,
    },
    {
      path: "/adminLogin",
      name: "adminLogin",
      component: adminLogin,
    },
    {
      path: "/studentsData",
      name: "studentsData",
      component: studentsData,
    },
  ],
});
