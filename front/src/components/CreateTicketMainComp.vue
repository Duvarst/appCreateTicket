<template>
  <div class="wrap">
    <div v-if="createdFlag">
      <CreateTicketComp @createticket="reqCreateTicket($event)" />
    </div>
    <div class="ticket-created" v-else>
      <span class="create-text">Ticket Created</span>
      <button @click="createNewTicket">Create New Ticket</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CreateTicketComp from "./forCreateTicket/createTicketComp.vue";

export default {
  components: {
    CreateTicketComp,
  },
  data: function () {
    return {
      createdFlag: true,
    };
  },
  methods: {
    ...mapActions("mainstore", { addTicket: "addTicket" }),
    ...mapActions("mainstore", { reqGetData: "reqGetData" }),

    handelFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    reqCreateTicket(data) {
      this.addTicket(data);
      this.createdFlag = false;
    },
    createNewTicket() {
      this.createdFlag = true;
    },
  },
  computed: {
    ...mapGetters("mainstore", { allTickets: "allTickets" }),
  },
  created() {
    this.reqGetData();
  },
};
</script>

<style scoped>
.wrap {
  width: 50vw;
  margin: 0 auto;
}
.ticket-created {
  display: flex;
  flex-direction: column;
}
.create-text {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
button {
  font-size: 1.2rem;
  color: #fff;
  border-radius: 5px;
  border: 0;
  background: #1bbc9b;
  padding: 7px 50px;
  cursor: pointer;
}
</style>
