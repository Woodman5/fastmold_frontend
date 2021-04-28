<template>
  <q-page padding>
    <div class="row justify-center">
      <q-card class="my-card q-ma-md" v-for="ad in ads" :key="ad.id">
        <img :src="ad.imageSrc" />

        <q-card-section>
          <div class="text-h6">{{ ad.title }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ ad.description }}
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat color="warning" class="q-px-lg" :to="'/ad/' + ad.id"
            >Open</q-btn
          >
          <q-btn color="primary" class="q-px-lg">Buy</q-btn>
        </q-card-actions>
      </q-card>
    </div>

    <div class="row justify-center">
      <q-card class="my-card q-ma-md" v-for="ad in promoAds" :key="ad.id">
        <img :src="ad.imageSrc" />

        <q-card-section>
          <div class="text-h6">{{ ad.title }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ ad.description }}
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat color="warning" class="q-px-lg" :to="'/ad/' + ad.id"
            >Open</q-btn
          >
          <q-btn color="primary" class="q-px-lg">Buy</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    promoAds() {
      return this.$store.getters.promoAds;
    },
    ads() {
      return this.$store.getters.ads;
    },
  },
  created() {
    if (this.$route.query["success"]) {
      void this.$store.dispatch("setMessage", "Successfully registered");
    }
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
