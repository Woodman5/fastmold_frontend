<template>
  <q-page padding>
    <div class="row justify-center">

      <q-card class="my-card q-ma-md">
        <q-img
          :src="ad.imageSrc"
          :ratio="30/8"
          >
        </q-img>

        <q-card-section>
          <div class="text-h6">{{ad.title}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ ad.description }}
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
            <q-btn flat color="warning" class="q-px-lg">Edit</q-btn>
            <q-btn color="primary" class="q-px-lg">Buy</q-btn>
        </q-card-actions>

      </q-card>

    </div>
  </q-page>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      ad () {
        const id  = this.id
        return this.$store.getters.adById(id)
      }
    }
  }
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
