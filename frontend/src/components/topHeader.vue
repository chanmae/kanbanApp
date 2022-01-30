<template>
  <header v-bind:id="$style.header">
    <h1 v-bind:class="$style.title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'topHeader',
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style module>
#header {
  display: flex;
  justify-content: center;
  border-bottom: solid black;
}

.title {
  color: black;
  margin: 10px 10% 10px 10%;
}
</style>
