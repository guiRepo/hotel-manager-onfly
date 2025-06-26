<script lang="ts">
import { ref } from 'vue'
import Card from './CardComponents/Card.vue' // caminho relativo
import Content from './CardComponents/Content.vue' // caminho relativo
import Pricing from './CardComponents/Pricing.vue' // caminho relativo

export default {
  components: {
    Card,
    Content,
    Pricing
  },
  setup () {
    return {
      stars: ref(4)
    }
  }
}
</script>

<template>
<div class="hotel-list-container">
  <div class="list-cell">
    <div class="row">
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
</div>
</template>

<style lang="scss" scoped>
.hotel-list-container {
  height: 100vh;
  background-color: $info-100;
  border-top-left-radius: $border-radius-unit;
  border-top-right-radius: $border-radius-unit;
  padding: 30px;
}

.list-cell {
  background-color: #fff;
  height: 200px;
}

.a1 {
background-color: green;
}

.a2 {
  background-color: red;
}

.a3 {
  background-color: aquamarine;
}
</style>

