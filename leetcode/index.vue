<template>
  <el-button @click="$emit('click')" v-debounce v-bind="$attrs"></el-button>
</template>

<script>
export default defineComponent({
  inheritAttrs: false,
});
</script>
