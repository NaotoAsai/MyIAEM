<template>
    <v-app-bar
      app
      color="#CCCC99"
      dark
    >
      <v-app-bar-nav-icon @click="toggleSideMenu" v-if="isLogin"></v-app-bar-nav-icon>
      <v-toolbar-title>即add</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items v-if="isLogin">
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
            <v-list-item-content @click="logout">
              <v-list-item-title>ログアウト</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      </v-toolbar-items>

    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLogin'])
  },
  methods: {
    ...mapActions(['toggleSideMenu','logout'])
  }
}
</script>