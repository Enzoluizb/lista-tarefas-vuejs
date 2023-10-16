<template>
  <header>
    <h1>{{ valor }}</h1>
  </header>
</template>

<script>
export default {
  props: ["valor"],
};
</script>

<style>
header {
  background-color: royalblue;
  color: white;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>