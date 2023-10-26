<template>
  <v-container class="pa-8" fluid>
    <h1>Perfil do usuário</h1>
    <v-form>
      <v-container>
        <v-text-field label="Nome" v-model="nome"></v-text-field>
        <v-text-field label="Sobrenome" v-model="sobrenome"></v-text-field>
        <v-btn color="primary">Salvar</v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      sobrenome: '',
    }
  }
}
</script>

<style>

</style>