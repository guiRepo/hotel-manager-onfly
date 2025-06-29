<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useHotelStore } from './../stores/hotelStore.ts';
  import Thumb from './CardComponents/Thumb.vue';
  import Content from './CardComponents/Content.vue';
  import Pricing from './CardComponents/Pricing.vue';

  const hotelStore = useHotelStore();
  const {
    paginatedHotels, totalPages, currentPage,
    selectedSort,   searchQuery,  loading, error
  } = storeToRefs(hotelStore);
  type SortOption = {
    label: string;
    value: string;
  };

  const sortOptions: SortOption[] = [
    { label: 'Preço', value: 'price' },
    { label: 'Avaliação', value: 'rating' },
    { label: 'Nome', value: 'name' }
  ];

  onMounted(() => hotelStore.fetchHotels()) 

  function onSortChange(val: string): void { 
    hotelStore.setSort(val);
  }

  function onSearch(val: string): void { 
    hotelStore.setSearch(val);
  }
  
  function onPageChange(page: number): void { 
    hotelStore.setPage(page);
  }
</script>

<template>
  <div class="hotel-page-wrapper">
    <div class="filter-bar row">
    <q-select
      v-model="selectedSort"
      :options="sortOptions"
      label="Ordenar por"
      hide-bottom-space
      :dense="true"
      borderless
      class="sortby-select"
      options-selected-class="text-blue"
      @update:model-value="onSortChange"
      >
      <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section>
              <q-item-label class="custom-option">{{ scope.opt.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>

    </q-select>
      <q-input
        v-model="searchQuery"
        placeholder="Nome do Hotel"
        hide-bottom-space
        :dense="true"
        borderless
        class="search-hotel-input"
        @update:model-value="onSearch"
      >
        <template #append><q-icon name="search" /></template>
      </q-input>
    </div>
    <div v-if="loading" class="text-center q-my-lg">Carregando…</div>
    <div v-else-if="error"  class="text-negative q-my-lg">{{ error }}</div>

    <div v-else class="hotel-list-container">
      <div v-for="hotel in paginatedHotels" :key="hotel.id" class="card-container row no-wrap">
        <div class="thumb-container col-3"><Thumb :data="hotel" /></div>
        <div class="content-container col-7"><Content :data="hotel" /></div>
        <div class="pricing-container col-2"><Pricing :data="hotel" /></div>
      </div>
    </div>

    <q-pagination
      v-model="currentPage"
      :max="totalPages"
      max-pages="7"
      unelevated
      rounded
      color="grey-1"
      text-color="blue"
      @update:model-value="onPageChange"
      class="pagination-icon"
    />
  </div>
</template>

<style lang="scss" scoped>
  .hotel-page-wrapper {
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
    position: relative;
    top: 30px;
    padding: 12px;
    border-radius: 16px;
    max-width: 600px;
    margin: 10px auto 0px;
    justify-content: center;
    align-items: center;
    z-index: 5;
    gap: 20px;
  }

  .hotel-list-container {
    background-color: $info-200;
    padding: 45px;
    border-radius: 70px;
  }

  .card-container {
    background-color: #fff;
    border-radius: 20px;
    height: 230px;
    overflow: hidden;
    display: flex;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    margin-bottom: 10px;
  }

  .thumb-container {
    height: 100%;
    position: relative;
    border-start-start-radius: 20px;
    border-end-start-radius: 20px;
    overflow: hidden;
  }

  .content-container {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pricing-container {
    padding: 16px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-start-end-radius: 20px;
    border-end-end-radius: 20px;
  }

  .pagination-icon {
    height: 50px;
    padding-bottom: 10px;
    margin-left: 45px;
  }

  .sortby-select, .search-hotel-input {
    background-color:$info-100;
    border-radius: $border-radius-unit;
    border: 1px solid $info-300;
    width: 200px;
    padding: 10px;
  }

  .custom-option {
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    color: $primary-100;

  &.option--selected {
    background-color: $primary-100;
    font-weight: bold;
  }
  }
</style>