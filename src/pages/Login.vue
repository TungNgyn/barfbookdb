<template>
  <div id="content">
    <form @submit.prevent="login">
      <h1>Login</h1>
      <md-field class="form-group md-primary">
        <label for="inputEmail">Email</label>
        <md-input type="email" name="email" class="form-control" id="inputEmail1" v-model="email" />
      </md-field>
  
      <md-field class="form-group">
        <label for="inputPassword">Passwort</label>
        <md-input type="password" name="password" class="form-control" id="inputPassword" v-model="password" />
      </md-field>
  
      <button type="submit" class="btn-login" :disabled="!formValid">Anmelden</button>
  
      <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="error">
        {{ error }}
      </div>
    </form>
  </div>
</template>
  
  <script>
  import { supabase } from "@/components/Supabase";
  
  
      
  export default {
    data() {
      return {
        email: "",
        password: "",
        error: null,
      };
    },
    computed: {
      formValid() {
        return this.email && this.password;
      },
    },
    methods: {
      async login() {
        try {
          const { error } = await supabase.auth.signInWithPassword({
            email: this.email,
            password: this.password,
          });
  
          if (error) {
            throw new Error(error.message);
          }
  
          this.error = null;
  
        } catch (e) {
          this.error = e.message;
          console.error(e);
        }
      },
    },
    mounted() {
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event == "SIGNED_IN") {
          // if (session.user.role === "admin") {
            localStorage.setItem('session', session);
            location.reload();
            // this.$router.push("/");
          // } else {
          //   await supabase.auth.signOut();
          //   this.error = "Permission denied"
          // }
        }
      })
    },
  };
  
  </script>
  
  <style scoped>
  #content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid lightgray;
      padding: 3rem 5rem;
      border-radius: 5px;
      background: #fefefe;
  }
  
  div.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  div.form-group > label {
    text-align: start;
  }
  
  div.form-group > input {
    margin-top: 6px;
    height: 38px !important;
  }
  div.form-group > input:focus {
    border-bottom-color: #198754;
    border-color: #198754;
    /* border-color: rgba(25, 135, 84, 0.4);
    box-shadow: 0 0 8px rgba(46, 229, 157, 0.4);
    outline: 0 none; */
  }
  
  button.btn-login {
    position: relative;
    left: 50%;
    padding: 1em 2.5em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    transform: translateX(-50%);
  }
  
  button.btn-login:hover {
    background-color: #198754;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translate(-50%, -5px);
  }
  
  button.btn-login:active {
    transform: translate(-50%, -1px);
  }
  .alert {
    margin-top: 2em;
  }
  </style>