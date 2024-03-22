<template>
  <NuxtLoadingIndicator color="blue"/>
  <div>

    <div v-if="pending">Carregando...</div>
    <div v-else-if="error">Erro: {{ error.message }}</div>
    <pre v-else>{{ users }}</pre>
  </div>

  <button @click="fetchGetUsers">Buscar Users</button>

</template>
<script setup lang="ts">

const {$http} = useNuxtApp()

const {data: users, pending, error} = await useAsyncData('', () => $http.user.getUsers())

</script>