
import almacenRoutes from '../almacen/routes/almacenRoutes';
import materialRoutes from '../material/routes/materialRoutes';
import notaSalidaRoutes from "../nota_salida/routes/notaSalidaRoutes";
import proveedorRoutes from "../proveedor/routes/proveedorRoutes";
import unidadmedidaRoutes from "../unidad_medida/routes/unidadmedidaRoutes";
import categoriaRoutes from "../categoria/routes/categoriaRoutes";
import stockRoutes from '../stock/routes/stockRoutes';
import notaCompraRoutes from '../nota_compra/routes/notaCompraRoutes';


const moduleAlmacenRoutes = [
    ...almacenRoutes,
    ...materialRoutes,
    ...notaSalidaRoutes,
    ...proveedorRoutes,
    ...unidadmedidaRoutes,
    ...categoriaRoutes,
    ...stockRoutes,
    ...notaCompraRoutes,
];

export default moduleAlmacenRoutes;