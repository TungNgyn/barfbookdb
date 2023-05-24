<template>
    <div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card">
          <md-card-header data-background-color="green">
                <h4 class="title">profile_liked_recipe</h4>
                <p class="category">Diese Tabelle zeigt an, welche Profile welche Rezepte favorisiert haben.</p>
            </md-card-header>
            <md-card-content>
                <md-table v-model="profile_liked_recipe" :table-header-color="tableHeaderColor" md-fixed-header @md-selected="onSelect">
                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                    <md-table-cell md-label="Profile ID">{{ item.profile }}</md-table-cell>
            <md-table-cell md-label="Rezept ID">{{ item.recipe }}</md-table-cell>
                </md-table-row>
            </md-table>
        </md-card-content>
    </md-card>
    </div>
    </div>
</template>

<script>
import { supabase } from '@/components/Supabase';

export default {
    name: "profile-liked-recipe-table",
    props: {
        tableHeaderColor: {
        type: String,
        default: "",
        },
    },
    data() {
        return {
        selected: [],
        profile_liked_recipe: []
        };
    },
    async created() {        
        const { data: profile_liked_recipe, error: error } = await supabase.from('profile_liked_recipe').select();
         if (error) console.error(error);
         this.profile_liked_recipe = profile_liked_recipe;
    },
    methods: {
      onSelect (item) {
        this.selected = item
      }
    }
};
</script>
