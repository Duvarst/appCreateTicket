<template>
  <div class="main">
    <div class="main-item">
      <span class="title">Title</span>
      <div class="content">{{ ticket.title }}</div>
      <span class="title">Description</span>

      <div class="content">{{ ticket.description }}</div>
      <span class="title">Ticket state</span>
      <select
        class="select-css"
        :value="ticket.state"
        @change="selectChange($event, ticket._id)"
      >
        <option value="active">active</option>
        <option value="closed">closed</option>
      </select>

      <span class="title">Additional materials</span>
      <div class="content">{{ ticket.file }}</div>
    </div>
    <div class="main-item">
      <span class="title">Comments</span>
      <div
        class="content comment"
        v-for="(it, index) in ticket.comments"
        :key="index"
      >
        <div>{{ it }}</div>
      </div>
      <div v-if="ticket.state == 'active'">
        <span class="title">Write a сomment</span>
        <textarea class="comment-field" v-model="text"></textarea>
        <div>
          <button class="button" @click="addNewComment(ticket._id)">
            Add Comment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ticket: Object,
  },
  data: function () {
    return {
      text: "",
    };
  },
  methods: {
    addNewComment(_id) {
      this.$emit("eventaddcomment", { _id: _id, text: this.text });
      this.text = "";
    },
    selectChange(event, _id) {
      let value = event.target.value;
      this.$emit("eventselectstate", { _id: _id, stateValue: value });
    },
  },
};
</script>
<style scoped>
.select-css {
  width: 100%;
  display: block;
  margin: 5px 0px;
  padding: 2px;
  font-size: 1rem;
}
option {
  width: 100%;
}
.content {
  border: 1px solid #000;
  margin: 5px 0px;
  padding: 2px;
  text-align: start;
}
.comment-field {
  width: 100%;
  margin: 10px 0px;
  padding: 2px 3px;
}
.title {
  width: 100%;
  display: inline-block;
  text-align: start;
  background: #1bbc9b;
  color: #fff;
  padding: 3px;
  margin: 5px 0px;
}
.main {
  display: flex;
  justify-content: space-around;
}
.main-item {
  width: 40%;
  border: 2px solid #000;
  padding: 10px 20px;
}
.button {
  font-size: 1.2rem;
  color: #fff;
  border-radius: 5px;
  border: 0;
  background: #1bbc9b;
  padding: 7px 50px;
  cursor: pointer;
}
</style>
