// eslint-disable-next-line vue/no-v-model-argument
<template v-slot:right-drawer>
  <q-scroll-area class="fit">
    <div class="q-pa-md q-gutter-sm">
      <q-tree
        :nodes="links"
        node-key="label"
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
import { defineComponent } from "vue";

interface Node<Type> {
  children: Type[];
  label?: string;
  url?: string;
  disabled?: boolean;
}

interface getFromQTree {
  getNodeByKey: (key: string) => Node<string>;
  getTickedNodes: () => string[];
  getExpandedNodes: () => string[];
  isExpanded: (key: string) => boolean;
  expandAll: () => void;
  collapseAll: () => void;
  setExpanded: (key: string, state: boolean) => void;
  isTicked: (key: string) => boolean;
  setTicked: (keys: string[], state: boolean) => void;
}

export default defineComponent({
  name: "RightDrawer",
  data: function () {
    return {
      selected: null as null | string,
      links: [
        {
          label: "Администрирование данных",
          children: [
            {
              label: "Пользователи",
              icon: "lar la-user",
              iconColor: "amber",
              expandable: true,
              children: [
                {
                  label: this.$t("orders"),
                  url: "/orders",
                  children: [],
                },
                { label: "Good recipe", children: [] },
              ],
            },
            {
              label: "Материалы",
              icon: "las la-shapes",
              iconColor: "amber",
              children: [
                { label: "Prompt", children: [] },
                { label: "Professional", children: [] },
              ],
            },
            {
              label: "Технологии",
              icon: "las la-industry",
              iconColor: "amber",
              children: [
                { label: "Attention", children: [] },
                { label: "Waiter", children: [] },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectedHandler(target: string) {
      if (target === null) return;
      const myQtree = this.$refs.qtree as getFromQTree;
      const node = myQtree.getNodeByKey(target);
      if (node.children.length > 0) {
        myQtree.setExpanded(target, !myQtree.isExpanded(target));
        this.selected = "";
      } else if (node.url) {
        this.$router
          .push(node.url)
          .finally(() => {
            console.log(this.$router.currentRoute.value);
            node.disabled = true;
          })
          .catch((error) => console.log(error));
      }
    },
  },
});
</script>

<style scoped lang="sass">

div.q-tree__node--disabled
  >>> div.q-tree__node-header-content
    >>> div
      font-family: nunito-font
      color: #ffc107 !important
</style>
