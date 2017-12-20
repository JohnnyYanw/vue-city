import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
	{
		path: '/',
		redirect: 'index'
	}, {
		path: '/index',
		name: 'index',
		component: resolve => require(['components/City'], resolve)
	}
];

const router = new Router({
	routes
});

export default router;
