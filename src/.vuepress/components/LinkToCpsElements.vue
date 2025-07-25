<template>
  <div class="hint-container tip">
    <p class="hint-container-title">
      Procurando um componente pronto para uso?
    </p>
    <p>
      Veja o
      <strong>
        <a :href="url" target="_blank" rel="noopener noreferrer">{{
          component
        }}</a>
      </strong>
      do <strong>CPS Elements</strong>, um componente <em>web</em> fácil de
      usar, seja nativamente ou com os <em>frameworks</em> de sua preferência, e
      totalmente aderente ao CPS Design System.
    </p>
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: String,
  utility: {
    type: Boolean,
    default: false,
  },
});

const component = computed(() => {
  if (!props.name) return "";
  let name = props.name.toLowerCase();
  name = name.replace(/^./, (char) => char.toUpperCase());
  name = name.replace(/-./g, (chars) => chars[1].toUpperCase());
  return `Cps${name}`;
});

const url = computed(() => {
  const base = "https://cpsrepositorio.github.io/cps-elements";
  const folder = props.utility ? "utilitários" : "componentes";
  return `${base}/#/${folder}/${props.name?.toLowerCase()}`;
});
</script>
