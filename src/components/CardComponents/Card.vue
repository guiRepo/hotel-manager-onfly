<script lang="ts">

</script>

<template>
  <q-card class="my-card" flat bordered>
    <q-card-section>
      <div class="text-h6 q-mb-xs">Our Changing Planet</div>
      <div class="row no-wrap items-center">
        <q-rating size="18px" v-model="stars" :max="5" color="primary" />
        <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
      </div>
    </q-card-section>

    <img src="https://cdn.quasar.dev/img/mountains.jpg">
  </q-card>
</template>

<style lang="scss" scoped>
  .my-card {
    width: 100%;
    max-width: 300px;
  }
</style>