import { registerApplication, start } from "single-spa";

// Importaciones para Bootstrap (Sistema de diseño)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Popper js
import '@popperjs/core/dist/umd/popper.min.js';

// Import de funciones que ayudan a acoplar y desacoplar MF
import * as isActive from './activeWhen';

const MainList = ['/mf-header', '/mf-sidebar', '/mf-main', '/mf-informes'];
const LoginList = ['/'];

// parcel Header
registerApplication({
  name: "@app/mf-header",
  app: () => System.import("@app/mf-header"),
  activeWhen: (location) => {
    return isActive.showWhenPrefix('@app/mf-header', MainList, location)
  }
 });

 // parcel Sidebar
registerApplication({
  name: "@app/mf-sidebar",
  app: () => System.import("@app/mf-sidebar"),
  activeWhen: (location) => {
    return isActive.showWhenPrefix('@app/mf-sidebar', MainList, location)
  }
 });

  // parcel main
registerApplication({
  name: "@app/mf-main",
  app: () => System.import("@app/mf-main"),
  activeWhen: (location) => {
    return isActive.showWhenPrefix('@app/mf-main', MainList, location)
  }
 });

  // parcel Login
registerApplication({
  name: "@app/mf-login",
  app: () => System.import("@app/mf-login"),
  activeWhen: (location) => {
    return isActive.showWhenAnyOf('@app/mf-login', LoginList, location)
  }
 });

 // parcel Informes
 registerApplication({
  name: "@app/mf-informes",
  app: () => System.import("@app/mf-informes"),
  activeWhen: (location) => {
    return isActive.showWhenPrefix('@app/mf-informes', MainList, location)
  }
});

// registerApplication({
//   name: "@app/navbar",
//   app: () => System.import("@app/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
