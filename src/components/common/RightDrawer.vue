<template v-slot:right-drawer>

    <q-scroll-area class="fit">
      <div class="q-pa-md q-gutter-sm">
        <q-tree
          :nodes="links"
          node-key="label"
          default-expand-all
          color="amber"
          no-connectors
          :selected.sync="selected"
          @update:selected="selectedHandler"
          ref="qtree"
        />
      </div>
    </q-scroll-area>

</template>

<script lang="ts">
  export default {
    name: 'RightDrawer',
    data: function () {
      return {
        selected: null,
        links: [
          {
            label: 'Администрирование данных',
            children: [
              {
                label: 'Пользователи',
                icon: 'lar la-user',
                iconColor: 'amber',
                expandable: true,
                children: [
                  {
                    label: 'Quality ingredients',
                    url: '/test',
                    handler: (node) => this.loadPage(node),
                    children: []
                  },
                  { label: 'Good recipe',
                    children: []
                  }
                ]
              },
              {
                label: 'Материалы',
                icon: 'las la-shapes',
                iconColor: 'amber',
                children: [
                  { label: 'Prompt',
                    children: [] },
                  { label: 'Professional',
                    children: [] }
                ]
              },
              {
                label: 'Технологии',
                icon: 'las la-industry',
                iconColor: 'amber',
                children: [
                  { label: 'Attention',
                    children: [] },
                  { label: 'Waiter',
                    children: [] }
                ]
              },
            ]
          }
        ],
      }
    },
    methods: {
      loadPage (node) {
        console.log(node.url)
      },
      selectedHandler(target) {
        if(target === null) return
        console.log(this.selected)
        const node = this.$refs.qtree.getNodeByKey(target)
        if(node.children.length > 0) {
          this.$refs.qtree.setExpanded(target, !this.$refs.qtree.isExpanded(target))
          this.selected = ''
        }
      }
    },

  }
</script>

<style scoped>

</style>
