import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ShowInvoice from "@/views/ShowInvoice.vue";
import EditInvoice from "@/views/EditInvoice.vue";

const routes = [
  { path: "/", redirect: "/invoices" },
  { path: "/invoices", name: "InvoicesIndex", component: Home },
  { path: "/invoices/:id", name: "InvoicesShow", component: ShowInvoice },
  { path: "/invoices/:id/edit", name: "InvoicesEdit", component: EditInvoice },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
