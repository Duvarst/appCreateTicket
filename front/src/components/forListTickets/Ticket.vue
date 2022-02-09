<template>
  <div class="ticket-block">
    <div class="item">
      <span>Title</span>
      <div class="text">{{ title }}</div>
    </div>
    <div class="item">
      <span>State</span>
      <div class="text">{{ state }}</div>
    </div>
    <div class="line"></div>
    <div class="item">
      <span>Description</span>
      <div class="text">{{ description }}</div>
    </div>
    <div class="line"></div>
    <div class="item last-item">
      <router-link :to="{ name: 'DetailOneTicket', params: { id: itemId } }"
        >Detail</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: Number,
    state: String,
    title: String,
    description: String,
    itemId: Number,
  },
};
</script>
<style scoped>
.text {
  width: 100%;
  background: #189e83;
  color: #fff;
  text-align: start;
  padding: 3px;
}
.ticket-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border: 2px solid #1bbc9b;
  padding: 5px 10px;
  margin-bottom: 10px;
  flex: 0 1 auto;
}
.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 1 auto;
  margin-bottom: 5px;
}
.line {
  width: 100%;
  height: 1px;
  background: #1bbc9b;
}
</style>
