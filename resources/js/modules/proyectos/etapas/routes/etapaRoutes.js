let title = "Etapas";
const etapaRoutes = [
	{
		path: '/etapa',
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
        path: '/etapa/:id/edit',
        name: 'etapa-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    },
    {
        path: '/etapa/board',
        name: 'etapa-board',
        component: () => import ('../views/board.vue'),
        meta: {
            title: title + ' | Board'
        }
    }
];
export default etapaRoutes;