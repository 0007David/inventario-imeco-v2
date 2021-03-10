
<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Existencia de Materiales</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Stock</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <section class="content">
            <div class="container-fluid">
                <!-- Main row -->
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <!-- <h3 class="card-title">DataTable with minimal features &amp; hover style</h3> -->
                                <router-link
                                    :to="{ name: 'material-index' }"
                                    class="btn btn-primary">
                                    Materiales
                                </router-link>
                                <router-link
                                    :to="{ name: 'stock-create' }"
                                    class="btn btn-primary">
                                    Materiales Para Ingresar Stock
                                    <b-badge variant="success"> +{{cantStockable}} <span class="sr-only">unread messages</span></b-badge>
                                </router-link>
                                <b-badge variant="success">Abastecido</b-badge>
                                <b-badge variant="warning">Proximo a pedir</b-badge>
                                <b-badge variant="danger">Hacer Pedido</b-badge>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="dataTables_wrapper dt-bootstrap4">
                                    <div class="row mb-1">
                                        <div class="col-sm-3">
                                            <div class="btn-group">
                                            <span class="pt-2 mr-1">Mostrar </span>
                                            <b-form-select
                                                id="per-page-select"
                                                v-model="perPage"
                                                :options="pageOptions"
                                                size="sm"
                                            ></b-form-select>
                                            <span class="pt-2 ml-1"> Registros</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 offset-sm-6 text-right">
                                            <div class="form-group row">
                                                <div class="col-sm-4"></div>
                                                <div class="col-sm-8">
                                                    <input type="search"
                                                        class="form-control"
                                                        v-model="filter"
                                                        placeholder="Buscar"
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <b-row>
                                        <div class="col-sm-12" style="display: block; width: 100%">
                                            <!-- Tabla -->
                                            <b-table
                                                class="table table-striped table-bordered table-hover"
                                                :fields="fields"
                                                :items="materialesStock"
                                                :filter="filter"
                                                :current-page="currentPage"
                                                :per-page="perPage"
                                                :busy="isBusy"
                                                small
                                                @filtered="onFiltered"
                                                responsive="sm">
                                                <!-- Example scoped slot for select state illustrative purposes -->
                                                <template #cell(index)="row">
                                                    {{ row.index + 1 }}
                                                </template>
                                                <template class="text-center" #cell(stock_disponible)="row">
                                                    <b-td
                                                        v-if="esExistencia(row.item.cantidad_max, row.item.stock_disponible) == 0"
                                                        variant="success">
                                                        <b-badge variant="success">
                                                            {{ row.item.stock_disponible }}
                                                        </b-badge>
                                                    </b-td>
                                                    <b-td
                                                        v-else-if="esExistencia(row.item.cantidad_max, row.item.stock_disponible) == 1"
                                                        variant="warning">
                                                        <b-badge variant="warning">
                                                            {{ row.item.stock_disponible }}
                                                        </b-badge>
                                                    </b-td>
                                                    <b-td v-else variant="danger">
                                                        <b-badge variant="danger">
                                                        {{ row.item.stock_disponible }}
                                                        </b-badge>
                                                    </b-td>
                                                </template>
                                                <template #table-busy>
                                                    <div class="text-center text-danger my-2">
                                                    <b-spinner class="align-middle"></b-spinner>
                                                    <strong>Loading...</strong>
                                                    </div>
                                                </template>
                                            </b-table>
                                        </div>
                                        <b-row>
                                            <div class="col-sm-8"></div>
                                            <div class="col-sm-4">
                                                <!-- Paginacion -->
                                                <b-pagination
                                                    v-model="currentPage"
                                                    :total-rows="totalRows"
                                                    :per-page="perPage"
                                                    align="fill"
                                                    size="sm"
                                                    class="my-0"
                                                ></b-pagination>
                                            </div>
                                        </b-row>
                                    </b-row>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>

                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
import axiosClient from '../../../../utils/axiosClient';
    export default {
        name: 'index',
        created() {
            this.getStocks();
        },
        data() {
            return {
                totalRows: 1,
                currentPage: 1,
                perPage: 50,
                pageOptions: [5, 10, 15, 30, 50],
                filter: null,
                isBusy: false,
                cantStockable: 0,
                fields: [
                    // A virtual column that doesn't exist in items ☑
                    {key:'index', label:'N°', class: 'text-center', thStyle: {width: '1%'}},
                    {key:'almacen', label:'Alamcen', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'nro_material', label:'Codigo', class: 'text-center', thStyle: {width: '2%'}, sortable: true},
                    {key:'nombre', label:'Nombre', class: 'text-center', thStyle: {width: '20%'}, sortable: true},
                    {key:'cantidad_max', label:'Cantidad Max.', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'stock_disponible', label:'Stock', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'fecha_vencimiento', label:'Fecha Venc.', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                ],
                materialesStock: [],
                errors: []
            }
        },
        methods: {
            getStocks(){

                this.isBusy = true;
                const params = {
                    page: 1,
                    per_page: this.perPage,
                    filter_key: this.filter
                };
                axiosClient.get(
                    '/stock',
                    {params}
                ).then(response => {
                    let respuesta = response.data.data;
                    this.isBusy = false;
                    console.log(respuesta);
                    this.materialesStock = respuesta.materiales;
                    this.totalRows = respuesta.total;

                }).catch(error => {
                    // console.log(error);
                    alert(error);
                    // this.setErrorUsuario(error);
                });
            },
            onFiltered(filteredItems) {
				// Trigger pagination to update the number of buttons/pages due to filtering
				this.totalRows = filteredItems.length
				this.currentPage = 1
			},
            esExistencia(cantidadMax, cantidadStock){
                let  success = 75; // %
                let  warning = 45; // %
                let  danger = 20; // %
                let result = (cantidadStock * 100) / cantidadMax;
                // console.log('max', cantidadMax, 'stock', cantidadStock, 'result', result);
                return result >= success ? 0 : (result >= warning) ? 1 : 2;
            }
        }

    }
</script>
<style scoped>
    /* Hoja de Estilo */
</style>
