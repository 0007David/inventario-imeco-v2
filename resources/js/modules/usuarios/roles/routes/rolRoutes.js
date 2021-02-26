let title = "Rol";
const rolRoutes = [
	{
		path: '/rol',
		name: 'rol-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 'es'
		}
	},
	{
		path: '/rol/create',
		name: 'rol-create',
		component: () => import ('../views/create.vue'),
		meta: {
			title: title + ' | Nuevo'
		}
	},
	{
        path: '/rol/:id/modificar',
        name: 'rol-modificar',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    }
];
export default rolRoutes;