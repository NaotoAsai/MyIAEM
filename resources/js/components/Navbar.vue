<template>
    <v-app-bar
      app
      color="#CCCC99"
      dark
    >
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>即add</v-toolbar-title>
    </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['toggleSideMenu'])
  }
}
</script>