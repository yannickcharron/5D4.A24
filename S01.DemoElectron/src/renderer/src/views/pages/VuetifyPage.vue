<template>
  <DefaultLayout>
    <main class="flex-shrink-0">
      <div class="container">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props"> Activator slot </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn color="primary">
          Parent activator

          <v-menu activator="parent">
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>

        <v-btn id="menu-activator" color="primary"> Sibling activator </v-btn>

        <v-menu activator="#menu-activator">
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </main>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'
const items = [{ title: 'Yannick' }, { title: 'Joël' }, { title: 'Karine' }, { title: 'Houssem' }]
</script>

<style scoped></style>
