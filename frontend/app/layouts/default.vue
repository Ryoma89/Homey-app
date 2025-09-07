<template>
  <div class="h-screen">
    <nav class="p-4 text-white bg-gray-800">
      <div class="container flex items-center justify-between mx-auto">
        <div>
          <NuxtLink to="/" class="text-xl font-bold">Home</NuxtLink>
        </div>
        <div class="flex items-center">
          <NuxtLink to="/auth/login" class="mr-4">Login</NuxtLink>
          <NuxtLink to="/auth/register" class="mr-4">Register</NuxtLink>
          <NuxtLink to="/dashboard" class="mr-4">Dashboard</NuxtLink>
          <span>welcome, Harish Kumark</span>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>
