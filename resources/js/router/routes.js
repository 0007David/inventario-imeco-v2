

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
        name: '/home',
        path: '/',
        component: () => import ('./../views/home/home.vue'),
    },
    ...moduleUsuariosRoutes,
    ...moduleProyectosRoutes,
    ...moduleAlmacenRoutes,
    {
        path: '*',
        beforeEnter:  function (to, from, next) {
            if (to.name !== 'login' && !isAuth()) {
                // console.log('no login');
                window.location.href = '/notFount';
            } else if(to.name !== 'login' && isAuth()){
                window.location.href = '/login';
            }else{
                next();
            }

        },
    },
    // router.beforeEach((to, from, next) => {
    //     if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    //     else next()
    //   })
];

export default routes;