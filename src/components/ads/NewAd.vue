<template>
<q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 320px">
    <h4>Create new Ad</h4>

      <q-form
        class="q-gutter-md"
        ref="form"
      >
        <q-input
          dense
          v-model="title"
          ref="title"
          label="Ad title"
          name="title"
          lazy-rules
          :rules="[
            val => val && val.length > 0 || 'Title is required',
        ]"
        >
        </q-input>

        <q-input
          v-model="description"
          ref="description"
          name="description"
          label="Description"
          type="textarea"
          lazy-rules
          dense
          :rules="[
            val => val && val.length > 0 || 'Description is required',
          ]">
        </q-input>

      </q-form>

      <div class="row justify-start">
        <q-btn
          dark-percentage
          color="orange"
          text-color="grey-9"
          icon="cloud_upload"
          style="width: 100px"
        />
        <q-space/>
        <q-toggle
          v-model="promo"
          color="green"
          label="Add to promo"
        />
      </div>

      <div class="row justify-center">
        <img srs='' height='100'>
      </div>

      <div class="row justify-end">
        <q-btn
          label="Create Ad"
          @click="createAd"
          color="primary" />
      </div>

    </div>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        promo: false,
      }
    },
    methods: {
      createAd () {
        this.$refs.form.validate().then(success => {
          if (success) {
            const ad = {
              title: this.title,
              description: this.description,
              promo: this.promo
            }
            console.log(ad)
          }
          else {
            console.log('validation failed')
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
