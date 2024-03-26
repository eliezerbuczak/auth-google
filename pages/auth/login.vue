<template>
  <NuxtLoadingIndicator color="blue"/>
  <div class="flex w-full h-screen justify-center items-center">
    <div class="flex flex-col space-y-4 ">
      <input class="border rounded p-2" type="text" v-model="form.email" placeholder="Email">
      <input class="border rounded p-2" type="password" v-model="form.password" placeholder="Senha">
      <button @click="login" class="p-2 bg-blue-700 text-white rounded">Login</button>
      <GoogleSignInButton
          @success="handleLoginSuccess"
          @error="handleLoginError"
      ></GoogleSignInButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";

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

const handleLoginSuccess = (response: CredentialResponse) => {
  console.log("Access Token", response);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};


</script>