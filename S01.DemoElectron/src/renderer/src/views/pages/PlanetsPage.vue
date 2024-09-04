<template>
  <DefaultLayout>
    <main>
      <div class="container">
        <h1>Planètes</h1>
        <div v-for="planet of planets" :key="planet.name" class="col-4">
          <h4>{{ planet.name }}</h4>
          <img class="planet" :src="planet.icon" :alt="planet.name" />
        </div>
      </div>
    </main>
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
  font-size: 64pt;
  font-family: 'Comic Sans MS';
}

.planet {
  width: 200px;
}
</style>
