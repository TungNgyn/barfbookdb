<template>
    <div class="content">
        <div class="md-layout-item md-size-30">
          <md-field>
            <md-select v-model="table" name="table" id="table">
              <md-option value="profile">profile</md-option>
              <md-option value="dog">dog</md-option>
              <md-option value="pet">pet</md-option>
              <md-option value="recipe">recipe</md-option>
              <md-option value="ingredient">ingredient</md-option>
              <md-option value="barfbook">barfbook</md-option>
            </md-select>
          </md-field>
        </div>
        <div class=" wrapper">
              <profile-storage table-header-color="green"  v-if="table == 'profile'"></profile-storage>
              <!-- <dog-storage table-header-color="green" v-if="table == 'dog'" ></dog-storage>
              <pet-storage table-header-color="green" v-if="table == 'pet'" ></pet-storage>
              <recipe-storage table-header-color="green"  v-if="table == 'recipe'"></recipe-storage>
              <ingredient-storage table-header-color="green"  v-if="table == 'ingredient'"></ingredient-storage>
              <barfbook-storage table-header-color="green" v-if="table == 'barfbook'" ></barfbook-storage> -->
        </div>
    </div>
</template>
    
<script>
    import { supabase } from '../components/Supabase';
  
    import { ProfileStorage } from "@/components";
    
    export default {    
      components: {      
        ProfileStorage,
      },
      data() {
        return {
          user: null,
          table: "profile",
        };
      },
      async created() {
          const { data: { user }, error } = await supabase.auth.getUser();  
           if (error) console.error(error);
          this.user = user;
      }
    }
</script>