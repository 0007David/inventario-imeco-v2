let title = "Proyecto";
const proyectoRoutes = [
	{
		path: '/proyectos',
		name: 'proyecto-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 's'
		}
	},
	{
		path: '/proyecto/create',
		name: 'proyecto-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
	{
        path: '/proyecto/:id/edit',
        name: 'proyecto-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    }
];
export default proyectoRoutes;