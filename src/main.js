require("babel-runtime/regenerator");
require("webpack-hot-middleware/client?reload=true");
import VueRouter from "vue-router";
import App from "./app.vue";
require("./main.css");
require("./index.html");


var Vue = require('vue');
Vue.use(VueRouter);

const routes = [];

const router =  new VueRouter({
	routes: routes
});

new Vue({
    el: 	'#app',
	router: router,
	render: h => h(App), //Don't know what this is, but it renders .vue files!!

	
});
