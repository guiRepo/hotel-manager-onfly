<script setup lang="ts">
  import { onMounted }       from 'vue'
  import { storeToRefs }     from 'pinia'
  import { useHotelStore }   from './../stores/hotelStore.ts'
  import Card     from './CardComponents/Card.vue'
  import Content  from './CardComponents/Content.vue'
  import Pricing  from './CardComponents/Pricing.vue'

  const hotelStore = useHotelStore()

  const {
    paginatedHotels, totalPages, currentPage,
    selectedSort,   searchQuery,  loading, error
  } = storeToRefs(hotelStore)


  onMounted(() => hotelStore.fetchHotels()) 


  function onSortChange(val: string)  { hotelStore.setSort(val) }
  function onSearch(val: string)      { hotelStore.setSearch(val) }
  function onPageChange(page: number) { hotelStore.setPage(page) }
</script>

<template>
  <div class="hotel-page-wrapper">
    <div class="filter-bar row justify-center q-gutter-sm">
      <q-select
        v-model="selectedSort"
        :options="[
          { label: 'Preço',     value: 'price'  },
          { label: 'Avaliação', value: 'rating' },
          { label: 'Nome',      value: 'name'   }
        ]"
        label="Ordenar por"
        dense outlined emit-value map-options
        @update:model-value="onSortChange"
      />

      <q-input
        v-model="searchQuery"
        dense outlined clearable debounce="300"
        placeholder="Nome do Hotel"
        @update:model-value="onSearch"
      >
        <template #append><q-icon name="search" /></template>
      </q-input>
    </div>

    <div v-if="loading" class="text-center q-my-lg">Carregando…</div>
    <div v-else-if="error"  class="text-negative q-my-lg">{{ error }}</div>

    <div v-else class="hotel-list-container">
      <div
        v-for="hotel in paginatedHotels"
        :key="hotel.id"
        class="list-cell row no-wrap"
      >
        <div class="a1 col-3"><Card    :data="hotel" /></div>
        <div class="a2 col-7"><Content :data="hotel" /></div>
        <div class="a3 col-2"><Pricing :data="hotel" /></div>
      </div>
    </div>

    <q-pagination
      v-model="currentPage"
      :max="totalPages"
      max-pages="7"
      color="primary"
      unelevated
      @update:model-value="onPageChange"
      class="q-mt-md"
    />
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