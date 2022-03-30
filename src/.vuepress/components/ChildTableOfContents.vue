<template>
  <ul class="root">
    <li v-for="item in items" :key="item.path">
      <router-link :to="item.path">{{ item.title || item.path }}</router-link>

      <ul v-if="header && itemHeaders(item.headers)">
        <li v-for="header in itemHeaders(item.headers)" :key="header.slug">
          <router-link :to="item.path + '#' + header.slug">
            {{ header.title }}
          </router-link>
        </li>
      </ul>

      <child-table-of-contents
        v-if="!isMax()"
        :page-url="item.regularPath"
        :header="header"
        :max="max"
        :level="nextLevel()"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ChildTableOfContents",

  props: {
    header: {
      type: Boolean,
      default: false,
    },

    pageUrl: {
      type: String,
      default: undefined,
    },

    max: {
      type: Number,
      default: undefined,
    },

    level: {
      type: Number,
      default: undefined,
    },
  },

  computed: {
    items() {
      const currentUrl = this.pageUrl || this.$page.regularPath;
      const items = this.itemChildren(currentUrl);
      return items;
    },
  },

  methods: {
    allChildren() {
      return this.$site.pages.sort((a, b) => {
        const aOrder = !!a.frontmatter?.order ? a.frontmatter.order : a.title;
        const bOrder = !!b.frontmatter?.order ? b.frontmatter.order : b.title;

        if (aOrder && bOrder) {
          return aOrder > bOrder ? 1 : -1;
        }

        return 0;
      });
    },

    itemChildren(currentUrl) {
      return this.allChildren().filter((p) => {
        if (
          !p.regularPath.startsWith(currentUrl) ||
          p.regularPath === currentUrl
        ) {
          return false;
        }

        const split = p.regularPath.substr(currentUrl.length).split("/");

        if (p.regularPath.endsWith("/") && split.length === 2) {
          return true;
        }

        if (p.regularPath.endsWith(".html") && split.length === 1) {
          return true;
        }

        return false;
      });
    },

    itemHeaders(headers) {
      return (headers || []).filter((r) => r.level === 2);
    },

    nextLevel() {
      if (this.max === undefined) {
        return undefined;
      }

      const number = this.level === undefined ? 1 : this.level;
      return number + 1;
    },

    isMax() {
      if (this.max === undefined) {
        return false;
      }

      if (this.max === 1 && this.level === undefined) {
        return true;
      }

      return this.max <= this.level;
    },
  },
};
</script>

<style scoped>
.root {
  columns: 1;
}

@media (min-width: 768px) {
  .root {
    columns: 2;
  }
}

@media (min-width: 1024px) {
  .root {
    columns: 3;
  }
}
</style>
