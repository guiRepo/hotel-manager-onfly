<script setup lang="ts">
  import { computed } from 'vue'


  const props = defineProps<{
    data: any
  }>()

  const refundableTextClass = computed(() =>
    props.data.hasRefundableRoom ? 'text-green' : 'text-red'
  )

  const breakfastTextClass = computed(() =>
    props.data.hasBreakFast ? 'text-green' : 'text-red'
  )

  const amenityIconMap: Record<string, string> = {
    'Wi-Fi': 'wifi',
    'Piscina': 'pool',
    'Estacionamento': 'local_parking',
    'Spa': 'spa',
    'Academia': 'fitness_center',
    'Cozinha compartilhada': 'kitchen',
    'Restaurante': 'restaurant',
    'Trilhas': 'hiking'
  } 
</script>

<template>
  <div class="content-container">
    <div class="content-title">{{ data.name }}</div>
    <div class="content-subtitle">{{ data.district }}</div>

    <div class="amenities">
      <q-icon
        v-for="(amenity, index) in data.amenities"
        :key="index"
        :name="amenityIconMap[amenity] || 'help_outline'"
        class="amenity-icon"
        :title="amenity"
      />
    </div>

    <div class="benefits ">
      <div class="benefit">
        <q-icon name="attach_money" :class="refundableTextClass" />
        <span :class="refundableTextClass">Reembolsável</span>
      </div>
      <div class="benefit">
        <q-icon name="restaurant" :class="breakfastTextClass" />
        <span :class="breakfastTextClass">Café da manhã</span>
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