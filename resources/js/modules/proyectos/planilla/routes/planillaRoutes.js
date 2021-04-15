let title = "Planilla";
const planillaRoutes = [
	{
		path: '/planilla',
		name: 'planilla-index',
		component: () => import ('../views/index.vue'),
		meta: {
			title: title + 'es'
		}
	},
	{
		path: '/planilla/create',
		name: 'planilla-create',
		component: () => import ('../views/create.vue'),
		meta: {
		title: title + ' | Nuevo'
		}
	},
	{
        path: '/planilla/:id/edit',
        name: 'planilla-edit',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    },
	//////mis rutas
    {
        path: '/planilla/:id/addmaterial',
        name: 'planilla-add',
        component: () => import ('../views/detalle.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    },
	{
        path: '/planilla/:id/ver',
        name: 'planilla-ver',
        component: () => import ('../views/ver_estado.vue'),
        meta: {
            title: title + ' | Modificar'
        }
    },

];
export default planillaRoutes;