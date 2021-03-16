let title = "Material";
const materialRoutes = [
	{
		path: '/materiales',
		name: 'material-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 'es'
		}
	},
	{
		path: '/material/create',
		name: 'material-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
	{
        path: '/material/:id/edit',
        name: 'material-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    },
	{
        path: '/material/:id/show',
        name: 'material-show',
        component: () => import ('../views/show.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    }
];
export default materialRoutes;
