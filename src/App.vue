<template>
  <Layout>
    <div slot="toolbar">
      Hotel Manager (Vue.js)
    </div>

    <div slot="main-menu">
      <v-list dense>
        <v-list-tile @click="x = true">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>

    <div slot="content">
      <router-view/>
    </div>

    <div slot="footer">
      <span class="white--text">&copy; Jonayet Hossain 2017</span>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>

</style>
