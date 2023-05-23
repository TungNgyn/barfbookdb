<template>
    <div>
        <md-table v-model="dog" :table-header-color="tableHeaderColor" md-fixed-header>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="Avatar">{{ item.avatar }}</md-table-cell>
        </md-table-row>
        </md-table>
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
        dog: []
        };
    },
    async created() {        
        const { data: dog, error: dogError } = await supabase.from('dog').select();
         if (dogError) console.error(dogError);
         this.dog = dog;

    },
};
</script>
