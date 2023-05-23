<template>
    <div>
      
      <div class="md-layout-item md-size-30">
        <md-field>
          <md-select v-model="table" name="table" id="table">
            <md-option value="dog">dog</md-option>
            <md-option value="ingredient">ingredient</md-option>
            <md-option value="pet">pet</md-option>
            <md-option value="profile">profile</md-option>
            <md-option value="profile_liked_recipe">profile_liked_recipe</md-option>
            <md-option value="recipe">recipe</md-option>
            <md-option value="recipe_comment">recipe_comment</md-option>
            <md-option value="recipe_ingredient">recipe_ingredient</md-option>
            <md-option value="schedule">schedule</md-option>
          </md-select>
        </md-field>
      </div>
      

      <div>Hallo {{ user?.user_metadata["name"] }}</div>
      <div>{{ user?.email }}</div>
      <button id="sign_out" class="mt-4 btn btn-danger" @click="signOut">
        Ausloggen
      </button>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">dog</h4>
            <p class="category">Diese Tabelle zeigt die gespeicherten Hunderassen an.</p>
          </md-card-header>
          <md-card-content>
            <dog-table table-header-color="green" v-if="table == 'dog'" ></dog-table>
            <profile-table table-header-color="green"  v-if="table == 'profile'"></profile-table>
          </md-card-content>
        </md-card>
      </div>

    </div>
  </template>
  
  <script>
  import { supabase } from '../components/Supabase';

  import { DogTable } from "@/components";
  import { ProfileTable } from "@/components";
  
  export default {    
    components: {      

      DogTable,
      ProfileTable,
    },
    data() {
      return {
        user: null,
        dog: null,
        table: null
      };
    },
    async created() {
        const { data: { user }, userError } = await supabase.auth.getUser();  
         if (userError) console.error(userError);
        this.user = user;
      
        
        const { data: dog, error: dogError } = await supabase.from('dog').select();
         if (dogError) console.error(dogError);
         this.dog = dog;
    },
    methods: {
      async signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) {
          console.error(error); // Or you can show an error message on the page
        }
      },
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
  