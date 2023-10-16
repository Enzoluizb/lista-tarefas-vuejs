<template>
  <section>
    <CabecalhoPrincipal :valor="titulo" />
    <div class="container">
      <adicionar-tarefa @adicionarTarefa="adicionarTarefa" />
      <listar-tarefas :tarefas="tarefas" />
      <footer>
        <em>Altere aqui o título da sua lista de tarefas</em>
        <entrada-dados v-model="titulo" type="text" />
      </footer>
    </div>
    <RodapePrincipal />
  </section>
</template>

<script>
import CabecalhoPrincipal from "@/components/CabecalhoPrincipal";
import RodapePrincipal from "@/components/RodapePrincipal";
import ListarTarefas from "@/components/ListarTarefas";
import AdicionarTarefa from "@/components/AdicionarTarefa";
import EntradaDados from "@/components/templates/EntradaDados";
export default {
  name: "App",
  components: {
    CabecalhoPrincipal,
    RodapePrincipal,
    ListarTarefas,
    AdicionarTarefa,
    EntradaDados,
  },
  data() {
    return {
      titulo: "Minha lista de tarefas",
      tarefas: [
        { titulo: "Estudar", checked: false },
        { titulo: "Programar", checked: true },
      ],
    };
  },
  methods: {
    adicionarTarefa(novaTarefa) {
      this.tarefas.push({
        titulo: novaTarefa,
        checked: false,
      });
    },
  },
};
</script>

<style>
.container {
  width: 60%;
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