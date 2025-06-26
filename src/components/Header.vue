<script  lang="ts">
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      name,
      age,
      accept,

      onSubmit () {},
      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>

<template>
  <section class="filter-container">
    <div >
        <q-tabs
          v-model="tab"
          inline-label
          switch-indicator
          indicator-color="primary"
          class="custom-tab" 
          align="left"
        >
          <q-tab name="Aéreo" icon="flight" label="Aéreo" />
          <q-tab name="Hotel" icon="local_hotel" label="Hotel" />
          <q-tab name="Carro" icon="directions_car" label="Carro" />
          <q-tab name="Ônibus" icon="directions_bus" label="Ônibus" />
        </q-tabs>
    </div>
    <div class="form-container">
    <q-form @submit="onSubmit" class="row justify-between items-center">
      <q-input
        class="input-a"
        v-model="name"
        label="Destino"
        hide-bottom-space
        :dense="true"
        borderless
        >
      </q-input>
      <q-btn
        class="btn-search"
        icon="search"
        @click="onSubmit"
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
    margin: 20px;
    padding-block: 5px;
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

  .custom-tab {
    margin-bottom: 10px;
    background-color: #fff;
    border-radius: $border-radius-unit;
    color: $info-600;
  }

  .input-a {
    background-color: $info-100;
    width: 500px;
    border-radius: $border-radius-unit;
    border: 1px solid $info-200;
    text-decoration: none;
    padding-left: 10px;

  }

  .btn-search {
    background-color: $primary-100;
    color: #fff;
    font-size: $font-size-base;
    border-radius: $border-radius-unit;
    margin: $spacing-unit;
    padding: 10px;
  }
</style>