
import almacenRoutes from '../almacen/routes/almacenRoutes';
import materialRoutes from '../material/routes/materialRoutes';
import notaSalidaRoutes from "../nota_salida/routes/notaSalidaRoutes";
import proveedorRoutes from "../proveedor/routes/proveedorRoutes";
import unidadmedidaRoutes from "../unidad_medida/routes/unidadmedidaRoutes";
import categoriaRoutes from "../categoria/routes/categoriaRoutes";


const moduleAlmacenRoutes = [
    ...almacenRoutes,
    ...materialRoutes,
    ...notaSalidaRoutes,
    ...proveedorRoutes,
    ...unidadmedidaRoutes,
    ...categoriaRoutes
];

export default moduleAlmacenRoutes;