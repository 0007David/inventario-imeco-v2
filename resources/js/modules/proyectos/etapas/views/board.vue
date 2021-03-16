<template>
  <div class="content-wrapper">
    <div class="flex justify-center">
      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div
          v-for="column in columnas"
          :key="column.title"
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"
        >
          <p
            class="text-gray-700 font-semibold font-sans tracking-wide text-sm"
          >
            {{ column.title }}
          </p>
          <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
          <draggable
            :list="column.tasks"
            :animation="200"
            ghost-class="ghost-card"
            group="tasks"
          >
            <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
            <task-card
              v-for="task in column.tasks"
              :key="task.id"
              :task="task"
              class="mt-3 cursor-move"
            >
            </task-card>
            <!-- </transition-group> -->
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import TaskCard from "../components/TaskCard";
import axiosClient from "../../../../utils/axiosClient";
import { atob, btoa } from "../../../../mixins/util";

export default {
  name: "board",
  components: {
    TaskCard,
    draggable,
  },
  created() {
	  this.getData();
  },
  data() {
    return {
      columns: [
        {
          title: "Lista de tareas", // Backlog
          tasks: [
            {
              id: 1,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 2,
              title: "Provide documentation on integrations",
              date: "Sep 12",
            },
            {
              id: 3,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 4,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 5,
              title: "Test checkout flow",
              date: "Sep 15",
              type: "QA",
            },
          ],
        },
      ],
	  columnas: [],
    };
  },
  methods: {
    getData() {
      axiosClient.get(
		  "/etapa/" + this.desencrypt(this.$route.params.id) + "/show")
        .then((response) => {
          console.log(response);
          let respuesta = response.data.data;
          this.cargarData(respuesta);
        })
        .catch((error) => {
          console.log(error);
          // alert(error);
          // this.setErrorProyecto(error);
        });
    },
	cargarData(data) {
		let types = ["Feature Request", "Design", "QA", "Backend", "Frontend"];
		data.etapas.forEach(etapa => {
			let columna = new Object();
			columna.title = etapa.nombre
			columna.tasks = [];
			etapa.sub_etapas.forEach( (sub, index) => {
				let task = new Object()
				task.id = index +1;
				task.title = sub.nombre;
				task.date = sub.fecha_inicio;
				task.type = types[Math.floor(Math.random() * types.length)];//"Feature Request"
				columna.tasks.push(task);
				console.log('Task', task);
			});
			console.log(columna);
			this.columnas.push(columna);
		});
	},
	encrypt(value){
		return btoa(value);
	},
	desencrypt(value) {
		return atob(value);
	}
  },
};
</script>

<style scoped>
@import "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css";

.column-width {
  min-width: 320px;
  width: 320px;
}
/* Unfortunately @apply cannot be setup in codesandbox,
    but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}
</style>
