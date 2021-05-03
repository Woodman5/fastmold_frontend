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
import { defineComponent, ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import menuAdmin from 'src/assets/menuAdmin'
import { useRouter } from 'vue-router'

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
    getNodeByKey: (key: string | number) => Node<string>
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
        const { t, locale } = useI18n()
        const qtree = ref(null)
        const router = useRouter()

        const nodes = computed(() => {
            let nodesArray = menuAdmin()
            nodesArray.forEach((item) => {
                item.label = t(item.label)
                item.children.forEach((child) => {
                    child.label = t(child.label)
                })
            })
            return nodesArray
        })

        // watch(selected, (selected, prevSelected) => {
        //     console.log(selected, ' - ', prevSelected)
        // })

        const selectedHandler = (target: string | number | null) => {
            console.log('target-', target)
            if (target === null) return
            const myQtree = (qtree.value as unknown) as getFromQTree
            console.log('myQtree-', myQtree)
            const node = myQtree.getNodeByKey(target)
            if (node.children.length > 0) {
                myQtree.setExpanded(target, !myQtree.isExpanded(target))
                selected.value = ''
            } else if (node.url) {
                router
                    .push(node.url)
                    .finally(() => {
                        console.log(router.currentRoute.value)
                        console.log(selected.value)
                        node.selectable = false
                        node.icon = 'arrow_right_alt'
                        node.iconColor = 'red'
                    })
                    .catch((error) => console.log(error))
            }
        }

        return {
            selected,
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
