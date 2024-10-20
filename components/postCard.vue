<template lang="">
  <div>
    <div class="col">
      <nuxt-link class="nav-link p-0" :to="`/post-${id}`">
        <div class="card mt-3 pulse">
          <img :src="image" class="card-img-top img-fluid" alt="..." />
          <div class="card-body text-dark">
            <h5 class="card-title fw-bolder fs-5">
              {{ title }}
            </h5>
            <p class="card-text" v-if="description">
              {{ description }}
            </p>
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-primary bg-purple">
                বিস্তারিত দেখুন
              </button>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const { id, title, image, description } = defineProps({
  id: Number,
  title: String,
  image: String,
  description: String,
});
</script>
