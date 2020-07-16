<template>
  <v-bottom-navigation
    grow
    color="teal"
    height="90px"
    absolute
    :input-value= false
    v-if="isLogin"
  >
    <v-btn @click="$router.push({ name: 'home' }).catch(() => {})">
      <span>追加する</span>
      <v-icon>mdi-pencil-plus</v-icon>
    </v-btn>

    <v-btn @click="$router.push({ name: 'calendar' }).catch(() => {})">
      <span>カレンダー</span>
      <v-icon>mdi-calendar-month</v-icon>
    </v-btn>
    
    <v-btn @click="$router.push({ name: 'classdisp' }).catch(() => {})">
      <span>分類別の収支を見る</span>
      <v-icon>mdi-format-list-numbered</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isLogin'])
    },
    data () {
      return {
        activeBtn: 1,
      }
    },
  }
</script>