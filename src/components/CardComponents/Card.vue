<script setup lang="ts">
  import { ref } from 'vue'

  const images = [
    'https://cdn.quasar.dev/img/mountains.jpg',
    'https://cdn.quasar.dev/img/parallax2.jpg',
    'https://cdn.quasar.dev/img/quasar.jpg'
  ]

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
    <img :src="images[currentIndex]" class="carousel-image" />

    <div class="rating-overlay">
      <q-rating v-model="stars" :max="5" size="20px" color="primary" />
    </div>

    <q-btn flat round dense icon="chevron_left" class="nav-btn left" @click="prevImage" />
    <q-btn flat round dense icon="chevron_right" class="nav-btn right" @click="nextImage" />
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
    border-radius: 8px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 2;
  }

  .nav-btn.left {
    left: 8px;
  }

  .nav-btn.right {
    right: 8px;
  }
</style>