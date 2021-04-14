<template>
  <q-page padding>

    <div class="row justify-center">
      <div class='col-6'>
        <h4>My Ads</h4>

        <q-card class="my-card q-my-md" v-for='ad in myAds' :key='ad.id'>
          <q-card-section horizontal>

              <q-img
                class="col-4"
                :src="ad.imageSrc"
              />

            <q-card-section>
              <div class="text-h5 q-mt-sm q-mb-xs">{{ad.title}}</div>
              <div class="text-caption text-grey">{{ ad.description }}</div>
            </q-card-section>
          </q-card-section>
            <q-separator/>

        <q-card-actions align="right">
          <q-btn flat color="warning" class="q-px-lg" :to="'/ad/' + ad.id">Open</q-btn>
          <q-btn color="primary" class="q-px-lg">Buy</q-btn>
        </q-card-actions>


        </q-card>

      </div>
    </div>

  </q-page>
</template>

<script>
  export default {
    computed: {
      myAds () {
        return this.$store.getters.myAds
      }
    }
  }
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
