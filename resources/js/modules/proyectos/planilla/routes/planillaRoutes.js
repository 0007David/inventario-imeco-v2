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
        path: '/planilla/:id/editmaterial',
        name: 'planilla-edit-material',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | ModificarMaterial'
        }
    },

	{
        path: '/planilla/:id/addmaterial',
        name: 'planilla-add-material',
        component: () => import ('../views/update.vue'),
        meta: {
            title: title + ' | AdicionarMaterial'
        }
    },

];
export default planillaRoutes;