<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 320px">

      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        ref="form"
      >
        <q-input
          dense
          v-model="username"
          ref="login"
          label="Login"
          name="username"
          counter
          maxlength="30"
          lazy-rules
          :rules="[
            val => val && val.length > 0 || 'Enter Login',
            val => val.length <= 30 || '30 chars max',
        ]"
        >
          <template v-slot:before>
            <q-icon name="person"/>
          </template>
        </q-input>

        <q-input
          v-model="password"
          ref="password"
          name="password"
          label="Password"
          :type="isPwd ? 'password' : 'text'"
          lazy-rules
          dense
          :rules="[
          val => val && val.length > 0 || 'Enter password',
          val => val.length >= 8 || 'At least 8 chars',
        ]">
          <template v-slot:before>
            <q-icon name="lock"/>
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div class="row justify-end">
          <q-btn
            label="Login"
            :loading="loading"
            @click="onSubmit"
            color="primary" />
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        isPwd: true,
        username: '',
        password: '',
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate().then(success => {
          if (success) {
            let userForm = new FormData()
            userForm.append('username', this.username)
            userForm.append('password', this.password)

            this.$store.dispatch('login', userForm)
              .then(() => {
                this.$router.push({name: 'home'})
              })
              .catch(() => {});
          }
        })
      }
    },
    created() {
      if (this.$route.query['loginError']) {
        this.$store.dispatch('setError', 'Please sign in to access this page')
      }
    }
  }
</script>

<style scoped>

</style>
