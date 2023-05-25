<template>
    <div class="wrapper">
      <div
        class="md-layout-item md-medium-size-100  md-size-50"
      >
        <md-card class="md-card">
          <md-card-header data-background-color="green">
                <h4 class="title">profile</h4>
                <p class="category">Diese Tabelle zeigt die gespeicherten Profile an.</p>
            </md-card-header>
            <md-card-content>
                <md-table v-model="profile" :table-header-color="tableHeaderColor" md-fixed-header @md-selected="onSelect">
                  <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
                    <md-table-cell md-label="Dateiname">{{ item.name }}</md-table-cell>
                  </md-table-row>
              </md-table>
          </md-card-content>
      </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100  md-size-50"
      >
          <md-card>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">Media card</div>
                <div class="md-subhead">Big size</div>
              </md-card-header-text>

              <md-card-media md-big>
                <img src="../../assets/img/stein-splash.png" alt="People">
              </md-card-media>
            </md-card-header>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
      </div>
    </div>
</template>

<script>
import { supabase } from '@/components/Supabase';

export default {
    name: "profile-storage",
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
        const { data: profile, error: error } = await supabase.storage.from('profile').list();
         if (error) console.error(error);
         this.profile = profile;
         console.log(profile)
    },
    methods: {
      onSelect (item) {
        this.selected = item
      }
    }
};
</script>

<style scoped>
div.wrapper {
  display: flex;
  background-color: aliceblue;
}

</style>