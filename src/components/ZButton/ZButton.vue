<template>
  <button class="z-btn">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "z-button",
});
</script>
