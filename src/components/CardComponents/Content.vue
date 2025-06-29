<script setup lang="ts">
  const props = defineProps<{ data: any }>();
  const refundableText = props.data.hasRefundableRoom ? 'Reembolsável' : 'Não Reembolsável';
  const breakFastText = props.data.hasBreakFast? 'Café da manhã' : 'Sem Café da manhã';
  const refundableTextColor = props.data.hasRefundableRoom ? 'text-green' : 'text-red';
  const breakfastTextColor = props.data.hasBreakFast ? 'text-green' : 'text-red';

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
    <div class="title">
      <div class="content-title">{{ data.name }}</div>
      <div class="content-subtitle">{{ data.district }}</div>
    </div>

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
        <q-icon name="attach_money" :class="refundableTextColor" />
        <span :class="refundableTextColor">{{ refundableText }}</span>
      </div>
      <div class="benefit">
        <q-icon name="restaurant" :class="breakfastTextColor" />
        <span :class="breakfastTextColor">{{ breakFastText }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .content-title {
    font-size: $font-size-title;
    font-weight: 500;
    color: $info-600;
  }

  .content-subtitle {
    font-size: $font-size-base;
    color: $info-300;
  }
  .title {
    position: relative;
    bottom: 15px;
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
    position: relative;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
    top: 10px;
    margin-top: 5px;
  }

  .benefit {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
  }
</style>