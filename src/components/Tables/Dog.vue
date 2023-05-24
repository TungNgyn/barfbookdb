<template>
    <div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card">
          <md-card-header data-background-color="green">
                <h4 class="title">dog</h4>
                <p class="category">Diese Tabelle zeigt die gespeicherten Hunderassen an.</p>
            </md-card-header>
            <md-card-content>
                <md-table v-model="dog" :table-header-color="tableHeaderColor" md-fixed-header @md-selected="onSelect">
                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                    <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                    <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
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
    name: "dog-table",
    props: {
        tableHeaderColor: {
        type: String,
        default: "",
        },
    },
    data() {
        return {
        selected: [],
        dog: [],
        };
    },
    async created() {        
        const { data: dog, error: error } = await supabase.from('dog').select();
         if (error) console.error(error);
         this.dog = dog;
    },
    methods: {
      onSelect (item) {
        this.selected = item
      }
    }
};
</script>
