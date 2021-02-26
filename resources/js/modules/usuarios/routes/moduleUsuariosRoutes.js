
import usuarioRoutes from '../usuario/routes/usuarioRoutes';
import rolRoutes from "../roles/routes/rolRoutes";


const moduleUsuariosRoutes = [
    ...usuarioRoutes,
    ...rolRoutes
];

export default moduleUsuariosRoutes;
