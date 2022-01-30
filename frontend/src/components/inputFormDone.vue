<template>
  <ul>
    <li v-for="done in doneList" v-bind:key="done.id">
      <div class="container">
        <input type="text" size="40px" v-model="done.name" />
        <input type="button" value="DELETE" v-on:click="deletedone({ done })" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "inputFormDone",
  data: function () {
    return {
      donetext: "",
    };
  },
  computed: {
    doneList() {
      return this.$store.state.doneList;
    },
  },
  methods: {
    deletedone: function (done) {
      // 'deletedone'ミューションをコミット
      this.$store.commit("deletedone", { done });
    },
  },
};
</script>

<style></style>
