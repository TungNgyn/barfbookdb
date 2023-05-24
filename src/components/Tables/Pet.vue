<template>
    <div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card">
          <md-card-header data-background-color="green">
                <h4 class="title">pet</h4>
                <p class="category">Diese Tabelle zeigt die erstellten Hunde an.</p>
            </md-card-header>
            <md-card-content>
                <md-table v-model="pet" :table-header-color="tableHeaderColor" md-fixed-header @md-selected="onSelect">
                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                  <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Besitzer ID">{{ item.owner }}</md-table-cell>
            <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="Rasse">{{ item.breed }}</md-table-cell>
            <md-table-cell md-label="Alter">{{ item.age }}</md-table-cell>
            <md-table-cell md-label="Gewicht">{{ item.weight }}</md-table-cell>
            <md-table-cell md-label="Geschlecht">{{ item.gender }}</md-table-cell>
            <md-table-cell md-label="Tägliche Ration">{{ item.ration }}</md-table-cell>
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
    name: "pet-table",
    props: {
        tableHeaderColor: {
        type: String,
        default: "",
        },
    },
    data() {
        return {
        selected: [],
        pet: []
        };
    },
    async created() {        
        const { data: pet, error: error } = await supabase.from('pet').select();
         if (error) console.error(error);
         this.pet = pet;
    },
    methods: {
      onSelect (item) {
        this.selected = item
      }
    }
};
</script>
