<template>
    <v-app>
      <v-app-bar app color="primary" dark elevation="1">
        <v-app-bar-nav-icon @click.stop="sidebar = !sidebar"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-navigation-drawer app v-model="sidebar" :mini-variant.sync="mini">
        <v-list dense color="primary" dark>
          <v-list-item>
            <v-list-item-action>
              <v-icon @click.stop="sidebar = !sidebar">mdi-chevron-left</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              <h3>Minha Lista de Tarefas</h3>
            </v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item @click="mini = !mini">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content> Enzo </v-list-item-content>
          </v-list-item>
          <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content> {{ item.title }} </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view></router-view>
      </v-main>
      <v-footer app color="primary" dark class="py-4">
        <span class="caption">MyToDoList &copy;2023</span>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sidebar: true,
        mini: false,
        items: [
          { title: "Home", icon: "mdi-account", to: "/" },
          { title: "Perfil", icon: "mdi-account-cog", to: "/perfil" },
          { title: "Sair", icon: "mdi-exit-to-app", to: "/login" },
        ],
      };
    },
  };
  </script>
  
  <style></style>
  