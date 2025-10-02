<template>
  <input
    :class="[inputProps.inputClass, inputProps.hasBorder ? 'inputBorder' : '']"
    :id="inputProps.inputId"
    :style="{
      width: inputProps.inputWidth,
      height: inputProps.inputHeight,
    }"
    :type="inputProps.inputType"
    :placeholder="inputProps.placeholder"
  />
</template>

<script setup>
const inputProps = defineProps({
  inputId: { type: String },
  inputClass: { type: String },
  hasBorder: { type: Boolean },
  inputWidth: { type: String, required: true },
  inputHeight: { type: String, required: true },
  placeholder: { type: String },
  inputType: { type: String, required: true },
})
</script>

<style scoped lang="scss">
input {
  @include input-base($bg: $color-white, $border: $border-none, $height: auto);
  border-radius: 0px 8px 8px 0px;
  font-size: $font-size-base;
  direction: rtl;
}

.inputBorder {
  border: $border-width solid $border-color;
}
</style>
