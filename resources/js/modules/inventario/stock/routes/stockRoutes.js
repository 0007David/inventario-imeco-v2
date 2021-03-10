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
	{
		path: '/stock/create',
		name: 'stock-create',
		component: () => import ('../views/create.vue'),
		meta: {
			title: 'Stock | Crear'
		}
	},
];
export default stockRoutes;
