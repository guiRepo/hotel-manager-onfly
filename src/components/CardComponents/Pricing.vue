<script setup lang="ts">
// Nada necessário por enquanto
</script>

<template>
  <div class="pricing-container">
    <div class="text-caption text-grey">Por dia</div>
    <div class="text-h6 text-primary">R$ 100</div>
    <div class="text-caption text-grey">No booking R$ 115</div>

    <div class="details q-mt-sm">
      <div class="row-text">Diarias <span class="q-ml-sm">2x R$ 100,00</span></div>
      <div class="row-text">Taxas <span class="q-ml-sm">2x R$ 80,00</span></div>
      <div class="row-text">Total <span class="q-ml-sm">R$ 360</span></div>
    </div>

    <q-btn label="Ver detalhes" color="primary" class="q-mt-sm full-width" rounded />
  </div>
</template>

<style scoped lang="scss">
  .pricing-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    width: 100%;
    padding: 10px;
  }

  .details {
    margin-top: 10px;
    color: #777;
    font-size: 13px;
  }

  .row-text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
  }
</style>