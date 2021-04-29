// eslint-disable-next-line vue/no-v-model-argument
<template v-slot:right-drawer>
    <q-scroll-area class="fit">
        <div class="q-pa-md q-gutter-sm">
            <q-tree
                :nodes="links"
                node-key="id"
                default-expand-all
                color="amber"
                no-connectors
                v-model:selected="selected"
                @update:selected="selectedHandler"
                ref="qtree"
            />
        </div>
        <select v-model="$i18n.locale">
            <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
            >
                {{ locale }}
            </option>
        </select>
        <p>{{ $t('data_management') }}</p>
    </q-scroll-area>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { i18n } from 'boot/i18n'

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
    data: function () {
        return {
            selected: null as null | string,
            links: [
                {
                    label: this.$t('data_management'),
                    id: 1,
                    children: [
                        {
                            label: this.$t('users'),
                            id: 2,
                            icon: 'lar la-user',
                            iconColor: 'amber',
                            expandable: true,
                            children: [
                                {
                                    label: this.$t('orders'),
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
            ],
        }
    },
    methods: {
        selectedHandler(target: string) {
            if (target === null) return
            console.log('Target -', target)
            const myQtree = this.$refs.qtree as getFromQTree
            const node = myQtree.getNodeByKey(target)
            if (node.children.length > 0) {
                myQtree.setExpanded(target, !myQtree.isExpanded(target))
                this.selected = ''
            } else if (node.url) {
                this.$router
                    .push(node.url)
                    .finally(() => {
                        console.log(this.$router.currentRoute.value)
                        console.log(this.selected)
                        node.selectable = false
                        node.icon = 'arrow_right_alt'
                        node.iconColor = 'red'
                    })
                    .catch((error) => console.log(error))
            }
        },
    },
})
</script>

<style scoped lang="sass"></style>
