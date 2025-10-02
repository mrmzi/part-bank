<template>
  <input
    :class="[inputProps.inputClass , inputProps.hasBorder ? 'inputBorder' : '']"
    :id="inputProps.inputId"
    :style="{ border: inputProps.inputBor + 'solid' }"
    :type="inputProps.inputType"
    :placeholder="inputProps.placeholder"
  />
</template>

<script setup>
const inputProps = defineProps({
  inputId: {
    type: String,
  },
  inputClass: {
    type: String,
  },
  hasBorder: {
    type: Boolean,
  },
  inputWidth: {
    type: String,
    required: true,
  },
  inputHeight: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
  inputType: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
input {
  border: $border-none;
  box-sizing: border-box;
  padding: 0px 8px;
  outline: none;
  font-size: $font-size-base;
  direction: rtl;

  &::placeholder {
    color: $text-placeholder;
  }
}

.inputBorder {
  border: 1px solid $border-color;
}
</style>
