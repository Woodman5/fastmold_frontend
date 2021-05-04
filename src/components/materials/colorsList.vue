<template>
    <q-page padding>
        <div class="row justify-center">
            <div class="col-12 q-pa-sm nunito-font" style="width: 800px">
                <h5 class="q-my-md">{{ t('color', 1) }}</h5>
            </div>

            <div
                class="q-pa-md col-8"
                style="max-width: 900px; min-width: 800px"
            >
                <q-card flat>
                    <q-tabs
                        v-model="tab"
                        class="text-grey-8 nunito-font"
                        active-color="primary"
                        indicator-color="orange"
                        align="justify"
                    >
                        <q-tab
                            name="simple"
                            :label="t('simpleColors')"
                            class="my-label"
                        />
                        <q-tab name="ral" label="RAL" class="my-label" />
                        <!--            <q-tab name="ncs" label="NCS" class="my-label"/>-->
                    </q-tabs>

                    <q-separator />

                    <q-tab-panels v-model="tab" animated style="height: 500px">
                        <q-tab-panel name="simple" class="q-pa-sm">
                            <q-scroll-area
                                :thumb-style="thumbStyle"
                                :bar-style="barStyle"
                                class="q-py-sm q-px-md"
                                style="height: 100%"
                            >
                                <div class="row justify-between">
                                    <div
                                        class="col-2 text-center q-mb-sm"
                                        v-for="color in simpColors"
                                        :key="color.id"
                                    >
                                        <q-card class="tab-card" flat>
                                            <q-card-section>
                                                <q-avatar
                                                    :style="{
                                                        background:
                                                            color.hex_code,
                                                    }"
                                                    class="shadow-2"
                                                    size="3rem"
                                                />
                                            </q-card-section>

                                            <q-card-section
                                                class="col-8 q-py-none row"
                                            >
                                                <div
                                                    class="nunito-font text-center text-grey-9 col-12"
                                                    style="min-height: 30px"
                                                >
                                                    {{ color.name }}
                                                </div>
                                                <div
                                                    class="my-tab-caption text-grey-6 q-mt-xs text-no-wrap col-12"
                                                >
                                                    RGB: {{ color.rgb_code }}
                                                </div>
                                                <div
                                                    class="my-tab-caption text-grey-6 text-no-wrap col-12"
                                                >
                                                    Web: {{ color.hex_code }}
                                                </div>
                                            </q-card-section>
                                        </q-card>
                                    </div>
                                </div>
                            </q-scroll-area>
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
                                        class="nunito-font my-label-6"
                                    >
                                        <q-tab
                                            name="1000"
                                            label="1000...1037"
                                            class="text-yellow-8"
                                        />
                                        <q-tab
                                            name="2000"
                                            label="2000...2013"
                                            class="text-orange-8"
                                        />
                                        <q-tab
                                            name="3000"
                                            label="3000...3033"
                                            class="text-red-8"
                                        />
                                        <q-tab
                                            name="4000"
                                            label="4000...4012"
                                            class="text-deep-purple-8"
                                        />
                                        <q-tab
                                            name="5000"
                                            label="5000...5026"
                                            class="text-blue-8"
                                        />
                                        <q-tab
                                            name="6000"
                                            label="6000...6038"
                                            class="text-green-8"
                                        />
                                        <q-tab
                                            name="7000"
                                            label="7000...7048"
                                            class="text-blue-grey-8"
                                        />
                                        <q-tab
                                            name="8000"
                                            label="8000...8029"
                                            class="text-brown-8"
                                        />
                                        <q-tab
                                            name="9000"
                                            label="9000...9023"
                                            class="text-grey-8"
                                        />
                                    </q-tabs>
                                </template>

                                <template v-slot:after>
                                    <q-scroll-area
                                        :thumb-style="thumbStyle"
                                        :bar-style="barStyle"
                                        class="q-py-sm q-px-md"
                                        style="height: 100%"
                                    >
                                        <q-tab-panels
                                            v-model="innerTab"
                                            animated
                                            transition-prev="slide-down"
                                            transition-next="slide-up"
                                            style="height: 100%"
                                        >
                                            <q-tab-panel
                                                :name="name[1]"
                                                v-for="name in ralNames"
                                                :key="name[0]"
                                            >
                                                <div class="row justify-start">
                                                    <div
                                                        class="col-3 text-center q-mb-sm"
                                                        v-for="color in ralColors[
                                                            name[0]
                                                        ]"
                                                        :key="color.id"
                                                    >
                                                        <q-card
                                                            class="tab-card"
                                                            flat
                                                        >
                                                            <q-card-section>
                                                                <q-avatar
                                                                    :style="{
                                                                        background:
                                                                            color.hex_code,
                                                                    }"
                                                                    class="shadow-2"
                                                                    size="3rem"
                                                                />
                                                                <q-tooltip
                                                                    anchor="top middle"
                                                                    self="bottom middle"
                                                                    :offset="[
                                                                        0,
                                                                        -12,
                                                                    ]"
                                                                >
                                                                    {{
                                                                        color.description
                                                                    }}
                                                                </q-tooltip>
                                                            </q-card-section>

                                                            <q-card-section
                                                                class="col-8 q-py-none row"
                                                            >
                                                                <div
                                                                    class="nunito-font text-center text-grey-9 col-12"
                                                                    style="
                                                                        min-height: 30px;
                                                                    "
                                                                >
                                                                    {{
                                                                        color.name
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="my-tab-caption text-grey-6 q-mt-xs text-no-wrap col-12"
                                                                >
                                                                    RGB:
                                                                    {{
                                                                        color.rgb_code
                                                                    }}
                                                                </div>
                                                                <div
                                                                    class="my-tab-caption text-grey-6 text-no-wrap col-12"
                                                                >
                                                                    Web:
                                                                    {{
                                                                        color.hex_code
                                                                    }}
                                                                </div>
                                                            </q-card-section>
                                                        </q-card>
                                                    </div>
                                                </div>
                                            </q-tab-panel>
                                        </q-tab-panels>
                                    </q-scroll-area>
                                </template>
                            </q-splitter>
                        </q-tab-panel>
                    </q-tab-panels>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Color } from 'src/store/types'
import { useI18n } from 'vue-i18n'
import { useStore } from 'src/store'

export default defineComponent({
    name: 'ColorsList',
    setup() {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const { t, locale } = useI18n()
        const store = useStore()
        const grid = ref(true)
        const tab = ref('ral')
        const innerTab = ref('1000')
        const innerTab2 = ref('N')
        const splitterModel = ref(20)
        const ralNames = [
            [0, '1000'],
            [1, '2000'],
            [2, '3000'],
            [3, '4000'],
            [4, '5000'],
            [5, '6000'],
            [6, '7000'],
            [7, '8000'],
            [8, '9000'],
        ]
        const thumbStyle = {
            right: '0px',
            borderRadius: '4px',
            backgroundColor: '#a0a0a5',
            width: '4px',
            opacity: 0.75,
        }
        const barStyle = {
            right: '0px',
            borderRadius: '4px',
            backgroundColor: '#a0a0a5',
            width: '4px',
            opacity: 0.2,
        }

        const colors = computed(() => store.state.colors)

        const simpColors = computed(() => {
            let sColors = [] as Color[]
            if (colors.value) {
                colors.value.forEach(function (color) {
                    if (color.color_type == 'regular colors') {
                        sColors.push(color)
                    }
                })
            }
            return sColors
        })

        const ralColors = computed(() => {
            let rColors = [[], [], [], [], [], [], [], [], []] as Array<Color>[]
            if (colors.value) {
                colors.value.forEach(function (color) {
                    if (color.color_type == 'ral') {
                        switch (color.name[0]) {
                            case '1':
                                rColors[0].push(color)
                                break
                            case '2':
                                rColors[1].push(color)
                                break
                            case '3':
                                rColors[2].push(color)
                                break
                            case '4':
                                rColors[3].push(color)
                                break
                            case '5':
                                rColors[4].push(color)
                                break
                            case '6':
                                rColors[5].push(color)
                                break
                            case '7':
                                rColors[6].push(color)
                                break
                            case '8':
                                rColors[7].push(color)
                                break
                            case '9':
                                rColors[8].push(color)
                        }
                    }
                })
            }
            return rColors
        })

        const ncsColors = computed(() => {
            let nColors = [] as Color[]
            if (colors.value) {
                colors.value.forEach(function (color) {
                    if (color.color_type == 'ncs') {
                        nColors.push(color)
                    }
                })
            }
            return nColors
        })

        const toggleText = () => {
            return grid ? t('grid') : t('list')
        }

        return {
            store,
            t,
            locale,
            grid,
            tab,
            innerTab,
            innerTab2,
            splitterModel,
            colors,
            ralNames,
            simpColors,
            ralColors,
            ncsColors,
            toggleText,
            thumbStyle,
            barStyle,
        }
    },
})
</script>

<style lang="sass" scoped>
.my-card
  min-width: 230px
  height: 120px
  max-width: 250px

.my-label
  :deep(.q-tab__label)
    font-weight: 700 !important

.my-label-6
  :deep(.q-tab__label)
    font-weight: 600 !important

.tab-card
  width: 120px
  min-width: 120px
  height: 150px
  line-height: 1
  //background: Tan

.my-tab-caption
  font-family: 'Fira Sans', sans-serif
  font-size: 0.7rem
  font-weight: 400
  line-height: 1rem
  letter-spacing: 0.03333em
</style>
