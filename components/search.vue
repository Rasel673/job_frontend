<template lang="">
  <div>
    <!-- search -->
    <section class="my-3">
      <div class="row mt-5 pt-5">
        <!-- Custom rounded search bars with input group -->
        <form action="">
          <div
            class="p-1 ms-auto bg-light border rounded rounded-pill shadow-sm col-md-12 col-sm-12 transition-width"
            :class="{ 'col-lg-4': isNarrow, 'col-lg-12': !isNarrow }"
          >
            <div class="input-group">
              <input
                type="search"
                placeholder="Search"
                aria-describedby="button-addon1"
                class="form-control search border-0 bg-light"
                v-model="search.query"
                @input="searchBarToggle"
              />
              <div class="input-group-append">
                <button
                  id="button-addon1"
                  type="submit"
                  class="btn btn-link text-dark"
                >
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>

        <div class="search_result" v-if="searchResults">
          <ul class="list-group" v-show="searchResults">
            <li class="list-group-item" v-for="(post, index) in searchResults">
              <nuxt-link :to="`/post-${post.id}`">{{ post.title }}</nuxt-link>
            </li>
          </ul>
        </div>

        <!-- End -->
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const apiBaseUrl = config.public.BASE_URL;
const searchResults = ref(null);
const search = ref({
  query: "",
});
const isNarrow = ref(true);

// Watcher for the search query
watch(
  () => search.value.query,
  async (newQuery) => {
    if (newQuery.length > 0) {
      // You can set a minimum length if desired
      isNarrow.value = false; // Toggle the narrow state
      try {
        const response = await $fetch(
          `${apiBaseUrl}posts/search?query=${newQuery}`
        );

        searchResults.value = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      searchResults.value = null; // Reset results if query is empty
    }
  }
);
</script>

<style>
.transition-width {
  transition: width 0.5s ease;
}
</style>
