new Vue({
  el: "#app",
  data() {
    return {
      titulo: "Minhas tarefas",
      tarefas: [{ titulo: "Estudar", checked: true }, { titulo: "Ler", checked: false }, { titulo: "Escrever", checked: false}],
    };
  },
});
