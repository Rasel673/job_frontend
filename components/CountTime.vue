<template lang="">
  <div>
    <div class="countingTime d-flex" v-if="timeLeft > 0">
      <div class="count p-2 text-enter m-1 d-block">
        <p class="fw-normal fs-5 text-center m-0">{{ days }}</p>
        <p class="m-0">DAYS</p>
      </div>
      <div class="count p-2 text-enter m-1 d-block">
        <p class="fw-normal fs-5 text-center m-0">{{ hours }}</p>
        <p class="m-0">HOUR</p>
      </div>

      <div class="count p-2 text-enter m-1">
        <p class="fw-normal fs-5 text-center m-0">{{ minutes }}</p>
        <p class="m-0">MIN</p>
      </div>

      <div class="count p-2 text-enter m-1">
        <p class="fw-normal fs-5 text-center m-0">{{ seconds }}</p>
        <p class="m-0">SEC</p>
      </div>
    </div>

    <h4 v-else class="text-danger mt-2">Time Over</h4>
  </div>
</template>
<script setup>
const { date } = defineProps({
  date: String,
});

const targetTime = ref(new Date(date).getTime());
const timeLeft = ref(targetTime.value - new Date().getTime());
let interval;

const updateCountdown = () => {
  timeLeft.value = targetTime.value - new Date().getTime();
  if (timeLeft.value <= 0) {
    clearInterval(interval);
    timeLeft.value = 0;
  }
};

const days = computed(() => Math.floor(timeLeft.value / (1000 * 60 * 60 * 24)));
const hours = computed(() =>
  Math.floor((timeLeft.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
);
const minutes = computed(() =>
  Math.floor((timeLeft.value % (1000 * 60 * 60)) / (1000 * 60))
);
const seconds = computed(() =>
  Math.floor((timeLeft.value % (1000 * 60)) / 1000)
);

onMounted(() => {
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
<style scope>
.count {
  background: #123744;
  color: white;
  border-radius: 10%;
}
</style>
