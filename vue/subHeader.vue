<template>
  <header v-bind:class="$style.subheader">
    <h2 v-bind:class="$style.subheadertitle">{{ subTitle }}</h2>
  </header>
</template>

<script>
export default {
  name: "subHeader",
  props: {
    subTitle: {
      type: String,
    },
  },
};
</script>

<style module>
.subheader {
  border-bottom: solid black;
}

.subheadertitle {
  margin: 0;
}
</style>
