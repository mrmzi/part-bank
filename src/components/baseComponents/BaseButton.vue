<template>
  <button
    :class="btnProps.class"
    :style="{
      width: btnProps.width,
      height: btnProps.height,
      backgroundColor: btnProps.bgColor,
      color: btnProps.color
    }"
    :type="btnProps.type"
    :disabled="btnProps.isDisabled"
  >
    {{ btnProps.title }}
  </button>
</template>

<script setup>
const btnProps = defineProps({
  title: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  class: {
    type: String,
  },
  btnType: {
    type: String,
  },
  btnIcon: {
    type: String,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
button {
  @include text-style($size: $font-size-md, $color: $color-white , $family: $font-family-bold);
  border-radius: $radius-md;
  border: $border-none;
  cursor: pointer;
  @include flex-center();

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
