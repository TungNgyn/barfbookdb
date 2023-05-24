<template>
    <div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card">
          <md-card-header data-background-color="green">
                <h4 class="title">recipe_ingredient</h4>
                <p class="category">Diese Tabelle zeigt an, welche Rezepte welche Zutaten haben.</p>
            </md-card-header>
            <md-card-content>
                <md-table v-model="recipe_ingredient" :table-header-color="tableHeaderColor" md-fixed-header @md-selected="onSelect">
                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                    <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                        <md-table-cell md-label="Rezept ID">{{ item.recipe }}</md-table-cell>
                        <md-table-cell md-label="Zutat ID">{{ item.ingredient }}</md-table-cell>
                        <md-table-cell md-label="Gramm">{{ item.grams }}</md-table-cell>
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
    name: "recipe-ingredient-table",
    props: {
        tableHeaderColor: {
        type: String,
        default: "",
        },
    },
    data() {
        return {
        selected: [],
        recipe_ingredient: []
        };
    },
    async created() {        
        const { data: recipe_ingredient, error: error } = await supabase.from('recipe_ingredient').select();
         if (error) console.error(error);
         this.recipe_ingredient = recipe_ingredient;
    },
    methods: {
      onSelect (item) {
        this.selected = item
      }
    }
};
</script>
