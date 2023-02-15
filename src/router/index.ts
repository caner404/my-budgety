import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ShowInvoice from "@/views/ShowInvoice.vue";
import EditInvoice from "@/views/EditInvoice.vue";
import CreateInvoice from "@/views/CreateInvoice.vue";

const routes = [
  { path: "/", redirect: "/invoices" },
  { path: "/invoices", name: "InvoicesIndex", component: Home },
  { path: "/invoices/:id", name: "InvoicesShow", component: ShowInvoice },
  { path: "/invoices/:id/edit", name: "InvoicesEdit", component: EditInvoice },
  {
    path: "/invoices/new",
    name: "InvoicesCreate",
    component: CreateInvoice,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { routes };

export default router;
