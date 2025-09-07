<script setup lang="ts">
interface User {
  name: string;
  email: string;
}

const { isLoggedIn, user, logout } = useSanctum<User>()

function logoutUser() {
  logout()
}
</script>
<template>
  <div class="h-screen">
    <nav class="p-4 text-white bg-gray-800">
      <div class="container flex items-center justify-between mx-auto">
        <div>
          <NuxtLink to="/" class="text-xl font-bold">Home</NuxtLink>
        </div>
        <div class="flex items-center">
          <template v-if="!isLoggedIn">
            <NuxtLink to="/auth/login" class="mr-4">Login</NuxtLink>
            <NuxtLink to="/auth/register" class="mr-4">Register</NuxtLink>
          </template>
          <template v-if="isLoggedIn">
            <NuxtLink to="/dashboard" class="mr-4">Dashboard</NuxtLink>
            <button @click.prevent="logoutUser" class="mr-4">Logout</button>
            <span v-if="user">welcome, {{ user.name }}</span>
          </template>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>
