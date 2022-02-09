<template>
  <div>
    <span class="title">Filtering by state</span>
    <div class="block-filters">
      <div>
        <input
          type="radio"
          name=""
          id="all"
          value="all"
          checked
          v-model="stateTicket"
          @change="withoutFilterByState"
        />
        <label for="all">all</label>
      </div>
      <div>
        <input
          type="radio"
          name=""
          id="active"
          value="active"
          v-model="stateTicket"
          @change="filterByState"
        />
        <label for="active">active</label>
      </div>
      <div>
        <input
          type="radio"
          name=""
          id="closed"
          value="closed"
          v-model="stateTicket"
          @change="filterByState"
        />
        <label for="closed">closed</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      stateTicket: "",
    };
  },
  methods: {
    filterByState() {
      this.$emit("eventfilter", this.stateTicket);
    },
    withoutFilterByState() {
      this.$emit("eventwithoutfilter");
    },
  },
};
</script>
<style scoped>
.title {
  display: inline-block;
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.block-filters {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20%;
  margin: 0 auto;
}
</style>
