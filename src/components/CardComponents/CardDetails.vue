<script setup lang="ts">
  import { ref } from 'vue'
  import axios from 'axios';

  const props = defineProps<{
    modelValue: boolean
    hotel: any
    hotelName: string
    data: any
  }>()

  const emit = defineEmits(['update:modelValue'])
  const isDialogOpen = defineModel<boolean>()
  const currentImage = ref(0)

  function next() {
    if (!props.hotel?.images) return
    currentImage.value = (currentImage.value + 1) % props.hotel.images.length
  }

  function prev() {
    if (!props.hotel?.images) return
    currentImage.value = (currentImage.value - 1 + props.hotel.images.length) % props.hotel.images.length
  }

  function close() {
    emit('update:modelValue', false)
  }

  const amenityIcons: Record<string, string> = {
    'Piscina': 'pool',
    'Restaurante': 'restaurant',
    'Estacionamento': 'local_parking',
    'Wi-fi grátis': 'wifi',
    'Acessibilidade': 'accessible',
    'Ar-condicionado': 'ac_unit'
  }
</script>

<template>
  <q-dialog v-model="isDialogOpen" persistent>
    <q-card class="dialog-card">
      <q-card-section class="row items-center justify-between q-pa-sm q-px-md">
        <div class="text-h6 text-weight-medium text-black">{{ props.hotelName }}</div>
        <q-btn flat icon="close" @click="close" dense color="black" />
      </q-card-section>

      <div class="relative-position image-container">
        <q-img
          :src="props.hotel?.images?.[currentImage] || props.hotel?.thumb"
          ratio="16/9"
          class="rounded-borders"
          style="min-height: 220px"
        >
          <template #default>
            <div class="rating-overlay">
              <q-rating v-model="data.stars" :max="5" size="15px" color="primary" />
            </div>
          </template>
        </q-img>

        <q-btn
          flat dense round icon="chevron_left"
          class="nav-btn left"
          @click="prev"
        />
        <q-btn
          flat dense round icon="chevron_right"
          class="nav-btn right"
          @click="next"
        />
      </div>

      <q-card-section class="q-px-md q-pt-md q-pb-sm">
        <div class="section-title">Comodidades</div>
        <div class="row q-gutter-sm q-mt-xs">
          <q-chip
            v-for="(amenity, index) in props.hotel?.amenities"
            :key="index"
            outline
            color="primary"
            text-color="primary"
            :icon="amenityIcons[amenity] || 'check'"
          >
            {{ amenity }}
          </q-chip>
        </div>
      </q-card-section>

      <q-card-section class="q-px-md q-pt-md q-pb-sm">
        <div class="section-title">Localização</div>
        <div class="text-body2 text-grey-8 q-mt-xs">
          {{ props.hotel?.fullAddress }}
        </div>
      </q-card-section>

      <q-card-section class="q-px-md q-pt-md q-pb-md">
        <div class="section-title">Sobre o {{ props.hotelName }}</div>
        <div class="text-body2 text-grey-8 q-mt-xs">
          {{ props.hotel?.description }}
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
  .dialog-card {
    max-width: 600px;
    width: 95vw;
    border-radius: 16px;
    font-family: 'Roboto', sans-serif;
  }

  .section-title {
    font-size: 16px;
    font-weight: 500;
    color: #1976D2; /* azul primário */
  }

  .image-container {
    position: relative;
  }

  .nav-btn {
    position: absolute;
    bottom: 0%;
    margin-inline: 10px;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.85);
    color: #333;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }

  .nav-btn.left {
    left: 8px;
  }

  .nav-btn.right {
    right: 8px;
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

</style>
