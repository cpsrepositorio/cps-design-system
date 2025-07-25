<template>
  <section class="showcase">
    <div v-for="icon in icons" :key="icon" class="square">
      <div class="item" :title="cleanName(icon)">
        <img
          loading="lazy"
          :src="$withBase(`/icons/${version}/${icon}.svg?20250725`)"
          :alt="`Icon: ${icon}`"
          class="no-zoom"
        />
        <p>{{ cleanName(icon) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import iconsShowcaseFilled from "./IconsShowcaseFilled.json";
import iconsShowcaseRegular from "./IconsShowcaseRegular.json";

const props = defineProps({
  version: {
    type: String,
    default: "regular",
    validator: (value) => ["regular", "filled"].includes(value),
  },
});

const regularIcons = iconsShowcaseRegular;
const filledIcons = iconsShowcaseFilled;

const icons = computed(() => {
  return props.version === "filled" ? filledIcons : regularIcons;
});

function cleanName(icon) {
  return icon
    .toString()
    .replace("_regular", "")
    .replace("_filled", "")
    .replace("ic_fluent_", "")
    .replace("_24", "")
    .replace("_20", "")
    .replace("_16", "");
}
</script>

<style scoped lang="scss">
.showcase {
  border-radius: 4px;
  box-sizing: border-box;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  height: 776px;
  margin-bottom: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
}

.square {
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text);
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
}

.item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  grid-auto-flow: row;
  grid-template-rows: 1fr 1rem;

  img {
    width: 32px;
    height: 32px;
  }

  p {
    box-sizing: border-box;
    width: 100%;
    background: var(--vp-c-border);
    font-size: 0.625rem;
    text-align: center;
    margin: 0;
    padding: 0 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 0 0 4px 4px;
  }
}

[data-theme="dark"] {
  .item img {
    filter: invert(1);
  }
}
</style>
