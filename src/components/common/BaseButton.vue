<template>
  <button
    :class="btnProps.class"
    :style="{
      width: btnProps.width,
      height: btnProps.height,
      backgroundColor: btnProps.bgColor,
      color: btnProps.color
    }"
    :type="btnProps.btnType"
    :disabled="btnProps.isDisabled"
  >
    <img v-if="btnProps.btnIcon" :src="btnProps.btnIcon" alt="btn icon" />
    {{ btnProps.title }}
  </button>
</template>

<script setup>
const btnProps = defineProps({
  title: { type: String, required: true },
  width: { type: String, required: true },
  height: { type: String, required: true },
  bgColor: { type: String, required: true },
  color: { type: String },
  class: { type: String },
  btnType: { type: String, default: "button" },
  btnIcon: { type: String },
  isDisabled: { type: Boolean, default: false }
})
</script>

<style scoped lang="scss">
button {
  @include button-base(
    $bg: $primary, 
    $color: $color-white, 
    $radius: $radius-md, 
    $height: 48px
  );

  @include text-style(
    $size: $font-size-md, 
    $weight: $font-weight-600, 
    $color: $color-white, 
    $family: $font-family-bold
  );

  gap: $gap-sm;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
  }
}
</style>
