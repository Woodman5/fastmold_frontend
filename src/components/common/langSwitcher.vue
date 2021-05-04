<template>
    <q-btn-dropdown
        class="gt-sm nunito-font"
        flat
        icon="las la-language"
        :label="langLabel"
    >
        <q-list class="nunito-font">
            <q-item
                clickable
                @click="lang = item.value"
                v-close-popup
                v-for="item in langOptions"
                :key="item.value"
                :class="{
                    'q-item--active': lang.valueOf() === item.value,
                }"
            >
                <q-item-section>
                    <q-item-label>{{ item.name }}</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
    </q-btn-dropdown>
</template>

<script lang="ts">
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
    setup() {
        const { locale } = useI18n({ useScope: 'global' })
        const lang = ref(locale)
        const langOptions = [
            { value: 'en-US', label: 'En', name: 'English' },
            { value: 'ru-RU', label: 'Ru', name: 'Русский' },
        ]

        watch(lang, (val) => {
            locale.value = val
        })

        const langLabel = computed(() => {
            let a = langOptions.find((item) => item.value === lang.value)
            if (a) {
                return a.label
            }
            return ''
        })

        return {
            lang,
            langOptions,
            langLabel,
        }
    },
}
</script>
