<template>
  <q-page padding>
      <div class="column items-center">
      <div class='col'>
      <h4>Orders</h4>
        <q-list bordered padding style='max-width: 500px;'>

          <q-item
            tag="label"
            v-ripple
            v-for="order in orders"
            :key='order.id'
            >

            <q-item-section side top>
              <q-checkbox
                @click.native='markDone(order)'
                :value='order.done'
                color="green"
                >

              </q-checkbox>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ order.name }}</q-item-label>
              <q-item-label caption>
                {{ order.phone }}
              </q-item-label>
            </q-item-section>
            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs q-mt-xs">
                <q-btn class="gt-xs" size="12px" flat dense round icon="edit" :to="'/ad/' + order.adId" />
              </div>
            </q-item-section>
          </q-item>

        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        orders: [
          {
            id: 'eqw2',
            name: 'Yury',
            phone: '8-945-785-45-23',
            adId: '123',
            done: false,
          },
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
      }
    }
  }
</script>

<style scoped>

</style>
