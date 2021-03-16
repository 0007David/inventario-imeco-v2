let title = "Etapas";
const etapaRoutes = [
	{
		path: '/etapas',
		name: 'etapa-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 's'
		}
	},
	{
		path: '/etapa/create',
		name: 'etapa-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
    {
        path: '/etapa/:id/show',
        name: 'etapa-show',
        component: () => import ('../views/board.vue'),
        meta: {
            title: title + ' | Board'
        }
    }
];
export default etapaRoutes;