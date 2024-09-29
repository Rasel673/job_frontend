<template lang="">
  <div>
    <Search />

    <!-- posts content -->
    <div class="row">
      <!-- posts -->
      <div class="col-md-9 post">
        <div v-if="loaded">
          <div
            class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 row-cols-lg-3"
          >
            <PostCard
              v-for="(post, index) in posts"
              :key="index"
              :id="post.id"
              :title="post.title"
              :image="post.thumbnail"
              :description="post.short_description"
            />
          </div>

          <!--post pagination -->

          <!--post pagination -->
          <div class="row my-4" v-if="pagination">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li
                  class="page-item"
                  :class="paginate.active ? 'active' : ''"
                  v-for="(paginate, index) in pagination"
                >
                  <a
                    class="page-link"
                    @click="
                      paginate.url != null ? fetchPosts(paginate.url) : ''
                    "
                    ><span v-html="paginate.label"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <h5 class="text-danger text-center my-5" v-else>No Post Available</h5>
      </div>

      <!-- right sidebar -->
      <div class="col-md-3 mt-3">
        <div class="recent-news" style="border: 2px solid black;">
          <h4 class="text-dark text-center my-2">
            সর্বশেষ চাকরির খবর
          </h4>
          <Sidebar-Card />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
const config = useRuntimeConfig();
const apiBaseUrl = config.public.BASE_URL;
const posts = ref(null);
const route = useRoute();
const id = route.params.id;
const pagination = ref(null);
const loaded = ref(false);

const fetchPosts = async (
  url = `${apiBaseUrl}post_by_category/${id}?page=1`
) => {
  try {
    const response = await $fetch(url);
    console.log(response);
    let data = response.data;
    if (data.length > 0) {
      loaded.value = true;
      posts.value = data;
      pagination.value = response.meta.links;
    }

    // console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchPosts();
});
</script>
<style lang=""></style>
