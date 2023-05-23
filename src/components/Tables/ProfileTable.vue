<template>
    <div>
        <md-table v-model="profile" :table-header-color="tableHeaderColor" md-fixed-header>
        <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Erstellt am">{{ item.created_at }}</md-table-cell>
            <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="Beschreibung">{{ item.description }}</md-table-cell>
            <md-table-cell md-label="Rang">{{ item.rank }}</md-table-cell>
        </md-table-row>
        </md-table>
    </div>
</template>

<script>
import { supabase } from '@/components/Supabase';

export default {
    name: "profile-table",
    props: {
        tableHeaderColor: {
        type: String,
        default: "",
        },
    },
    data() {
        return {
        selected: [],
        profile: []
        };
    },
    async created() {        
        const { data: profile, error: profileError } = await supabase.from('profile').select();
         if (profileError) console.error(profileError);
         this.profile = profile;

    },
};
</script>
