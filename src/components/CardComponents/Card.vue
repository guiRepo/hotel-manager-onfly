<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{
    data: any
  }>()


  const currentIndex = ref(0)
  const stars = ref(4)

  function nextImage () {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }

  function prevImage () {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  }
</script>

<template>
  <div class="carousel-container">
    <transition name="fade" mode="out-in">
      <img
        :key="data.id"
        :src="data.thumb"
        class="carousel-image"
      />
    </transition>

    <div class="rating-overlay">
      <q-rating v-model="data.stars" :max="5" size="15px" color="primary" />
    </div>

    <q-btn flat round dense icon="chevron_left" class="nav-btn left" color="primary" @click="prevImage" />
    <q-btn flat round dense icon="chevron_right" class="nav-btn right" color="primary" @click="nextImage" />
  </div>
</template>

<style scoped lang="scss">
  .carousel-container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-start-start-radius: 20px;
    border-end-start-radius: 20px;
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .rating-overlay {
    position: absolute;
    top: 8px;
    left: 8px;
    background: white;
    padding: 4px 6px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-left: 10px;
    margin-top: 10px;
  }

  .nav-btn {
    position: absolute;
    bottom: 0%;
    margin-inline: 10px;
    transform: translateY(-50%);
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 2;
    color: black;
  }

  .nav-btn.left {
    left: 8px;
  }

  .nav-btn.right {
    right: 8px;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>