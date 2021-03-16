

import moduleUsuariosRoutes from '../modules/usuarios/routes/moduleUsuariosRoutes';
import moduleProyectosRoutes from '../modules/proyectos/routes/moduleProyectosRoutes';
import moduleAlmacenRoutes from '../modules/inventario/routes/moduleInventarioRoutes';

import { isAuth } from '../utils/utils';


const routes = [
    {
        name: '/',
        path: '/',
        component: () => import ('./../views/home/home.vue'),
    },
    {
        name: 'home',
        path: '/home',
        component: () => import ('./../views/home/home.vue'),
    },
    ...moduleUsuariosRoutes,
    ...moduleProyectosRoutes,
    ...moduleAlmacenRoutes,
    {
        path: '*',
        beforeEnter:  function (to, from, next) {
            // console.log('Route', to, from, next);
            if(isAuth() &&  to.name !== 'login')
                window.location.href = '/login';
            else
                next();

        },
    },
];

export default routes;