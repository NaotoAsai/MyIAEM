<template>
  <v-row row class="text-xs-center">
    <v-col md="2" offset-md="5" class="lighten-4">
        <v-card flat>
          <v-card-title primary-title>
            <h4>ログイン</h4>
          </v-card-title>
          <v-form>
          <v-text-field name="email" label="メールアドレス" v-model="authData.email"></v-text-field>
          <v-text-field name="password" label="パスワード" type="password" v-model="authData.password"></v-text-field>
          <v-checkbox
            v-model="authData.remember"
            label="次回から入力を省略する"
            required
          ></v-checkbox>
          <v-card-actions>
            <v-btn primary large block @click="login">ログイン</v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      authData: {
        email: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.authData)
    }
  }
}
</script>