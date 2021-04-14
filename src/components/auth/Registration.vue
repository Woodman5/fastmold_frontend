<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 700px">

      <q-form
        @submit="onSubmit"
        ref="form"

      >
        <div class="row justify-center" >
          <div class="col-sm-6 col-12 q-pa-md" style="font-size: 12px">
            <q-input
              dense
              v-model="username"
              ref="login"
              :label="$t('user-login')"
              name="username"
              @blur="checkName"
              counter
              maxlength="30"
              lazy-rules
              :rules="[
                  val => val && val.length > 0 || $t('enter-login'),
                  val => val.length <= 30 || $t('30-chars-max'),
                  val => val.length >= 8 || $t('8-chars-min')
              ]"
            >
              <template v-slot:before>
                <q-icon name="person"/>
              </template>
              <template v-slot:append v-if="checked">
                <q-icon name="fas fa-times-circle" class="text-negative" style="font-size: 22px;" v-if="!allow">
                  <q-tooltip>
                    Username already used
                  </q-tooltip>
                </q-icon>
                <q-icon name="fas fa-check-circle" class="text-positive" style="font-size: 22px;" v-if="allow"/>
              </template>
            </q-input>

            <q-input
              dense
              v-model="email"
              ref="email"
              :label="$t('email')"
              name="email"
              @blur="checkEmail"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || $t('enter email')
              ]"
            >
              <template v-slot:before>
                <q-icon name="email"/>
              </template>
              <template v-slot:append v-if="checked2">
                <q-icon name="fas fa-times-circle" class="text-negative" style="font-size: 22px;" v-if="!allow2"/>
                <q-icon name="fas fa-check-circle" class="text-positive" style="font-size: 22px;" v-if="allow2"/>
              </template>
            </q-input>

            <q-input
              v-model="password"
              ref="password"
              name="password"
              :label="$t('Password')"
              :type="isPwd ? 'password' : 'text'"
              lazy-rules
              dense
              :rules="[
                val => val && val.length > 0 || $t('Enter password'),
                val => val.length >= 8 || $t('At least 8 chars'),
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

            <q-input
              v-model="confirmPassword"
              ref="confirmPassword"
              name="confirm-password"
              :label="$t('Confirm password')"
              :type="isConPwd ? 'password' : 'text'"
              lazy-rules
              dense
              :rules="[
                val => val && val.length > 0 || $t('Enter password'),
                val => val === this.password || $t('Passwords should match'),
              ]"
            >
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

          </div>
          <div class="col-sm-6 col-12 q-pa-md">

            <q-input
              dense
              v-model="firstname"
              ref="firstname"
              :label="$t('Name')"
              name="firstname"
              counter
              maxlength="100"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || $t('enter first name')
              ]"
            >
            </q-input>

            <q-input
              dense
              v-model="lastname"
              ref="lastname"
              :label="$t('Last name')"
              name="lastname"
              counter
              maxlength="150"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || $t('enter last name')
              ]"
            >
            </q-input>

            <q-input
              dense
              v-model="middlename"
              ref="middlename"
              :label="$t('Middle name')"
              name="middlename"
              counter
              maxlength="150"
            >
            </q-input>

            <q-input
              dense
              v-model="phone"
              ref="phone"
              :label="$t('Phone')"
              name="phone"
              lazy-rules
              :rules="[
                val => val && val.length > 0 || $t('Enter phone number')
              ]"
            >
            </q-input>

          </div>
        </div>
        <div class="row justify-center">
          <div class="col-12 q-pa-md">

            <q-input
              dense
              v-model="address"
              ref="address"
              :label="$t('Address')"
              name="address"
            >
            </q-input>

          </div>
        </div>

        <div class="row justify-end q-pa-md">
          <q-btn
            :label="$t('Create account')"
            @click="onSubmit"
            color="primary"/>
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script>
  import { Cookies } from 'quasar'
  import * as types from "src/store/mutation-types";
  import axios from "axios";

  export default {
    data() {
      return {
        isPwd: true,
        isConPwd: true,
        username: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        email: '',
        lastname: '',
        middlename: '',
        phone: '',
        address: '',
        checked: false,
        checked2: false,
        allow: false,
        allow2: false,
      }
    },
    methods: {
      setchecked(status) {
        if (status === 200) {
          this.checked = true
          this.allow = false
        } else if (status === 204) {
          this.checked = true
          this.allow = true
        }
      },
      checkName() {
        let test = this.$refs.login.validate()
        if (test) {
          let form = {'name': this.username}
          try {
            axios.post("/api/v1/checkusername/", form, {
                headers: {'X-CSRFTOKEN': Cookies.get('csrftoken')}
              })
              .then(response => {
                if (response.status === 200) {
                  this.checked = true
                  this.allow = false
                } else if (response.status === 204) {
                  this.checked = true
                  this.allow = true
                }
              }).catch(() => {
            })
          } catch (error) {
            console.log(error)
          }
        }
      },
      checkEmail() {
        let test = this.$refs.email.validate()
        if (test) {
          let form = {'email': this.email}
          try {
            axios.post("/api/v1/checkemail/", form, {
                headers: {'X-CSRFTOKEN': Cookies.get('csrftoken')}
              })
              .then(response => {
                if (response.status === 200) {
                  this.checked2 = true
                  this.allow2 = false
                } else if (response.status === 204) {
                  this.checked2 = true
                  this.allow2 = true
                }
              }).catch(() => {
            })
          } catch (error) {
            console.log(error)
          }
        }
      },
      onSubmit() {
        this.$refs.form.validate().then(success => {
          if (success) {
            let regForm = new FormData()
            regForm.append('username', this.username)
            regForm.append('password', this.password)
            regForm.append('password_confirmation', this.confirmPassword)
            regForm.append('email', this.email)
            regForm.append('first_name', this.firstname)
            regForm.append('last_name', this.lastname)
            regForm.append('middle_name', this.middlename)
            regForm.append('phone', this.phone)
            regForm.append('address', this.address)

            try {
              axios.post("/api/v1/createuser/", regForm, {
                headers: {'X-CSRFTOKEN': Cookies.get('csrftoken')}
              })
                .then(response => {
                  this.$store.dispatch('login', {
                    'username': this.username,
                    'password': this.password
                  }).then(() => {
                    this.$router.push({name: 'home', query: {success: 'true'}})
                  })
                }).catch(e => {
                let errors = []
                for (let key in e.response.data){
                  errors.push(e.response.data[key].join('. '))
                }
                let errorStr = errors.join('. ')
                this.$store.dispatch('setError', errorStr)
              })
            } catch (error) {
              console.log(error)
            }
          }
          else {
            console.log('validation failed')
          }
        })
      }
    },
  }
</script>

<style scoped>

</style>
