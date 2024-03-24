<template>
  <NuxtLoadingIndicator color="blue"/>
  <div>
    <input type="text" v-model="form.email" placeholder="Email">
    <input type="password" v-model="form.password" placeholder="Senha">
    <button @click="login">Login</button>
  </div>
</template>
<script setup lang="ts">

const form = reactive({
  email: 'tst3@g.com',
  password: 'tst3'
})
const {$http} = useNuxtApp()

const login = async () => {
  try {
    const {data, pending, error} = await useAsyncData('', () => $http.user.login(form))
    console.log(data)
    useProfileStore().token = data.value.access_token
    navigateTo('/')

  } catch (error) {
    alert('Erro ao logar usuário!')
  }
}
</script>