<template lang="">
    <div class="nunito-font text-center q-my-xl"> <p>Это страница <b>"{{
        currentLink
    }}"</b></p> <p>И тут пока ничего нет.</p> </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent, computed } from 'vue'

export default defineComponent({
    setup() {
        const router = useRouter()

        const currentLink = computed(() => {
            return router.currentRoute.value.fullPath
        })

        return {
            currentLink,
        }
    },
})
</script>
<style lang="sass"></style>
