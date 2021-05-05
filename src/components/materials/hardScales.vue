<template>
    <q-page padding>
        <div class="row justify-center">
            <div class="col-12 q-pa-sm nunito-font" style="width: 800px">
                <h5 class="q-my-md">{{ t('hdsc', 1) }}</h5>
            </div>

            <div class="q-pa-md col-8">
                <q-list bordered separator>
                    <q-item clickable v-ripple v-for="item in hds">
                        <q-item-section>
                            <q-item-label>{{ item.name }}</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <q-item-label
                                >Допустимые значения: {{ item.hs_min }} -
                                {{ item.hs_max }}</q-item-label
                            >
                            <q-item-label
                                >Единицы измерения:
                                {{ item.hs_units }}</q-item-label
                            >
                        </q-item-section>
                        <q-item-section side>
                            <q-item-label>***</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { HardScale } from 'src/store/types'
import { useI18n } from 'vue-i18n'
import { useStore } from 'src/store'
export default defineComponent({
    name: 'hardScales',
    setup() {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const { t, locale } = useI18n()
        const store = useStore()

        const hardScales = computed(() => store.state.hardScales)
        const hds = hardScales.value

        return {
            t,
            hds,
        }
    },
})
</script>

<style scoped></style>
