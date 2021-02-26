let title = "Nota de Salida";
const notaSalidaRoutes = [
	{
		path: '/nota-salida',
		name: 'nota-salida-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 's'
		}
	},
	{
		path: '/nota-salida/create',
		name: 'nota-salida-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
	{
        path: '/nota-salida/:id/edit',
        name: 'nota-salida-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    }
];
export default notaSalidaRoutes;
