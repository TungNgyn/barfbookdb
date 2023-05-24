<template>
  <div class="content">
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
            <dog-table table-header-color="green" v-if="table == 'dog'" ></dog-table>
            <ingredient-table table-header-color="green"  v-if="table == 'ingredient'"></ingredient-table>
            <pet-table table-header-color="green" v-if="table == 'pet'" ></pet-table>
            <profile-table table-header-color="green"  v-if="table == 'profile'"></profile-table>
            <profile-liked-recipe-table table-header-color="green" v-if="table == 'profile_liked_recipe'" ></profile-liked-recipe-table>
            <recipe-table table-header-color="green"  v-if="table == 'recipe'"></recipe-table>
            <recipe-comment-table table-header-color="green" v-if="table == 'recipe_comment'" ></recipe-comment-table>
            <recipe-ingredient-table table-header-color="green"  v-if="table == 'recipe_ingredient'"></recipe-ingredient-table>
            <schedule-table table-header-color="green"  v-if="table == 'schedule'"></schedule-table>

      </div>

  </template>
  
  <script>
  import { supabase } from '../components/Supabase';

  import { DogTable } from "@/components";
  import { IngredientTable } from "@/components";
  import { PetTable } from "@/components";
  import { ProfileTable } from "@/components";
  import { ProfileLikedRecipeTable } from "@/components";
  import { RecipeTable } from "@/components";
  import { RecipeCommentTable } from "@/components";
  import { RecipeIngredientTable } from "@/components";
  import { ScheduleTable } from "@/components";
  
  export default {    
    components: {      
      DogTable,
      IngredientTable,
      PetTable,
      ProfileTable,
      ProfileLikedRecipeTable,
      RecipeTable,
      RecipeCommentTable,
      RecipeIngredientTable,
      ScheduleTable
    },
    data() {
      return {
        user: null,
        dog: null,
        table: "dog",
      };
    },
    async created() {
        const { data: { user }, error } = await supabase.auth.getUser();  
         if (error) console.error(error);
        this.user = user;
    }
  }
  </script>
  