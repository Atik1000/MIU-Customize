import Dashboard from "views/Dashboard/Dashboard.js";
import ExtendedForms from "views/Forms/ExtendedForms.js";

import PricingPage from "views/Pages/PricingPage.js";
import RTLSupport from "views/Pages/RTLSupport.js";
import RegularForms from "views/Forms/RegularForms.js";

import ValidationForms from "views/Forms/ValidationForms.js";
import Wizard from "views/Forms/Wizard.js";

import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Users",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/pricing-page",
        name: "First User",
        component: PricingPage,
        layout: "/auth",
      },
      {
        path: "/rtl-support-page",
        name: "Second User",
        component: RTLSupport,
        layout: "/rtl",
      },
    ],
  },

  {
    collapse: true,
    name: "Product",
    icon: "content_paste",
    state: "formsCollapse",
    views: [
      {
        path: "/regular-forms",
        name: "Regular Forms",
        component: RegularForms,
        layout: "/admin",
      },
      {
        path: "/extended-forms",
        component: ExtendedForms,
        layout: "/admin",
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        component: ValidationForms,
        layout: "/admin",
      },
      {
        path: "/wizard",
        name: "Wizard",
        component: Wizard,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/pricing-page",
    icon: "attach_money",
    name: "Blog",
    component: PricingPage,
    layout: "/auth",
  },
  {
    path: "/rtl-support-page",
    name: "Login",
    icon: "verified_user",
    component: RTLSupport,
    layout: "/auth",
  },
  {
    path: "/rtl-support-page",
    name: "Register",
    icon: "verified_user",
    component: RTLSupport,
    layout: "/auth",
  },
  {
    path: "/rtl-support-page",
    name: "NotFound",
    icon: "verified_user",
    component: RTLSupport,
    layout: "/auth",
  },
];
export default dashRoutes;
