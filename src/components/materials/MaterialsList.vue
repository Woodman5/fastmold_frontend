<template>
  <q-page padding>
      <div class="column items-center">
      <div class='col-12'>
      <h4>{{ $tc('color', 1) }}</h4>


        <div class="row no-wrap items-center">

          <q-space />

          <div style="width: 5rem;" class="text-right q-px-xs">{{ toggleText() }}</div>
          <q-toggle
            v-model="grid"
            keep-color
            color="amber-3"
          />
        </div>

        <div
          class="q-pa-md row items-start q-gutter-md"
          v-if="grid"
        >
          <q-card
            v-for="color in colors"
            :key='color.id'
            flat
            bordered
            class="my-card">

            <q-card-section class="q-py-none flex q-pr-xs">
              <div class="text-subtitle1 col-10">{{ color.name }}</div>
              <q-space></q-space>
              <div class="col-1">
                <q-btn color="grey-7" round flat icon="more_vert" size="12px">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item >
                        <q-btn class="gt-xs" size="12px" flat dense round icon="edit" :to="'/color/' + color.id" color="grey-8"/>
                      </q-item>
                      <q-item >
                        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" color="grey-8"/>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>

            </q-card-section>

            <q-card-section horizontal>
              <q-card-section  class="col-8 q-py-none">
              <div class="text-caption no-wrap">{{ color.color_type }}</div>
              <div class="text-caption text-grey-7 q-mt-sm no-wrap">RGB: {{ color.rgb_code }}</div>
              <div class="text-caption text-grey-7 no-wrap">Web: {{ color.hex_code }}</div>
              </q-card-section>
              <q-separator vertical inset />
              <q-card-section class="col-4 text-center">
                <q-avatar :style="{background: color.hex_code}" class="shadow-2" size="2rem"/>
              </q-card-section>
            </q-card-section>

          </q-card>

        </div>

        <q-list
          padding
          v-else
          style='min-width: 500px;'>

          <q-item
            tag="label"
            v-ripple
            v-for="color in colors"
            :key='color.id'
            >
            <q-item-section avatar class="q-pr-lg">
              <q-avatar :style="{background: color.hex_code}" class="shadow-2" size="2rem"/>
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
import { Color, Material, HardScale } from 'src/store/types'
import { TranslateResult } from 'vue-i18n';

  export default Vue.extend({
    name: 'MaterialsList',
    data: function () {
      return {
        grid: true,
        colors: this.$store.state.colors as Color[],
        hardScales: this.$store.state.hardScales as HardScale[],
        materials: this.$store.state.materials as Material[]
      }
    },
    // mounted() {
    //   console.log(this.colors)
    //
    // },
    methods: {
      toggleText() : TranslateResult {
        return this.grid ? this.$tc('grid') : this.$tc('list')
      }
    }

  })
</script>


<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 250px
    height: 100%
    max-height: 110px
</style>
