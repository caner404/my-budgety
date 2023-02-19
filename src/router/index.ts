import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/invoices" },
  {
    path: "/invoices",
    name: "InvoicesIndex",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/invoices/:id",
    name: "InvoicesShow",
    component: () => import("@/views/ShowInvoice.vue"),
  },
  {
    path: "/invoices/:id/edit",
    name: "InvoicesEdit",
    component: () => import("@/views/EditInvoice.vue"),
  },
  {
    path: "/invoices/new",
    name: "InvoicesCreate",
    component: () => import("@/views/CreateInvoice.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes };

export default router;
