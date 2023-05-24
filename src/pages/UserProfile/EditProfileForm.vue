<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Profile bearbeiten</h4>
        <p class="category">vervollständige dein Profil</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>ID</label>
              <md-input v-model="id" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Name</label>
              <md-input v-model="name" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Email-Adresse</label>
              <md-input v-model="email" type="email"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field maxlength="5">
              <label>Beschreibung</label>
              <md-input v-model="description"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Profil aktualisieren</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { supabase } from '@/components/Supabase';

export default {
  name: "edit-profile-form",
  async created() {
      const { data: { user }, error } = await supabase.auth.getUser();  
        if (error) console.error(error);
      this.user = user;
      this.name = user?.user_metadata["name"];
      this.description = user?.user_metadata["description"];
      this.email = user?.email;
      this.id = user?.id;
    },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      id: null,
      user: null,
      avatar: null,     
      email: null,
      description: null,
      name: null,
      disabled: null,
    };
  },
};
</script>
<style></style>
