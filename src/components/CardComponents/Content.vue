<script setup lang="ts">
</script>

<template>
  <div class="content-container">
    <div class="content-title">Hotel Atlantico Star</div>
    <div class="content-subtitle">Copacabana</div>

    <div class="amenities ">
      <q-icon name="wb_sunny" class="amenity-icon" />
      <q-icon name="wifi" class="amenity-icon" />
      <q-icon name="tv" class="amenity-icon" />
      <q-icon name="smoke_free" class="amenity-icon" />
      <q-icon name="accessible" class="amenity-icon" />
    </div>

    <div class="benefits ">
      <div class="benefit">
        <q-icon name="attach_money" class="text-green" />
        <span class="text-green">Reembolsável</span>
      </div>
      <div class="benefit">
        <q-icon name="restaurant" class="text-green" />
        <span class="text-green">Café da manhã</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content-title {
    font-size: $font-size-title;
    color: $info-600;
  }

  .content-subtitle {
    font-size: $font-size-base;
    color: $info-300;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .amenities {
    display: flex;
    gap: 6px;
    margin-top: 40px;
  }

  .amenity-icon {
    background-color: #f0f0f0;
    padding: 6px;
    border-radius: 50%;
    font-size: 18px;
    color: #555;
  }

  .benefits {
    display: flex;
    gap: 20px;
    margin-top: 8px;
    font-size: 14px;
  }

  .benefit {
    display: flex;
    align-items: center;
    gap: 4px;
  }
</style>