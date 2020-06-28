<template>
<div>
  <h2 style="text-align: center;">11月11日　月曜日</h2>
  <v-tabs grow>
    <v-tab @click="currentForm = 'ExpenditureForm'">
      支出
    </v-tab>
    <v-tab @click="currentForm = 'IncomeForm'">
      収入
    </v-tab>
  </v-tabs>

  <component :is="currentForm"></component>
</div>
</template>

<script>
import IncomeForm from './IncomeForm.vue'
import ExpenditureForm from './ExpenditureForm.vue'

export default {
  components: {
    IncomeForm,
    ExpenditureForm
  },
  data() {
    return {
      currentForm: 'ExpenditureForm'
    }
  }
}
</script>