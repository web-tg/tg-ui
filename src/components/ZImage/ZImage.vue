<template>
  <img
    :style="styleProps"
    class="z-image-component"
    @click.prevent="handleClick"
    :src="src"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useComponentCommon from "../../hooks/useComponentCommon";
import {
  transformToComponentProps,
  imageDefaultProps,
  imageStylePropsNames,
} from "../../defaultProps";
const defaultProps = transformToComponentProps(imageDefaultProps);

// array that contains style props
export default defineComponent({
  name: "z-image",
  props: {
    ...defaultProps,
  },
  setup(props) {
    // 重用并且简化
    // 抽离并且获得 styleProps
    const { styleProps, handleClick } = useComponentCommon(
      props,
      imageStylePropsNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>

<style scoped>
.z-image-component {
  max-width: 100%;
  position: relative !important;
}
</style>
