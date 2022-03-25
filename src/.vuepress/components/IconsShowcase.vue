<template>
  <section class="showcase">
    <div v-for="icon of icons" :key="icon" class="square">
      <div class="item" :title="cleanName(icon)">
        <img
          loading="lazy"
          :src="$withBase(`/icons/${version}/${icon}.svg?20220323`)"
          :alt="`Icon: ${icon}`"
          class="no-zoom"
        />
        <p>{{ cleanName(icon) }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import iconsShowcaseRegular from "./IconsShowcaseRegular.json"
import iconsShowcaseFilled from "./IconsShowcaseFilled.json"

export default {
  name: "IconsShowcase",

  props: {
    version: {
      type: String,
      validate: (value) => ["regular", "filled"].includes(value),
      default: "regular",
    },
  },

  data: () => ({
    regularIcons: iconsShowcaseRegular,
    filledIcons: iconsShowcaseFilled,
  }),

  computed: {
    icons() {
      return this[`${this.version}Icons`]
    }
  },

  methods: {
    cleanName(icon) {
      return icon
        .toString()
        .replace("_regular", "")
        .replace("_filled", "")
        .replace("ic_fluent_", "");
    },
  },
};
</script>

<style scoped lang="stylus">
.showcase
  box-sizing: border-box
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr))
  grid-auto-rows: 7rem
  gap: 1.25rem
  height: 776px
  margin-bottom: 1.5rem
  padding-right: 8px
  overflow-y: auto
  overflow-x: hidden

.square
  width: 100%
  height: 0
  padding-top: 100%
  position: relative
  background: #f9f9f9
  color: #000000f2
  border: 1px solid rgba(0, 0, 0, 0.0578)
  border-radius: 4px

.item
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  display: grid
  place-items: center
  grid-auto-flow: row
  grid-template-rows: 1fr 1rem

  p
    box-sizing: border-box
    width: 100%
    background: #eee
    font-size: 0.625rem
    text-align: center
    margin: 0
    padding: 0 0.5rem
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    border-radius: 0 0 4px 4px
    border-bottom: 1px solid rgba(0, 0, 0, 0.0578)
</style>
