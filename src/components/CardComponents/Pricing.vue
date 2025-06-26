<script lang="ts">

</script>

<template>
  <div class="content-container">
    <div class="content-header">
      <p class="content-title">Hotel Atlantico Star</p>
      <p class="content-subtitle">Copacabana</p>
    </div>

    <div class="text-purple q-gutter-md" style="font-size: 2em">
      <q-icon name="font_download" />
      <q-icon name="warning" />
      <q-icon name="format_size" />
      <q-icon name="print" />
      <q-icon name="today" />
      <q-icon name="style" />
    </div>

    <div>
      <q-icon name="style" /> <p>Reembolsavel</p>
      <q-icon name="today" /> <p>Café da manha</p>
    </div>

  </div>


</template>

<style lang="scss" scoped>
.content-container {
    padding: 10px;
}

.content-header {
  margin-bottom: 30px;
}

.content-title {
  font-size: $font-size-title;
  color: $info-600;
}

.content-subtitle {
  font-size: $font-size-base;
  color: $info-200;
}

</style>