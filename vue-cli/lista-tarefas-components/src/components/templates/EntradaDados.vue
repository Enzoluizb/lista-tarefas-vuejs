<template>
  <input
    @keyup="$emit('input', valorInterno)"
    @keyup.enter="$emit('salvar')"
    v-model="valorInterno"
    type="text"
  />
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      valorInterno: this.value,
    };
  },
};
</script>

<style>
input {
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  padding: 5px;
  /* width: 250px; */
}
</style>