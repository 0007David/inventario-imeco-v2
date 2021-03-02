let title = "UnidadMedida";
const unidadmedidaRoutes = [
	{
		path: '/unidadmedida',
		name: 'unidadmedida-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 'es'
		}
	},
	{
		path: '/unidadmedida/create',
		name: 'unidadmedida-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
	{
        path: '/unidadmedida/:id/edit',
        name: 'unidadmedida-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    }
];
export default unidadmedidaRoutes;