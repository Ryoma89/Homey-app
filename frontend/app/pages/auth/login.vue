<script setup lang="ts">
definePageMeta({
  middleware: ['$guest'],
});

const { login } = useSanctum()

const form = ref({
  email: '',
  password: '',
})

const submitForm = () => {
  login(form.value)
}
</script>

<template>
  <div
      class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div class="w-full max-w-md p-8 space-y-3 bg-white shadow-lg rounded-xl">
      <h1 class="text-2xl font-bold text-center">Login</h1>
      <form @submit.prevent="submitForm">
        <div class="flex flex-col space-y-1">
          <label for="email" class="text-sm font-medium">Email</label>
          <input
              id="email"
              type="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              v-model="form.email"
          />
        </div>

        <div class="flex flex-col mt-3 space-y-1">
          <label for="password" class="text-sm font-medium">Password</label>
          <input
              id="password"
              type="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              v-model="form.password"
          />
        </div>

        <button
            type="submit"
            class="w-full px-4 py-2 mt-3 text-sm font-medium text-white bg-blue-500 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
