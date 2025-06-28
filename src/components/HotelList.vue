<script setup lang="ts">
  import axios from 'axios';
  import { ref, onMounted } from 'vue'
  import Card from './CardComponents/Card.vue'
  import Content from './CardComponents/Content.vue'
  import Pricing from './CardComponents/Pricing.vue'

  const selectedSort = ref('price')
  const sortOptions = [
    { label: 'Preço', value: 'price' },
    { label: 'Avaliação', value: 'rating' },
    { label: 'Nome', value: 'name' }
  ]

  const searchQuery = ref('')

  const hotels = ref<any[]>([])
  onMounted(async () => {
    try {
      const response = await axios.get<Hotel[]>('http://localhost:3000/hotels')
      hotels.value = response.data
    } catch (err) {
      console.error('Erro ao buscar hotéis:', err)
    }
  })
</script>

<template>  
  <div class="hotel-page-wrapper">
    <div class="filter-bar row justify-center q-gutter-sm">
      <q-select
        v-model="selectedSort"
        :options="sortOptions"
        label="Ordenar por"
        dense
        outlined
        class="sort-select"
        emit-value
        map-options
      />
      <q-input
        v-model="searchQuery"
        dense
        outlined
        placeholder="Nome do Hotel"
        class="search-input"
        debounce="300"
        clearable
      >
        <template #append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="hotel-list-container">

      <div v-for="hotel in hotels" :key="hotel.id" class="list-cell row no-wrap">
        <div class="a1 col-3">
          <Card :data="hotel" />
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
.hotel-page-wrapper {
  padding: 20px 30px;
  border-start-start-radius: 60px;
  border-start-end-radius: 60px;
  min-height: 100vh;
}

.top-search-bar {
  background: white;
  padding: 16px;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.destination-input {
  flex: 1;
  min-width: 250px;
}

.search-button {
  height: 40px;
}

.filter-bar {
  background: white;
  padding: 12px;
  border-radius: 16px;
  max-width: 600px;
  margin: 0 auto 0px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 5;
}

.sort-select {
  min-width: 180px;
}

.search-input {
  flex: 1;
  max-width: 300px;
}

.hotel-list-container {
  background-color: $info-200;
  padding: 30px;
  border-radius: 20px;
}

.list-cell {
  background-color: #fff;
  border-radius: 20px;
  height: 230px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
}

.a1 {
  height: 100%;
  position: relative;
  border-start-start-radius: 20px;
  border-end-start-radius: 20px;
  overflow: hidden;
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