let title = "Nota de Compra";
const notaCompraRoutes = [
	{
		path: '/nota-compra',
		name: 'nota-compra-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 's'
		}
	},
	{
		path: '/nota-compra/create',
		name: 'nota-compra-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
	{
        path: '/nota-compra/:id/edit',
        name: 'nota-compra-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    },
	{
        path: '/nota-compra/:id/show',
        name: 'nota-compra-show',
        component: () => import ('../views/show.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    }
];
export default notaCompraRoutes;
