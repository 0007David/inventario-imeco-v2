

import moduleUsuariosRoutes from '../modules/usuarios/routes/moduleUsuariosRoutes';
import moduleProyectosRoutes from '../modules/proyectos/routes/moduleProyectosRoutes';
import moduleAlmacenRoutes from '../modules/inventario/routes/moduleInventarioRoutes';

import ArticleIndex from '../components/ArticleIndex.vue';
import ArticleCreate from '../components/ArticleCreate.vue';
import ArticleShow from '../components/ArticleShow.vue';
import ArticleEdit from '../components/ArticleEdit.vue';


const routes = [
    {
        name: 'home',
        path: '/',
        component: ArticleIndex
    },
    {
        name: 'create',
        path: '/article/create',
        component: ArticleCreate
    },
    {
        name: 'edit',
        path: '/article/edit/:id',
        component: ArticleEdit
    },
    {
        name: 'show',
        path: '/article/show/:id',
        component: ArticleShow
    },
    ...moduleUsuariosRoutes,
    ...moduleProyectosRoutes,
    ...moduleAlmacenRoutes,
    {
        path: '*',
        beforeEnter: async (to, from, next) => {
            // util.hideSpinnerLoading();
            // console.log(to, from, next);
            next();
        },
        component: () => import('../views/layout/notFound')
    }
];

export default routes;