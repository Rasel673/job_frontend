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
          <div class="row my-4">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                    >Previous</a
                  >
                </li>
                <li class="page-item active">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
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
const loaded = ref(false);

const fetchPosts = async () => {
  try {
    const response = await $fetch(`${apiBaseUrl}post_by_category/${id}`);
    // console.log(response);
    let data = response.data;
    if (data.length > 0) {
      loaded.value = true;
      posts.value = data;
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
