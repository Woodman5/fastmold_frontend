<template>
    <q-select
        v-model="lang"
        :options="langOptions"
        label="Quasar Language"
        dense
        borderless
        emit-value
        map-options
        options-dense
        style="min-width: 150px"
    />
</template>

<script>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { i18n } from 'src/boot/i18n'

export default {
    setup() {
        const { locale } = useI18n({ useScope: 'global' })
        const lang = ref(locale)

        watch(lang, (val) => {
            locale.value = val
            // console.log(i18n.global.availableLocales)
            // console.log(i18n.global.messages)
        })

        return {
            lang,
            langOptions: [
                { value: 'en-US', label: 'En', name: 'English' },
                { value: 'ru-RU', label: 'Ru', name: 'Русский' },
            ],
        }
    },
}
</script>
