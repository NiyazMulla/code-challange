import React from "react";

//base
export const linkBasePath = "/dashboard";

//links
export const linkPageLogin = "/";
export const linkPageView1 = "/console/view1";
export const linkPageView2 = "/console/view2";

//linknames
export const linkNamePageLogin = "Login";
export const linkNamePageView1 = "View1";
export const linkNamePageView2 = "View2";

//imports
const View1 = React.lazy(() => import("./views/View1"));
const View2 = React.lazy(() => import("./views/View2"));

//routes
const routes = [
  {
    path: linkPageView1,
    exact: true,
    name: linkNamePageView1,
    component: View1,
  },
  { path: linkPageView1, name: linkNamePageView2, component: View2 },
];

export default routes;
