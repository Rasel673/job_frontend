<template lang="">
  <div>
    <div class="col pulse">
      <nuxt-link :to="`/category_posts-${id}`">
        <div class="category_card shadow border rounded m-2">
          <img :src="image" class="p-3 mx-auto d-block" alt="..." />
        </div>
      </nuxt-link>
      <p class="text-center text-dark mt-2">
        <strong>{{ name }}</strong>
      </p>
    </div>
  </div>
</template>
<script setup>
const { id, name, image } = defineProps({
  id: Number,
  name: String,
  image: String,
});
</script>
<style lang=""></style>
