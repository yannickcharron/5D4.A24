<template>
  <DefaultLayout>
    <div class="container">
      <h1>Planètes</h1>
      <h4 v-for="planet of planets" :key="planet.name">{{ planet.name }}</h4>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { PlanetRepository } from '@renderer/repositories/PlanetRepository'
import { Planet } from '@renderer/models/Planet'

const planetRepository = new PlanetRepository()
const planets = ref<Planet[]>()

onMounted(async () => {
  //TODO: Retrouver les planètes
  planets.value = await planetRepository.retrieveAll()
  console.log(planets)
})
</script>

<style scoped>
h1 {
  font-size: 72pt;
  font-family: 'Comic Sans MS';
}
</style>
