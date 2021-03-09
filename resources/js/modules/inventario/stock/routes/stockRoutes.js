let title = "Existencia Stock";
const stockRoutes = [
	{
		path: '/stock',
		name: 'stock-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 's'
		}
	},
];
export default stockRoutes;
