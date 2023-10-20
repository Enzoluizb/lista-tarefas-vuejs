<template>
  <v-container class="pa-8" fluid>
    <h1>Minha Lista de Tarefas</h1>
    <v-form>
      <v-text-field label="Nova Tarefa" v-model="novaTarefa" @keydown.enter="adicionar">
        <v-icon slot="append" @click="adicionar">mdi-send</v-icon>
      </v-text-field>
    </v-form>
    <v-divider></v-divider>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="tarefa of tarefas" :key="tarefa.titulo"> {{ tarefa.titulo }}</v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      novaTarefa: '',
      tarefas: [
        {titulo: "Tarefa 1"},
        {titulo: "Tarefa 1"},
        {titulo: "Tarefa 1"},
      ]
    };
  },
  methods: {
    adicionar(e) {
      e.preventDefault();
      this.tarefas.push({titulo: this.novaTarefa})
      this.novaTarefa = ""
    }
  }
}
</script>

<style>

</style>