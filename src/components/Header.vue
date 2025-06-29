<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useHotelStore } from './../stores/hotelStore.ts';
  
  const hotelStore = useHotelStore();
  const { searchDistrict } = storeToRefs(hotelStore);

  function onSearchByDistrict(district: string): void {
    hotelStore.searchCities(district);
  }
</script>

<template>
  <section class="filter-container">
    <q-tabs
      inline-label
      switch-indicator
      indicator-color="primary"
      class="nav-tab" 
      align="left"
    >
      <q-tab name="Aéreo" icon="flight" label="Aéreo" />
      <q-tab name="Hotel" icon="local_hotel" label="Hotel" />
      <q-tab name="Carro" icon="directions_car" label="Carro" />
      <q-tab name="Ônibus" icon="directions_bus" label="Ônibus" />
    </q-tabs>
    <div class="form-container">
      <q-form class="row justify-between items-center">
        <q-input
          class="search-destiny-input"
          v-model="searchDistrict"
          label="Destino"
          hide-bottom-space
          :dense="true"
          borderless
          @update:model-value="onSearchByDistrict"
          >
        </q-input>
        <q-btn
          class="search-button"
          icon="search"
          label="Buscar Hotel"
          dense
          unelevated
          />
      </q-form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .filter-container {
    margin: 30px;
    padding-block: 5px;
    margin-inline: 45px;
    color: black;
    background-color: #fff;
    border-radius: $border-radius-unit;
  }

  .form-container {
    background-color: $info-100;
    margin: 20px;
    padding: 10px;
    border-radius: $border-radius-unit;
    top: 10px;
  }

  .nav-tab {
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: $border-radius-unit;
    color: $info-600;
  }

  .search-destiny-input {
    background-color: $info-100;
    width: 500px;
    border-radius: $border-radius-unit;
    border: 1px solid $info-300;
    text-decoration: none;
    padding-left: 10px;

  }

  .search-button {
    background-color: $primary-100;
    color: #fff;
    font-size: $font-size-base;
    border-radius: $border-radius-unit;
    margin: $spacing-unit;
    padding: 10px;
  }
</style>