<template>
  <q-page padding>
<div class="q-pa-md" style="max-width: 800px">
    <q-card>
      <q-tabs
        v-model="tab"

        class="text-grey-8 nunito-font"
        active-color="primary"
        indicator-color="orange"
        align="justify"
      >
        <q-tab name="simple" :label="$t('simpleColors')" class="my-label" />
        <q-tab name="ral" label="RAL" class="my-label" />
        <q-tab name="ncs" label="NCS" class="my-label" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated style="height: 500px">

        <q-tab-panel name="simple">

          <div class="row justify-between">
            <div class="col-1 q-pa-md"
                 v-for="color in simpColors"
                 :key="color.id"
            >
              <q-avatar :style="{background: color.hex_code}" class="shadow-2" size="3rem"/>
              <q-tooltip>
                <p>{{color.name}}</p>
                <p>RGB: {{ color.rgb_code }}</p>
                <p>Web: {{ color.hex_code }}</p>
              </q-tooltip>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="ral" class="q-pa-none">

          <q-splitter
            v-model="splitterModel"
            style="height: 100%"
          >

            <template v-slot:before>
              <q-tabs
                v-model="innerTab"
                vertical
                class="text-teal"
              >
                <q-tab name="innerSimple" icon="mail" label="Mails" />
                <q-tab name="innerRal" icon="alarm" label="Alarms" />
                <q-tab name="innerNCS" icon="movie" label="Movies" />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="innerTab"
                animated
                transition-prev="slide-down"
                transition-next="slide-up"
              >
                <q-tab-panel name="innerSimple">
                  <div class="text-h4 q-mb-md nunito-font text-italic">Материалы</div>
                  <p style="font-size: 0.9rem; font-weight: 400" class="fira-font text-grey-8">
                    Lorem ipsum dolor +7 (985) 270 63 23 sit, amet consectetur adipisicing elit. 1.5
                    1548,98 Quis praesentium cumque magnam 0123456789 odio iure quidem, quod illum numquam
                    possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>

                  <p style="font-size: 0.9rem; font-weight: 400" class="fira-font text-grey-8">
                    На 12:40 МСК главная криптовалюта торгуется на криптобирже Binance на уровне $54 тыс.
                    В воскресенье, 18 апреля, котировки биткоина опускались до трехнедельного минимума — $50,9 тыс.
                    Это произошло после того, как 13 апреля первая цифровая монета обновила исторический максимум на отметке $64,8 тыс.
                    </p>

                </q-tab-panel>

                <q-tab-panel name="innerRal">
                  <div class="text-h4 q-mb-md">Alarms</div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </q-tab-panel>

                <q-tab-panel name="innerNCS">
                  <div class="text-h4 q-mb-md">Movies</div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </q-tab-panel>
              </q-tab-panels>
            </template>

          </q-splitter>
        </q-tab-panel>

        <q-tab-panel name="ncs" class="q-pa-none">

          <q-splitter
            v-model="splitterModel"

          >

            <template v-slot:before>
              <q-tabs
                v-model="innerTab"
                vertical
                class="text-teal"
              >
                <q-tab name="innerSimple" icon="mail" label="Mails" />
                <q-tab name="innerRal" icon="alarm" label="Alarms" />
                <q-tab name="innerNCS" icon="movie" label="Movies" />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="innerTab"
                animated
                transition-prev="slide-down"
                transition-next="slide-up"
              >
                <q-tab-panel name="innerSimple">
                  <div class="text-h4 q-mb-md nunito-font text-italic">Материалы</div>
                  <p style="font-size: 0.9rem; font-weight: 400" class="fira-font text-grey-8">
                    Lorem ipsum dolor +7 (985) 270 63 23 sit, amet consectetur adipisicing elit. 1.5
                    1548,98 Quis praesentium cumque magnam 0123456789 odio iure quidem, quod illum numquam
                    possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>

                  <p style="font-size: 0.9rem; font-weight: 400" class="fira-font text-grey-8">
                    На 12:40 МСК главная криптовалюта торгуется на криптобирже Binance на уровне $54 тыс.
                    В воскресенье, 18 апреля, котировки биткоина опускались до трехнедельного минимума — $50,9 тыс.
                    Это произошло после того, как 13 апреля первая цифровая монета обновила исторический максимум на отметке $64,8 тыс.
                  </p>

                </q-tab-panel>

                <q-tab-panel name="innerRal">
                  <div class="text-h4 q-mb-md">Alarms</div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </q-tab-panel>

                <q-tab-panel name="innerNCS">
                  <div class="text-h4 q-mb-md">Movies</div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                </q-tab-panel>
              </q-tab-panels>
            </template>

          </q-splitter>
        </q-tab-panel>


      </q-tab-panels>
    </q-card>
  </div>

      <div class="q-pa-md">

        <div class='row justify-center'>
          <div class="col-10 q-pa-sm q-ma-sm nunito-font">
            <h5>{{ $tc('color', 1) }}</h5>
          </div>



          <div class="col-10 q-pa-sm q-ma-sm ">
            <div class='row justify-end items-center'>
            <div class="col-1 text-right q-px-xs">{{ toggleText() }}</div>
            <q-toggle
              v-model="grid"
              keep-color
              color="amber-3"
            />
            </div>
          </div>
        </div>

      <div class='row justify-center' v-if="grid">
        <div
          class="my-card col-md-3 q-pa-sm q-ma-sm col-xs-12 col-sm-4"
          v-for="color in colors"
          :key='color.id'
        >
          <q-card
            flat
            bordered
            class="q-pa-sm">

            <q-card-section class="q-py-none row justify-between items-center q-pr-xs">
              <div class="text-subtitle1 col-10 text-no-wrap">{{ color.name }}</div>
              <q-space></q-space>
              <div class="col-2">
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
            <q-separator />


            <q-card-section horizontal class="row justify-between items-center">
              <q-card-section  class="col-8 q-py-none">
                <div class="text-caption text-no-wrap">{{ color.color_type }}</div>
                <div class="text-caption text-grey-7 q-mt-sm text-no-wrap">RGB: {{ color.rgb_code }}</div>
                <div class="text-caption text-grey-7 text-no-wrap">Web: {{ color.hex_code }}</div>
              </q-card-section>
              <q-separator vertical inset />
              <q-card-section class="col-4 text-center">
                <q-avatar :style="{background: color.hex_code}" class="shadow-2" size="2rem"/>
              </q-card-section>
            </q-card-section>

          </q-card>

        </div>
      </div>

      <div class='row justify-center' v-else>

        <q-list
          padding
          style='min-width: 500px;'
          class="col-10 col-md-6">

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
        tab: 'simple',
        innerTab: 'innerRal',
        splitterModel: 20,
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
    },
    computed: {
      simpColors() : Color[] {
        let sColors = [] as Color[]
        this.colors.forEach(function (color, i, colors) {
          if (color.color_type == 'regular colors') {
            sColors.push(color)
          }
        })
        return sColors
      },
      ralColors() : Color[] {
        let rColors = [] as Color[]
        this.colors.forEach(function (color, i, colors) {
          if (color.color_type == 'ral') {
            rColors.push(color)
          }
        })
        return rColors
      },
      ncsColors() : Color[] {
        let nColors = [] as Color[]
        this.colors.forEach(function (color, i, colors) {
          if (color.color_type == 'ncs') {
            nColors.push(color)
          }
        })
        return nColors
      },
    }

  })
</script>


<style lang="sass" scoped>
  .my-card
    min-width: 230px
    height: 120px
    max-width: 250px

  .my-label
    ::v-deep .q-tab__label
      font-weight: 700!important


</style>
