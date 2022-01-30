<template>
  <ul>
    <li v-for="wip in wipList" v-bind:key="wip.id">
      <div class="container">
        <input type="text" size="40px" v-model="wip.name" />
        <input type="button" value="DONE" v-on:click="adddone({ wip })" />
        <input type="button" value="DELETE" v-on:click="deletewip({ wip })" />
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "inputFormWip",
  data: function () {
    return {
      wiptext: "",
    };
  },
  computed: {
    wipList() {
      return this.$store.state.wipList;
    },
  },
  methods: {
    adddone: function ({ wip }) {
      // 'adddone'ミューテーションをコミット
      this.$store.commit("adddone", { wip });
    },
    deletewip: function ({ wip }) {
      // 'deletewip'ミューテーションをコミット
      this.$store.commit("deletewip", { wip });
    },
  },
};
</script>

<style></style>
