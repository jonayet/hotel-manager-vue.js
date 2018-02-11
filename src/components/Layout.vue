<template>
    <v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <slot name="main-menu" />
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <slot name="toolbar" />
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
        <slot name="content"/>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <slot name="footer"/>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
}
</script>
