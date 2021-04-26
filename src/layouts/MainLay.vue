<template>
  <q-layout view="hHh LpR fFf">


    <q-header elevated class="text-white header">
      <div class="q-my-auto">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="left = !left"
            aria-label="Menu"
            icon="menu"
            class="q-mr-sm"
          />

          <q-toolbar-title>
            <router-link to='/' tag='span' class='pointer'>FastMold</router-link>
          </q-toolbar-title>

          <q-space></q-space>

          <q-btn class="gt-sm nunito-font"
                 flat
                 v-for="link in links"
                 :key="link.name"
                 :label="$t(link.name)"
                 :icon="link.icon"
                 :to="link.url">
          </q-btn>

          <q-btn-dropdown
            class="gt-sm nunito-font"
            flat
            icon="fas fa-globe"
            :label="langLabel"
          >
            <q-list class="nunito-font">

              <q-item clickable
                      v-close-popup
                      @click="changeLang(lang.value)"
                      v-for="lang in langs"
                      :key="lang.value"
                      :class="{ 'q-item--active': $i18n.locale === lang.value}"
              >
                <q-item-section>
                  <q-item-label>{{lang.name}}</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>

          </q-btn-dropdown>

          <q-btn-dropdown
            class="gt-sm"
            rounded
            dense
            flat
            v-if="isUserLoggedIn"
          >
            <template v-slot:label>
              <q-avatar color="white" text-color="primary">{{user.username|first}}</q-avatar>
            </template>

            <q-list>

              <q-item>
                <q-item-section>
                  <q-item-label>{{ user.username }}</q-item-label>
                  <q-item-label caption lines="1">{{ user.email }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <a href="/profile/" title="Профиль">
                    <q-icon name="fas fa-cog" color="amber" style="font-size: 16px;"></q-icon>
                  </a>
                </q-item-section>
              </q-item>

              <q-separator></q-separator>

              <q-item dense
                      clickable
                      v-ripple
                      @click="gotourl('/admin/')"
                      v-if="user.role === 2"
              >
                <q-item-section class="text-weight-light">
                  Администрирование
                </q-item-section>
                <q-item-section avatar>
                  <q-icon name="fas fa-tools" color="amber" style="font-size: 16px;"></q-icon>
                </q-item-section>
              </q-item>

              <q-item dense
                      clickable
                      v-ripple
                      @click="onLogout"
              >
                <q-item-section class="text-weight-light">
                  Выйти
                </q-item-section>
                <q-item-section avatar>
                  <q-icon name="fas fa-sign-out-alt" color="amber" style="font-size: 16px;"></q-icon>
                </q-item-section>
              </q-item>

            </q-list>

          </q-btn-dropdown>

        </q-toolbar>

      </div>
    </q-header>


    <q-drawer
      v-model="left"
      side="left"
      bordered
      :width="240"
      :breakpoint="1060"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item v-ripple v-for="link in links" :key="link.name" clickable :to="link.url">
            <q-item-section avatar>
              <q-icon :name="link.icon"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ $t(link.name) }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

    </q-drawer>


    <q-page-container>
      <router-view></router-view>
    </q-page-container>


  </q-layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapGetters } from 'vuex'
  // import { User } from 'src/store/user/types'

  export default Vue.extend({
    data: function () {
      return {
        left: false,
        text: 'test',
        isUserLoggedIn: true,
        user: {
          name: 'Yury',
          email: 'test@test.com',
          role: 'Admin'
        },
        langs: [
          { value: 'en-us', label: 'En', name: 'English' },
          { value: 'ru-ru', label: 'Ru', name: 'Русский' },
        ],
      }
    },
    methods: {
      gotourl(url: string) {
        document.location.href = url;
      },
      changeLang(lang: string) {
        this.$i18n.locale = lang
      },
      async onLogout() {
        await this.$store.dispatch('logout').catch(error => console.log(error))
        if (this.$route.name !== 'home') {
          this.$router.push({ name: 'home' }).catch(error => console.log(error))
        }
      }
    },
    filters: {
      first: function (value: string) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase()
      }
    },
    computed: {
      ...mapGetters({
        getInfo: 'userProfile/getTestInfo',
        user: 'userProfile/user',
        //isUserLoggedIn: 'userProfile/check'
      }),
      langLabel(): string {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.langs.find(lang => lang.value === this.$i18n.locale)!.label
      },
      // user() : User | null {
      //   return this.$store.getters['userProfile/user'];
      // },
      // isUserLoggedIn() : boolean {
      //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      //   console.log('check =', this.$store.getters['userProfile/check']);
      //   console.log('check2 =', this.$store);
      //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      //   return this.$store.getters['userProfile/check'];
      // },
      // getInfo: {
      //   get (): string {
      //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      //     console.log('prefetch =', this.$store.getters['userProfile/getTestInfo']);
      //     return this.$store.getters['userProfile/getTestInfo'];
      //   }
      // },
      links() {
        if (this.isUserLoggedIn) {
          return [
            { name: 'Orders', icon: 'bookmark_border', url: '/orders' },
            { name: 'New ad', icon: 'note_add', url: '/new' },
            { name: 'My ads', icon: 'list', url: '/list' },
            { name: 'My info', icon: 'person', url: '/user' },
          ]
        }
        return [
          { name: 'Login', icon: 'lock', url: '/login' },
          { name: 'Registration', icon: 'face', url: '/registration' },
          { name: 'Materials', icon: 'fas fa-flask', url: '/materials' },
        ]
      }
    }
  })
</script>

<style scoped>
  .pointer {
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
  }

  .header {
    background: linear-gradient(145deg, #027be3 11%, #014a88 75%) !important;
  }

  /*a:active, !* активная/посещенная ссылка *!*/
  /*a:hover, !* при наведении *!*/
  /*a {*/
  /*  text-decoration: none;*/
  /*  color: white;*/

  /*}*/
</style>
