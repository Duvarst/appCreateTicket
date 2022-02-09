<template>
  <div class="wrap">
    <div class="block-filter-search">
      <div class="block-filter-search_items">
        <SearchTicketComp
          @eventsearch="reqByTitle($event)"
          @eventnonesearch="reqGetAllTickets"
        />
      </div>
      <div class="block-filter-search_items">
        <FilterTickets
          @eventfilter="filterByState($event)"
          @eventwithoutfilter="reqGetAllTickets"
        />
      </div>
    </div>

    <div v-for="it in displayListWithPagination()" :key="it.id">
      <Ticket
        :title="it.title"
        :description="it.description"
        :itemId="it.id"
        :state="it.state"
        :id="it.id"
      />
    </div>
    <div>
      <PaginationListTicketComp @pagetransition="rangeRecording($event)" />
    </div>
  </div>
</template>
<script>
import Ticket from "./forListTickets/Ticket.vue";
import { mapGetters, mapActions } from "vuex";
import FilterTickets from "./forListTickets/filterTickets.vue";
import SearchTicketComp from "./forListTickets/searchTicketComp.vue";
import PaginationListTicketComp from "./forListTickets/PaginationListTicketComp.vue";

export default {
  data: function () {
    return {
      data: "",
      rangeDisplay: [0, 3],
    };
  },
  components: {
    Ticket,
    FilterTickets,
    SearchTicketComp,
    PaginationListTicketComp,
  },
  methods: {
    ...mapActions("mainstore", { reqGetData: "reqGetData" }),
    ...mapActions("mainstore", { reqGetDataByState: "reqGetDataByState" }),
    ...mapActions("mainstore", { reqGetDataByTitle: "reqGetDataByTitle" }),
    async filterByState(state) {
      await this.reqGetDataByState(state);
      this.rangeRecording();
    },
    async reqGetAllTickets() {
      await this.reqGetData();
      this.rangeRecording();
    },
    reqByTitle(text) {
      this.reqGetDataByTitle(text);
      this.rangeRecording();
    },
    rangeRecording(range) {
      range ? (this.rangeDisplay = range) : (this.rangeDisplay = [0, 3]);
    },
    displayListWithPagination() {
      return this.allTickets.slice(this.rangeDisplay[0], this.rangeDisplay[1]);
    },
  },
  computed: {
    ...mapGetters("mainstore", { allTickets: "allTickets" }),
  },
  created() {
    this.reqGetData();
  },
  mounted() {
    this.displayListWithPagination();
  },
};
</script>
<style scoped>
.wrap {
  width: 90vw;
  margin: 0 auto;
}
.block-filter-search {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.block-filter-search_items {
  width: 50%;
}
</style>
