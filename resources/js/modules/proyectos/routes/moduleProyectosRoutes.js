
import etapaRoutes from '../etapas/routes/etapaRoutes';
import planillaRoutes from '../planilla/routes/planillaRoutes';
// import rolRoutes from "../roles/routes/rolRoutes";


const moduleProyectosRoutes = [
    ...etapaRoutes,
    ...planillaRoutes
    // ...rolRoutes
];

export default moduleProyectosRoutes;