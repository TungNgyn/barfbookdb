<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>Profil</p>
      </sidebar-link>
      <sidebar-link to="/table">
        <md-icon class="fa fa-table"></md-icon>
        <p>Tabelle</p>
      </sidebar-link>
      <!-- <sidebar-link to="/storage">
        <md-icon class="fa fa-table"></md-icon>
        <p>Speicher</p>
      </sidebar-link> -->
      <div class="signOutWrapper">
        <md-button class="md-round md-danger signOut" @click="signOut">Ausloggen</md-button>
      </div>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import { supabase } from '@/components/Supabase';

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
  },
  methods: {
    async signOut() {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error(error); // Or you can show an error message on the page
      }
      localStorage.setItem('session', null);
      this.$forceUpdate();
      this.$router.go('/');
    },
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/stein-splash.png"),
    };
  },
};
</script>

<style scoped>
.signOutWrapper {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

</style>