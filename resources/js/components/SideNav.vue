<template>
    <v-navigation-drawer
      v-model="$store.state.drawer"
      app
    >
      <v-list>
        <v-list-item @click="$router.push({ name: 'home' }).catch(() => {})">
          <v-list-item-action>
            <v-icon>mdi-pencil-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>追加する</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push({ name: 'calendar' }).catch(() => {})">
          <v-list-item-action>
            <v-icon>mdi-calendar-month</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>カレンダー</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push({ name: 'classdisp' }).catch(() => {})">
          <v-list-item-action>
            <v-icon>mdi-format-list-numbered</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>分類別の収支を見る</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>