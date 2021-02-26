
import almacenRoutes from '../almacen/routes/almacenRoutes';
import materialRoutes from '../material/routes/materialRoutes';
import notaSalidaRoutes from "../nota_salida/routes/notaSalidaRoutes";


const moduleAlmacenRoutes = [
    ...almacenRoutes,
    ...materialRoutes,
    ...notaSalidaRoutes
];

export default moduleAlmacenRoutes;