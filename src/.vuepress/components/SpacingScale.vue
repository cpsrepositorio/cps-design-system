<template>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Tamanho</th>
        <th>Pixels</th>
        <th>Exemplo</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ name, size, pixels } of scale" :key="name">
        <td>
          <b>{{ name }}</b>
        </td>
        <td>
          <code>{{ size }}</code>
        </td>
        <td>
          <code>{{ pixels }}px</code>
        </td>
        <td>
          <div
            :style="{ width: size, height: '1rem', background: '#005c6e' }"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SpacingScale",

  computed: {
    scale() {
      const spacing = {
        px: "1px",
        0: "0px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        4.5: "1.125rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      };

      return Object.keys(spacing)
        .map((name) => ({
          name,
          size: spacing[name],
          pixels:
            parseFloat(spacing[name]) *
            (String(spacing[name]).endsWith("rem") ? 16 : 1),
        }))
        .sort((a, b) => a.pixels - b.pixels);
    },
  },
};
</script>
