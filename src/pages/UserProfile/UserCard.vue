<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="avatar" />
    </div>
    
    <md-card-content>
      <h5 class="category text-gray">{{ user?.email }}</h5>
      <h3 class="card-title">{{ user?.user_metadata["name"] }}</h3>
      <p class="card-description">
        {{ user?.user_metadata["description"] }}
      </p>
            <md-button class="md-round md-danger" @click="signOut">Ausloggen</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
import { supabase } from '@/components/Supabase';

export default {
  name: "user-card",
  async created() {
      const { data: { user }, error } = await supabase.auth.getUser();  
        if (error) console.error(error);
      this.user = user;
      this.avatar = `https://wokqzyqvqztmyzhhuqqh.supabase.co/storage/v1/object/public/profile/${user?.id}`;
  
    },
  methods: {
    async signOut() {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error(error); // Or you can show an error message on the page
      }
    },
  },
  data() {
    return {      
      user: null,
      avatar: null
    };
  },
};
</script>
<style scoped>
div.md-card-avatar {
  height: 20em;
  width: 20em;
}
img.img {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
