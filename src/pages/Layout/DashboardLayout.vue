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
      <sidebar-link  to="/table" class="active-pro">
asdasd
      </sidebar-link>
      <md-button class="md-round md-danger signOut">Ausloggen</md-button>
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

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
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
.signOut {
  width: 75%;
  margin: auto;
  bottom: 0;
}
</style>