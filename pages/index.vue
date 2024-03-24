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
const fetchGetUsers = async () => {
  try {
    const {data, pending, error} = await useAsyncData('', () => $http.user.getUser())
    console.log(data)
    console.log(error)
  } catch (error) {
    alert('Erro ao buscar usuários!')
  }
}

</script>