<template>
  <div class="container_pagination">
    <ul class="pagination" ref="blockPage">
      <li
        class="pg_items"
        v-for="numPage in navPages"
        :key="numPage"
        @click="pagesClick(numPage)"
      >
        {{ numPage }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function () {
    return {
      items: 1,
      itemsPerPage: 3,
      page: 1,
    };
  },
  methods: {
    pagesClick(val) {
      this.page = val;
      let range = this.paginate();
      this.$emit("pagetransition", range);
      this.activePage();
    },
    async activePage() {
      let arr = await [...this.$refs.blockPage.children];
      arr.forEach((el) => {
        if (el.classList.contains("pg_items")) {
          el.classList.remove("active");
        }
      });
      arr[this.page - 1].classList.add("active");
    },
    paginate() {
      let page = this.page;
      let itemsPerPage = this.itemsPerPage;
      let from = page * itemsPerPage - itemsPerPage;
      let to = page * itemsPerPage;
      return [from, to];
    },
  },
  computed: {
    ...mapGetters("mainstore", { allTickets: "allTickets" }),
    navPages() {
      let pageNumbers = Math.ceil(this.allTickets.length / this.itemsPerPage);
      let arrPages = [];
      for (let ind = 1; ind <= pageNumbers; ind++) {
        arrPages.push(ind);
      }

      return arrPages;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.activePage();
    });
  },
};
</script>
<style scoped>
.pg_items {
  display: inline-block;
  font-size: 1.2rem;
  border: 1px solid #000;
  padding: 2px 5px;
  margin: 0px 2px;
  cursor: pointer;
}
.pg_items.active {
  background: #000;
  color: #fff;
}
</style>
