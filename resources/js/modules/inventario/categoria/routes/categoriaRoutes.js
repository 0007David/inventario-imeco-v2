let title = "Categoria";
const categoriaRoutes = [
	{
		path: '/categorias',
		name: 'categoria-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 'es'
		}
	},
	{
		path: '/categoria/create',
		name: 'categoria-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
	{
        path: '/categoria/:id/edit',
        name: 'categoria-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    }
];
export default categoriaRoutes;