<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination d-flex justify-content-center">
        <li class="page-item" :class="[{'disabled': !pagenation.has_pre}]">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="pageComponent(pagenation.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pagenation.total_pages"
          :key="page"
          :class="[{ 'active' : pagenation.current_page == page}]"
        >
          <a class="page-link" href="#" @click.prevent="pageComponent(page)">{{ page }}</a>
        </li>

        <li class="page-item" :class="[{'disabled': !pagenation.has_next}]">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="pageComponent(pagenation.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "pagenation",
  props: {
    pagenation: {
      type: Object
    }
  },
  methods: {
    pageComponent(page) {
      var vm = this;
      vm.$emit("changeCurrPage", page);
    }
  }
};
</script>