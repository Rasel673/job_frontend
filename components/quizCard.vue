<template lang="">
  <div>
    <div class="card border-0 mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="image" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body pt-0">
            <p class="card-text p-0 m-0">
              <small class="text-muted">{{ date }}</small>
            </p>
            <h5 class="card-title">
              {{ title }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { date, title, image } = defineProps({
  date: String,
  title: String,
  image: String,
});
</script>
<style lang=""></style>
