<template>
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
</template>

<script>
export default {
    props: {
        tarefas: {
            type: Array,
            default() {
                return [{titulo: 'Atividade padrão', checked: false}]
            }
        },
    },
};
</script>

<style></style>
