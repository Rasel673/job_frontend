<template lang="">
  <div>
    <div class="card border-0">
      <div class="card-body pt-0">
        <p class="card-text p-0 m-0">
          <small class="text-muted"
            ><span><i class="fa fa-calendar" aria-hidden="true"></i></span>
            {{ date }}</small
          >
        </p>
        <h5 class="card-title">
          {{ title }}
        </h5>

        <a href="#" class="btn btn-primary btn-flat">Download</a>
      </div>
    </div>
  </div>
</template>
<script setup>
const { date, title } = defineProps({
  title: String,
  date: String,
});
</script>
<style lang=""></style>
