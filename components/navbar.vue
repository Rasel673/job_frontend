<template lang="">
  <div>
    <!-- Navbar  -->
    <nav
      class="navbar fixed-top navbar-expand-lg border bg-light mb-2"
      id="navbar"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"
            ><i class="fa-solid fa-bars"></i
          ></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <nuxt-link to="/" class="navbar-brand"
            ><img
              src="/images/logo.png"
              class="card-img-top img-fluid floating"
              alt="..."
          /></nuxt-link>
          <ul
            class="navbar-nav ms-auto mb-2 mb-lg-0 text-dark"
            v-if="categories"
          >
            <li
              class="nav-item dropdown"
              v-for="(category, index) in categories"
            >
              <nuxt-link
                :to="`/category_posts-${category.id}`"
                class="nav-link dropdown-toggle text-dark"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
                v-if="category.sub_categories"
                >{{ category.name }}</nuxt-link
              >

              <nuxt-link
                class="nav-link text-dark"
                aria-current="page"
                :to="`/category_posts-${category.id}`"
                v-else
                >{{ category.name }}</nuxt-link
              >

              <ul class="dropdown-menu text" v-if="category.sub_categories">
                <li v-for="(SubCategory, index) in category.sub_categories">
                  <nuxt-link
                    class="dropdown-item"
                    :to="`/category_posts-${SubCategory.id}`"
                    >{{ SubCategory.name }}</nuxt-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const config = useRuntimeConfig();
const apiBaseUrl = config.public.BASE_URL;
const categories = ref(null);

const fetchCategories = async () => {
  try {
    const response = await $fetch(`${apiBaseUrl}categories`);
    // console.log(response.data);
    categories.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchCategories();
});
</script>
