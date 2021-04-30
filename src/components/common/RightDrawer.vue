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
        <langSwitcher></langSwitcher>
    </q-scroll-area>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import langSwitcher from 'components/common/langSwitcher.vue'

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
    props: {
        nodes: Array,
    },
    setup(props) {
        const selected = ''
        return {
            links: props.nodes,
            selected,
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
