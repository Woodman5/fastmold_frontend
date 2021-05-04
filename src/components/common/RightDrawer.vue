<template v-slot:right-drawer>
    <q-scroll-area class="fit">
        <div class="q-pa-md q-gutter-sm nunito-font">
            <p class="text-center text-bold text-subtitle1">
                {{ t('data_management') }}
            </p>
            <q-tree
                :nodes="nodes"
                node-key="id"
                default-expand-all
                color="amber"
                no-connectors
                v-model:selected="selected"
                @update:selected="selectedHandler"
                ref="qtree"
            />
        </div>
    </q-scroll-area>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import menuAdmin from 'src/assets/menuAdmin'
import { useRouter } from 'vue-router'

interface Node {
    children: string[]
    label?: string
    url?: string
    disabled?: boolean
    selectable?: boolean
    icon?: string
    iconColor?: string
    id: number
}

interface mainNode {
    children: Node[]
    expandable?: boolean
    selectable?: boolean
    label?: string
    url?: string
    icon?: string
    iconColor?: string
    id: number
}

interface getFromQTree {
    getNodeByKey: (key: string | number) => Node | mainNode
    getTickedNodes: () => string[]
    getExpandedNodes: () => string[]
    isExpanded: (key: string | number) => boolean
    expandAll: () => void
    collapseAll: () => void
    setExpanded: (key: string | number, state: boolean) => void
    isTicked: (key: string | number) => boolean
    setTicked: (keys: string[] | number[], state: boolean) => void
}

export default defineComponent({
    name: 'RightDrawer',
    setup() {
        const selected = ref('')
        let prevSelected = ref(0)
        const { t, locale } = useI18n()
        const qtree = ref(null)
        const router = useRouter()

        const nodes = computed(() => {
            let link = router.currentRoute.value.path
            let nodesArray = menuAdmin()
            nodesArray.forEach((item) => {
                item.label = t(item.label)
                item.children.forEach((child) => {
                    child.label = t(child.label)
                    if (child.url == link) {
                        child.iconColor = 'red'
                        child.selectable = false
                    }
                })
            })
            return nodesArray
        })

        const selectedHandler = (target: string | number | null) => {
            console.log('target-', target)
            if (target === null) return
            const myQtree = (qtree.value as unknown) as getFromQTree
            const node = myQtree.getNodeByKey(target)

            console.log('prevSelected -', prevSelected.value)
            let prevNode
            if (prevSelected) {
                prevNode = myQtree.getNodeByKey(prevSelected.value)
            } else {
                prevNode = null
            }

            if (node.children.length > 0) {
                myQtree.setExpanded(target, !myQtree.isExpanded(target))
                selected.value = ''
            } else if (node.url) {
                if (prevNode) {
                    prevNode.selectable = true
                    prevNode.iconColor = 'amber-2'
                }
                node.selectable = false
                node.iconColor = 'red'
                prevSelected.value = node.id
                router.push(node.url).catch((error) => console.log(error))
            }
        }

        return {
            selected,
            prevSelected,
            t,
            locale,
            nodes,
            selectedHandler,
            qtree,
        }
    },
})
</script>

<style scoped lang="sass"></style>
