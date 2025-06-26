<script lang="ts">

</script>

<template>
  <div class="content-container">
    <div class="content-header">
      <div>
        <label class="content-title">Hotel Atlantico Star</label>
      </div>
      <div>
        <label class="content-subtitle">Copacabana</label>
      </div>
    </div>

    <div class="row text-purple q-gutter-md amenities-container" style="font-size: 2em">
      <div class="icon-wrapper">
        <q-icon name="style" />
      </div>  
            <div class="icon-wrapper">
        <q-icon name="style" />
      </div>  
            <div class="icon-wrapper">
        <q-icon name="style" />
      </div>  
    
      <div class="icon-wrapper">
        <q-icon name="style" />
      </div>  
    </div>

    <div class="content-footer">
      <div>
        <q-icon name="style" class="icon"/> <label class="refundable-room-title">Reembolsavel</label>
      </div>
      <div>
        <q-icon name="today" class="icon"/> <label class="has-breakfast-title">Café da manha</label>
      </div>
    </div>

  </div>


</template>

<style lang="scss" scoped>
  .content-container {
      padding: 10px;
      margin-left: 5px;
  }

  .content-header {
    margin-bottom: 120px;
    margin-top: 20px;
  }

  .content-footer {
    margin-bottom: 20px;
  }

  .content-title {
    font-size: $font-size-title;
    color: $info-600;
  }

  .content-subtitle {
    font-size: $font-size-base;
    color: $info-200;
  }

  .refundable-room-title {
    font-size: $font-size-base;
    color: $success-100;
  }

  .has-breakfast-title {
    font-size: $font-size-base;
    color: $success-100;
  }

  .amenities-container {
    margin-bottom: 10px;
  }

  .icon {
    color: $success-100;
  }

  .amenities-icon {
    color: $info-100;
  }

  .icon-wrapper {
    background-color: $info-100; /* azul, você pode trocar por uma cor do seu tema */
    border-radius: 50%; /* deixa o div circular */
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $info-600;
  }
</style>