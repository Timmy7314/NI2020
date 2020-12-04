<template>
  <div class="grid min-h-screen place-items-center">
    <div class="w-11/12 p-12 bg-blue-500 sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 class="text-xl font-semibold">
        Hello there 👋, <span class="font-normal">please fill in your information to continue</span>
      </h1>
      <form class="mt-6" v-on:submit.prevent="getFormValues()">
        <label for="username" class="block text-xs font-semibold text-gray-600 uppercase"
          >Username</label
        >
        <input
          id="username"
          v-model="username"
          type="text"
          name="username"
          placeholder="John714"
          autocomplete="given-name"
          class="block w-full p-3 mt-2 text-black bg-white appearance-none focus:outline-none focus:shadow-inner"
          required
        />
        <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >E-mail</label
        >
        <input
          id="email"
          type="email"
          name="email"
          placeholder="john.doe@company.com"
          autocomplete="email"
          class="block w-full p-3 mt-2 text-black bg-white appearance-none focus:outline-none focus:shadow-inner"
          required
        />
        <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >Password</label
        >
        <input
          id="password"
          type="password"
          name="password"
          placeholder="********"
          autocomplete="new-password"
          class="block w-full p-3 mt-2 text-black bg-white appearance-none focus:outline-none focus:shadow-inner"
          required
        />
        <label
          for="password-confirm"
          class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >Confirm password</label
        >
        <input
          id="password-confirm"
          type="password"
          name="password-confirm"
          placeholder="********"
          autocomplete="new-password"
          class="block w-full p-3 mt-2 text-black bg-white appearance-none focus:outline-none focus:shadow-inner"
          required
        />
        <button
          type="submit"
          class="w-full py-3 mt-6 font-medium tracking-widest text-black uppercase bg-white shadow-lg focus:outline-none hover:bg-blue-300 hover:shadow-none"
        >
          Sign up
        </button>
        <p
          class="flex justify-between inline-block mt-4 text-xs text-gray-600 cursor-pointer hover:text-black"
        >
          Already registered?
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  data: function() {
    return {
      username: "",
    }
  },
  methods: {
    getFormValues(){
      console.log(this.username)
    }
  }
}
</script>
