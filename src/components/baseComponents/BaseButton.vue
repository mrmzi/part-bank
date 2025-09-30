<template>
  <button
    :class="btnProps.class"
    :style="{
      width: btnProps.width,
      height: btnProps.height,
      backgroundColor: btnProps.color,
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
  color: {
    type: String,
    required: true,
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
  font-family: $font-family-bold;
  font-size: $font-size-md;
  border-radius: $radius-md;
  border: $border-none;
  color: $color-white;
  cursor: pointer;
  @include flex-center();

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
