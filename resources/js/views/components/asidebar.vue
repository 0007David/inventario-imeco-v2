<template>
    <div>
         <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="#" class="brand-link">
            <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">IMECO SRL</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
            <!-- Sidebar user panel (optional) -->

            <!-- SidebarSearch Form -->

            <!-- Sidebar Menu -->
            <nav class="mt-4">

                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library -->
                <li class="nav-item menu-open">
                    <router-link :to="{ name: 'home' }" class="nav-link active">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                        Dashboard
                    </p>
                    </router-link>

                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                        Proyectos
                        <i class="fas fa-angle-left right"></i>
                        <span class="right badge badge-danger">New</span>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link :to="{ name: 'proyecto-index' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Proyecto</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'etapa-index' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Etapas</p>
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link :to="{ name: 'planilla-index' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Mis planillas</p>
                            </router-link>
                        </li>

                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-copy"></i>
                    <p>
                        Usuarios
                        <i class="fas fa-angle-left right"></i>
                        <span class="badge badge-info right">6</span>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link :to="{ name: 'usuario-index' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Usuario</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'rol-index' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Roles</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Permisos</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-chart-pie"></i>
                    <p>
                        Inventario
                        <i class="right fas fa-angle-left"></i>
                    </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <router-link :to="{ name: 'almacen-index' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Almacen</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'planilla-index' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Buzon de planillas</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'stock-index' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Stock</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'material-index' }" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Material</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                             <router-link :to="{ name: 'unidadmedida-index' }" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Unidad de medida</p>
                             </router-link>
                        </li>
                         <li class="nav-item">
                             <router-link :to="{ name: 'categoria-index' }" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Categoria del material</p>
                             </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'nota-compra-index' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Nota de Compra</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                             <router-link :to="{ name: 'proveedor-index' }" class="nav-link">
                            <i class="far fa-circle nav-icon"></i>
                            <p>Proveedor</p>
                             </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'nota-salida-index' }" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Nota de Salidas</p>
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="https://adminlte.io/docs/3.1/" target="blank" class="nav-link">
                    <i class="nav-icon fas fa-file"></i>
                    <p>Documentation</p>
                    </a>
                </li>
                <!-- <li class="nav-header">LABELS</li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon far fa-circle text-danger"></i>
                    <p class="text">Important</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon far fa-circle text-warning"></i>
                    <p>Warning</p>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                    <i class="nav-icon far fa-circle text-info"></i>
                    <p>Informational</p>
                    </a>
                </li> -->
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
    </div>
</template>

<script>
    export default {
        name: "asidebar",
        created() {

        },
        data() {
            return {

            }
        }

    }
</script>