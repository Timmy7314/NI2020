<template>
  <div class="grid min-h-screen place-items-center">
    <div class="w-11/12 p-12 bg-blue-500 sm:w-8/12 md:w-1/2 lg:w-5/12">
      <h1 class="text-xl font-semibold">
        Hello there 👋, <span class="font-normal">please fill in your information to continue</span>
      </h1>
      <form class="mt-6" @submit="formValidation">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error, index) in errors" v-bind:key="index">{{ error }}</li>
          </ul>
      </p>
        <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >E-mail</label
        >
        <input
          id="email"
          v-model="email"
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
          v-model="password"
          type="password"
          name="password"
          placeholder="********"
          autocomplete="new-password"
          class="block w-full p-3 mt-2 text-black bg-white appearance-none focus:outline-none focus:shadow-inner"
          required
        />
        <button
          type="submit"
          class="w-full py-3 mt-6 font-medium tracking-widest text-black uppercase bg-white shadow-lg focus:outline-none hover:bg-blue-300 hover:shadow-none"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
export default {
  data: function() {
    return {
      errors: [],
      email: null,
      password: null,
    }
  },
  methods: {
    formValidation(e){
      this.errors = [];
      e.preventDefault();

      if(!this.email) {
        this.errors.push('Email is required');
      }

      if(!this.password) {
        this.errors.push('Password is required');
      }

      if (!this.errors.length) {
        const data = { email: this.email, pwd: this.password };
        axios
        .post('api/auth/login', data)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          if(err.response.data.keyPattern.pseudo) 
            this.errors.push("Username already taken");
          else if(err.response.data.keyPattern.email) 
            this.errors.push("Email already taken");
        });
      }
    }
  }
}
</script>
