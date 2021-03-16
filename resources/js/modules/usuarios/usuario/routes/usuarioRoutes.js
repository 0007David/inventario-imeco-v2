let title = "Usuario";
const usuarioRoutes = [
	{
		path: '/usuarios',
		name: 'usuario-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 's'
		}
	},
	{
		path: '/usuario/create',
		name: 'usuario-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
	{

        path: '/usuario/:id/edit',
        name: 'usuario-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    }
];
export default usuarioRoutes;