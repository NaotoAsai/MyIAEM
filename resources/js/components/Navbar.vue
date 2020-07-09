<template>
    <v-app-bar
      app
      color="#CCCC99"
      dark
    >
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>即add</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-menu offset-y>
        <template v-slot:activator="{on}">
        <v-btn v-on="on" text>
          UserName
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>名前変更</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>ログアウト</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-toolbar-items>
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