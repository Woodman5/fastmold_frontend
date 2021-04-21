<template>
  <q-page padding>
      <div class="column items-center">
      <div class='col-12'>
      <h4>{{ $t('Colors') }}</h4>
        <q-list padding style='min-width: 500px;'>

          <q-item
            tag="label"
            v-ripple
            v-for="color in colors"
            :key='color.id'
            >
            <q-item-section avatar class="q-pr-lg">
              <q-avatar :style="{background: color.hex_code}" text-color="white" class="shadow-2" size="2rem"/>
            </q-item-section>

            <q-item-section>
              <q-item-label><span class="text-weight-medium">{{ color.name }}</span></q-item-label>
              <q-item-label caption>
                {{ color.color_type }}
              </q-item-label>
            </q-item-section>

            <q-item-section>
              <q-item-label caption>RGB: {{ color.rgb_code }}</q-item-label>
              <q-item-label caption>Web: {{ color.hex_code }}</q-item-label>
            </q-item-section>
            
            <q-item-section top side>
              <div class="text-grey-8 q-gutter-xs q-mt-xs">
                <q-btn class="gt-xs" size="12px" flat dense round icon="edit" :to="'/color/' + color.id" />
                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
                <q-btn size="12px" flat dense round icon="more_vert" />
              </div>
            </q-item-section>
          </q-item>

        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script lang='ts'>
import Vue from 'vue';
import Store from 'vuex';
import { Color, Material, HardScale } from 'src/store/types'

  export default Vue.extend({
    name: 'MaterialsList',
    data: function () {
      return {
        colorHeader: 'Colors',
        colors: this.$store.state.colors as Color[],
        hardScales: this.$store.state.hardScales as HardScale[],
        materials: this.$store.state.materials as Material[]
      }
    },
    mounted() {
      console.log(this.colors)

    }
    
  })
</script>

<style scoped>

</style>
