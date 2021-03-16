let title = "Almacen";
const almacenRoutes = [
	{
		path: '/almacenes',
		name: 'almacen-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 'es'
		}
	},
	{
		path: '/almacen/create',
		name: 'almacen-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
	{
        path: '/almacen/:id/edit',
        name: 'almacen-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    }
];
export default almacenRoutes;