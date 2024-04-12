import { createApp } from "vue"
import  Dashboard  from "./components/Dashboard.vue" 

// Mount funstion to start up the application
const mount = (el) => {
  const app = createApp(Dashboard)
  app.mount(el)
};

// If we are in development and in isolation mode,
// call mount() immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// we are running through the container
// and we should export the mount function

export { mount };
