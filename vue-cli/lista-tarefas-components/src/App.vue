<template>
  <section>
    <CabecalhoPrincipal />
    <div class="container">
      <h2>{{ titulo }}</h2>
      <div class="input-group">
        <input
          @keyup.enter="adicionarTarefa"
          type="text"
          v-model="novaTarefa"
        />
        <span class="input-group-btn">
          <button @click="adicionarTarefa" class="btn btn-primary">
            Adicionar
          </button>
        </span>
      </div>
      <ul>
        <li
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :class="{ removed: tarefa.checked }"
        >
          <input type="checkbox" v-model="tarefa.checked" />
          <label>{{ tarefa.titulo }}</label>
        </li>
      </ul>
      <footer>
        <em>Altere aqui o título da sua lista de tarefas</em>
        <input type="text" v-model="titulo" />
      </footer>
    </div>
    <RodapePrincipal />
  </section>
</template>

<script>
import CabecalhoPrincipal from "@/components/CabecalhoPrincipal.vue";
import RodapePrincipal from "@/components/RodapePrincipal.vue";
export default {
  name: "App",
  components: { CabecalhoPrincipal, RodapePrincipal },
  data() {
    return {
      titulo: "Lista de Tarefas",
      novaTarefa: "",
      tarefas: [
        { titulo: "Estudar", checked: false },
        { titulo: "Ler", checked: true },
      ],
    };
  },
  methods: {
    adicionarTarefa() {
      this.tarefas.push({
        titulo: this.novaTarefa,
        checked: false,
      });
      this.novaTarefa = "";
    },
  },
};
</script>

<style>
.container {
  width: 40%;
  margin: 20px auto 0px auto;
}

ul li {
  list-style: none;
}

.removed {
  color: gray;
}

.removed label {
  text-decoration: line-through;
}
</style>
