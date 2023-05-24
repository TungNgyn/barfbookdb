<template>
    <div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card">
          <md-card-header data-background-color="green">
                <h4 class="title">ingredient</h4>
                <p class="category">Diese Tabelle zeigt die gespeicherten Zutaten an.</p>
            </md-card-header>
            <md-card-content>
                <md-table v-model="ingredient" :table-header-color="tableHeaderColor" md-fixed-header @md-selected="onSelect">
                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                    <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                    <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
                    <md-table-cell md-label="Art">{{ item.type }}</md-table-cell>
                    <md-table-cell md-label="Kategorie">{{ item.category }}</md-table-cell>
                    <md-table-cell md-label="Kalorien">{{ item.calories }}</md-table-cell>
                    <md-table-cell md-label="Protein">{{ item.protein }}</md-table-cell>
                    <md-table-cell md-label="Fett">{{ item.fat }}</md-table-cell>
                    <md-table-cell md-label="Kohlehydraten">{{ item.carbohydrates }}</md-table-cell>
                    <md-table-cell md-label="Mineralien">{{ item.minerals }}</md-table-cell>
                    <md-table-cell md-label="Wassergehalt">{{ item.moisture }}</md-table-cell>
                    <md-table-cell md-label="Avatar">{{ item.avatar }}</md-table-cell>
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
    name: "ingredient-table",
    props: {
        tableHeaderColor: {
        type: String,
        default: "",
        },
    },
    data() {
        return {
        selected: [],
        ingredient: []
        };
    },
    async created() {        
        const { data: ingredient, error: error } = await supabase.from('ingredient').select();
         if (error) console.error(error);
         this.ingredient = ingredient;
    },
    methods: {
      onSelect (item) {
        this.selected = item
      }
    }
};
</script>
