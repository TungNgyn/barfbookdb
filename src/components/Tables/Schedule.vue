<template>
    <div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card">
          <md-card-header data-background-color="green">
                <h4 class="title">schedule</h4>
                <p class="category">Diese Tabelle zeigt an, welche Profile zu welchem Tag ein Rezept zugeordnet haben.</p>
            </md-card-header>
            <md-card-content>
                <md-table v-model="schedule" :table-header-color="tableHeaderColor" md-fixed-header @md-selected="onSelect">
                <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                    <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Datum">{{ item.date }}</md-table-cell>
            <md-table-cell md-label="Rezept">{{ item.recipe }}</md-table-cell>
            <md-table-cell md-label="Benutzer ID">{{ item.user_id }}</md-table-cell>
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
    name: "schedule-table",
    props: {
        tableHeaderColor: {
        type: String,
        default: "",
        },
    },
    data() {
        return {
        selected: [],
        schedule: []
        };
    },
    async created() {        
        const { data: schedule, error: error } = await supabase.from('schedule').select();
         if (error) console.error(error);
         this.schedule = schedule;
    },
    methods: {
      onSelect (item) {
        this.selected = item
      }
    }
};
</script>
