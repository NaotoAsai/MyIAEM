<template>
  <v-row row class="text-xs-center">
    <v-col md="2" offset-md="5" class="lighten-4">
        <v-card flat>
          <v-card-title primary-title>
            <h4>ログイン</h4>
          </v-card-title>
          <v-form>
          <v-text-field name="username" label="ユーザー名"></v-text-field>
          <v-text-field name="email" label="メールアドレス"></v-text-field>
          <v-text-field name="password" label="パスワード" type="password"></v-text-field>
          <v-text-field name="passwordconfirm" label="パスワード(確認)" type="password"></v-text-field>
          <v-card-actions>
            <v-btn primary large block>ログイン</v-btn>
          </v-card-actions>
          </v-form>
        </v-card>
    </v-col>
  </v-row>
</template>