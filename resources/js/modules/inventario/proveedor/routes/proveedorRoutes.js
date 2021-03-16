let title = "Proveedor";
const proveedorRoutes = [
	{
		path: '/proveedores',
		name: 'proveedor-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 'es'
		}
	},
	{
		path: '/proveedor/create',
		name: 'proveedor-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
	{
        path: '/proveedor/:id/edit',
        name: 'proveedor-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    }
];
export default proveedorRoutes;