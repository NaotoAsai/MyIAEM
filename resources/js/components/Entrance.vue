<template>
<div>
  <v-tabs grow>
    <v-tab @click="currentForm = 'RegisterForm'">
      会員登録
    </v-tab>
    <v-tab @click="currentForm = 'LoginForm'">
      ログイン
    </v-tab>
  </v-tabs>

  <component :is="currentForm"></component>
</div>
</template>

<script>
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'

export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      currentForm: 'RegisterForm'
    }
  }
}
</script>