<template>
    <div>
      <div>Hallo {{ user?.user_metadata["name"] }}</div>
      <div>{{ user?.email }}</div>
      <button id="sign_out" class="mt-4 btn btn-danger" @click="signOut">
        Ausloggen
      </button>
      <button @click="test">TEST</button>
    </div>
  </template>
  
  <script>
  import { supabase } from '../components/Supabase';
  
  export default {
    data() {
      return {
        user: null
      };
    },
    async created() {
        const { data: { user }, error } = await supabase.auth.getUser();
  
        if (error) {
        console.error(error);
      } else {
        this.user = user;
      }
    },
    methods: {
      async signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) {
          console.error(error); // Or you can show an error message on the page
        }
      },
      async test() {
        this.$router.push("/test");
      }
    },
    mounted() {
      supabase.auth.onAuthStateChange((event, session) => {
        if (event == "SIGNED_OUT") {
        //   this.$router.push("/");
            localStorage.setItem('session', undefined);
            location.reload();
        }
      })
    }
  }
  </script>
  
  <style scoped>
  #content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid lightgray;
      padding: 3rem 3rem;
      border-radius: 5px;
      background: #fefefe;
  }
  </style>