<template>
  <div class="main">
    <DetailTicketComp
      :ticket="ticketById"
      @eventaddcomment="addComment($event)"
      @eventselectstate="stateChange($event)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DetailTicketComp from "../components/forDetailTicket/DetailTicketComp.vue";

export default {
  components: {
    DetailTicketComp,
  },
  data: function () {
    return {
      text: "",
    };
  },
  methods: {
    ...mapActions("mainstore", {
      reqUpdateTicketComment: "reqUpdateTicketComment",
    }),
    ...mapActions("mainstore", {
      reqUpdateTicketState: "reqUpdateTicketState",
    }),
    addComment(data) {
      this.reqUpdateTicketComment(data);
    },
    stateChange(data) {
      this.reqUpdateTicketState(data);
    },
  },
  computed: {
    ...mapGetters("mainstore", { allTickets: "allTickets" }),
    ticketById() {
      return this.allTickets.find((e) => e.id == this.$route.params.id);
    },
  },
};
</script>

<style scoped></style>
