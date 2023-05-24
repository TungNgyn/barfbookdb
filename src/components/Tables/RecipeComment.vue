<template>
    <div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card">
          <md-card-header data-background-color="green">
                <h4 class="title">recipe_comment</h4>
                <p class="category">Diese Tabelle zeigt an, welche Profile welche Rezepte kommentiert haben.</p>
            </md-card-header>
            <md-card-content>
                <md-table v-model="recipe_comment" :table-header-color="tableHeaderColor" md-fixed-header @md-selected="onSelect">
                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                    <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                        <md-table-cell md-label="Profil">{{ item.profile }}</md-table-cell>
                        <md-table-cell md-label="Rezept">{{ item.recipe }}</md-table-cell>
                        <md-table-cell md-label="Kommentar">{{ item.comment }}</md-table-cell>
                        <md-table-cell md-label="Erstellt am">{{ item.created_at }}</md-table-cell>
                        <md-table-cell md-label="Bearbeitet am">{{ item.modified_at }}</md-table-cell>
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
    name: "recipe-comment-table",
    props: {
        tableHeaderColor: {
        type: String,
        default: "",
        },
    },
    data() {
        return {
        selected: [],
        recipe_comment: []
        };
    },
    async created() {        
        const { data: recipe_comment, error: error } = await supabase.from('recipe_comment').select();
         if (error) console.error(error);
         this.recipe_comment = recipe_comment;
    },
    methods: {
      onSelect (item) {
        this.selected = item
      }
    }
};
</script>
