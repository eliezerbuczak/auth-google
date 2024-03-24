<template>
  <NuxtLoadingIndicator color="blue"/>
  <div>
    <input type="text" v-model="form.name" placeholder="Nome">
    <input type="text" v-model="form.email" placeholder="Email">
    <input type="password" v-model="form.password" placeholder="Senha">
    <button @click="register">Cadastrar</button>
  </div>
</template>
<script setup lang="ts">

const form = reactive({
  name: '',
  email: '',
  password: ''
})
const {$http} = useNuxtApp()

const register = async () => {
  try {
    const {data, pending, error} = await useAsyncData('', () => $http.user.register(form))
    alert(data)
  } catch (error) {
    alert('Erro ao cadastrar usuário!')
  }
}
</script>