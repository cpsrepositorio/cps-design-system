<template>
  <div class="custom-block tip">
    <p class="custom-block-title">Procurando um componente pronto para uso?</p>
    <p>
      Veja o <a :href="url" target="_blank" rel="noopener noreferrer" style="margin-right: 0.25rem">
        {{ component }}<span>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
          <span class="sr-only">(opens new window)</span>
        </span>
      </a>
      do CPS Elements, um componente fácil de usar, seja nativamente em navegadores <em>web</em> modernos ou com os <em>frameworks</em> de sua preferência, e totalmente aderente ao CPS Design System.
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  name: "LinkToCpsElements",

  props: {
    name: {
      type: String,
    },

    utility: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    component() {
      const name = this.name?.toLowerCase?.()
        .replace?.(/^./, char => char.toUpperCase())
        .replace?.(/-./, chars => chars[1].toUpperCase());
      return `Cps${name}`;
    },

    url() {
      const base = 'https://cpsrepositorio.github.io/cps-elements';
      const folder = this.utility ? 'utilitários': 'componentes';
      return `${base}/#/${folder}/${this.name?.toLowerCase()}`;
    },
  },
};
</script>
