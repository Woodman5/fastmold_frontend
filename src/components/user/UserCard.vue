<template>
    <q-page padding>
    <div class="row justify-center">

      <q-card class="my-card q-ma-md" v-if="user">
        <q-card-section>
          <div class="text-h6">{{user.username}}</div>
          <div class="text-subtitle2">{{user.email}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          id: {{ user.id }} <br>
          Имя: {{ user.first_name }} {{ user.middle_name }} {{ user.last_name }} <br>
          Адрес: {{ user.address }} <br>
          Телефон: {{ user.phone }} <br>
          Роль: {{ user.role }} <br>
          Юридическое лицо: {{ user.is_legal_person }} <br>
          Дата регистрации: {{ user.date_joined }} <br>
        </q-card-section>

      </q-card>

      <div v-else class="text-h6">No user data</div>

    </div>
  </q-page>
</template>

<script>
    export default {
        name: "UserCard",
    }
</script>

<style scoped>

</style>
