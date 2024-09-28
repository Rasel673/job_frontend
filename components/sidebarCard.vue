<template lang="">
  <div v-if="side_posts">
    <div class="card pulse" v-for="(post, index) in side_posts">
      <nuxt-link class="nav-link" :to="`/post-${post.id}`">
        <div class="card-body">
          <h6 class="card-title text-danger">
            {{ post.title }}
          </h6>

          <p class="card-text text-dark">
            {{ post.subtitle }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
const config = useRuntimeConfig();
const apiBaseUrl = config.public.BASE_URL;
const side_posts = ref(null);

const fetchSidebarPosts = async () => {
  try {
    const response = await $fetch(`${apiBaseUrl}sidebar_posts`);
    side_posts.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  fetchSidebarPosts();
});
</script>
<style lang=""></style>
