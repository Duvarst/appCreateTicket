<template>
  <div class="wrap-search">
    <label for="input-search">Search</label>
    <input
      type="text"
      id="input-search"
      v-model="text"
      @change="search"
      @keyup.enter="search"
    />
    <button @click="clearInput">Clear</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      text: "",
    };
  },
  methods: {
    search() {
      this.text === ""
        ? this.$emit("eventnonesearch")
        : this.$emit("eventsearch", this.text);
    },
    clearInput() {
      if (this.text !== "") {
        this.text = "";
        this.$emit("eventnonesearch");
      }
    },
  },
};
</script>

<style scoped>
.wrap-search {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
#input-search {
  padding: 2px 5px;
  margin: 10px 0px;
}
button {
  font-size: 1.2rem;
  color: #fff;
  border-radius: 5px;
  border: 0;
  background: #1bbc9b;
  padding: 5px 20px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>
