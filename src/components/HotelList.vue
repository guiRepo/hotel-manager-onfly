<script lang="ts">
  import { ref } from 'vue'
  import Card from './CardComponents/Card.vue'
  import Content from './CardComponents/Content.vue'
  import Pricing from './CardComponents/Pricing.vue' 

  export default {
    components: {
      Card,
      Content,
      Pricing
    },
  }
</script>

<template>
  <div class="hotel-list-container">
    <div class="list-cell row no-wrap">
      <div class="a1 col-3">
        <Card />
      </div>

      <div class="a2 col-7">
        <Content />
      </div>

      <div class="a3 col-2">
        <Pricing />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hotel-list-container {
    background-color: $info-100;
    padding: 30px;
    border-start-start-radius: 60px;
    border-start-end-radius: 60px;
    height: 100vh;
  }

  .list-cell {
    background-color: #fff;
    border-radius: 20px;
    height: 230px;
    overflow: hidden;
    display: flex;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }

  .a1 {
    height: 100%;
    position: relative;
    border-start-start-radius: 20px;
    border-end-start-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .a2 {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .a3 {
    padding: 16px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-start-end-radius: 20px;
    border-end-end-radius: 20px;
  }
</style>