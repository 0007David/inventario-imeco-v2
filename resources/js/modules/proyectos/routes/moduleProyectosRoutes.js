
import etapaRoutes from '../etapas/routes/etapaRoutes';
import planillaRoutes from '../planilla/routes/planillaRoutes';
import proyectoRoutes from "../proyecto/routes/proyectoRoutes";


const moduleProyectosRoutes = [
    ...etapaRoutes,
    ...planillaRoutes,
    ...proyectoRoutes,
];

export default moduleProyectosRoutes;