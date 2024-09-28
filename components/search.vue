<template lang="">
  <div>
    <!-- search -->
    <section class="my-3">
      <div class="row mt-5 pt-5">
        <!-- Custom rounded search bars with input group -->
        <form action="">
          <div
            class="p-1 ms-auto bg-light border rounded rounded-pill shadow-sm mb-4 col-md-12 col-sm-12 transition-width"
            :class="{ 'col-lg-4': isNarrow, 'col-lg-12': !isNarrow }"
          >
            <div class="input-group">
              <input
                type="search"
                placeholder="Search"
                aria-describedby="button-addon1"
                class="form-control search border-0 bg-light"
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
        <!-- End -->
      </div>
    </section>
  </div>
</template>

<script setup>
const isNarrow = ref(true);
const searchBarToggle = () => {
  isNarrow.value = false;
};
</script>
<style>
.transition-width {
  transition: width 0.5s ease;
}
</style>
