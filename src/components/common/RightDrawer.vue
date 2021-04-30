// eslint-disable-next-line vue/no-v-model-argument
<template v-slot:right-drawer>
    <q-scroll-area class="fit">
        <div class="q-pa-md q-gutter-sm">
            <q-tree
                :nodes="nodes"
                node-key="id"
                default-expand-all
                color="amber"
                no-connectors
                v-model:selected="selected"
                ref="qtree"
            />
        </div>
        <langSwitcher></langSwitcher>
    </q-scroll-area>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import langSwitcher from 'components/common/langSwitcher.vue'

//@update:selected="selectedHandler"

interface Node<Type> {
    children: Type[]
    label?: string
    url?: string
    disabled?: boolean
    selectable?: boolean
    icon?: string
    iconColor?: string
}

interface getFromQTree {
    getNodeByKey: (key: string) => Node<string>
    getTickedNodes: () => string[]
    getExpandedNodes: () => string[]
    isExpanded: (key: string) => boolean
    expandAll: () => void
    collapseAll: () => void
    setExpanded: (key: string, state: boolean) => void
    isTicked: (key: string) => boolean
    setTicked: (keys: string[], state: boolean) => void
}

export default defineComponent({
    name: 'RightDrawer',
    components: { langSwitcher },
    setup() {
        const selected = ref('')
        const { t, locale } = useI18n()

        const nodes = computed(() => {
            return [
                {
                    label: t('data_management'),
                    id: 1,
                    children: [
                        {
                            label: t('users'),
                            id: 2,
                            icon: 'lar la-user',
                            iconColor: 'amber',
                            expandable: true,
                            children: [
                                {
                                    label: t('orders'),
                                    id: 3,
                                    url: '/orders',
                                    children: [],
                                    icon: 'arrow_forward',
                                    iconColor: 'amber-2',
                                },
                                {
                                    label: 'Good recipe',
                                    id: 4,
                                    children: [],
                                    icon: 'arrow_right_alt',
                                    iconColor: 'amber-2',
                                },
                            ],
                        },
                        {
                            label: 'Материалы',
                            id: 5,
                            icon: 'las la-shapes',
                            iconColor: 'amber',
                            children: [
                                { label: 'Prompt', children: [], id: 6 },
                                { label: 'Professional', children: [], id: 7 },
                            ],
                        },
                        {
                            label: 'Технологии',
                            id: 8,
                            icon: 'las la-industry',
                            iconColor: 'amber',
                            children: [
                                { label: 'Attention', children: [], id: 9 },
                                { label: 'Waiter', children: [], id: 10 },
                            ],
                        },
                    ],
                },
            ]
        })

        // const selectedHandler(target: string) {
        //     if (target === null) return
        //     console.log('Target -', target)
        //     const myQtree = $refs.qtree as getFromQTree
        //     const node = myQtree.getNodeByKey(target)
        //     if (node.children.length > 0) {
        //         myQtree.setExpanded(target, !myQtree.isExpanded(target))
        //         this.selected = ''
        //     } else if (node.url) {
        //         this.$router
        //             .push(node.url)
        //             .finally(() => {
        //                 console.log(this.$router.currentRoute.value)
        //                 console.log(this.selected)
        //                 node.selectable = false
        //                 node.icon = 'arrow_right_alt'
        //                 node.iconColor = 'red'
        //             })
        //             .catch((error) => console.log(error))
        //     }
        // }

        return {
            selected,
            t,
            locale,
            nodes,
        }
    },
})
</script>

<style scoped lang="sass"></style>
