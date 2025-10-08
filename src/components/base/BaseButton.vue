<script setup>
const btnProps = defineProps({
  title: { type: String, required: true },
  width: { type: String, required: true },
  height: { type: String, required: true },
  bgColor: { type: String, required: true },
  color: { type: String },
  class: { type: String },
  btnType: { type: String, default: 'button' },
  btnIcon: { type: String },
  isDisabled: { type: Boolean, default: false },
})
</script>

<template>
  <button
    :class="btnProps.class"
    :style="{
      width: btnProps.width,
      height: btnProps.height,
      backgroundColor: btnProps.bgColor,
      color: btnProps.color,
    }"
    :type="btnProps.btnType"
    :disabled="btnProps.isDisabled"
  >
    <img v-if="btnProps.btnIcon" :src="btnProps.btnIcon" alt="btn icon" />
    {{ btnProps.title }}
  </button>
</template>

<style scoped lang="scss">
button {
  background-color: $primary;
  height: 48px;
  border-radius: $radius-md;
  border: 0px;
  width: 100%;
  gap: $gap-sm;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  z-index: 1;
  transition: all ease-in-out 0.3s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0px;
    width: 0%;
    height: 100%;
    z-index: -1;
    background-color: $primary;
    transition: all ease-in-out 0.3s;
  }

  &::before {
    right: 0%;
    border-top-right-radius: $radius-md;
    border-bottom-right-radius: $radius-md;
  }

  &::after {
    left: 0%;
    border-top-left-radius: $radius-md;
    border-bottom-left-radius: $radius-md;
  }

  &:hover {
    box-shadow: 0px 4px 10px -2px #2e2e2e34;
    background-color: transparent !important;
    color: $text-primary;
    border: 0.5px solid $primary;
  }

  &:hover::after,
  &:hover::before {
    width: 100%;
    background-color: transparent;
  }

  @include text-style(
    $size: $font-size-md,
    $weight: $font-weight-600,
    $color: $color-white,
    $family: $font-family-bold
  );

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  img {
    width: 18px;
    height: 18px;
  }
}
</style>
