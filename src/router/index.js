import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'HelloWorld',
		component: resolve => require(['components/City'], resolve)
	}
];

const router = new Router({
	routes
});

export default router;
