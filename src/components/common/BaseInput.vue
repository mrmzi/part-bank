<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
  error: { type: String, default: null },
  id: { type: String, default: '' },
  class: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-field">
    <label v-if="label" :for="id">{{ label }}</label>

    <input
      :id="id"
      :class="class"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />

    <span v-if="error">{{ error }}</span>
  </div>
</template>

<style scoped lang="scss">
.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  label {
    font-size: 14px;
    color: #8999b9;
    padding: 0 8px;
    margin-bottom: 8px;
  }

  input {
    padding: 14px 8px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    font-family: 'peyda-regular';
    background-color: #f9fafb;
    outline: none;
    height: 48px;

    &::placeholder {
      color: #C3C5C9;
    }
  }

  span {
    color: red;
    font-size: 12px;
    margin-top: 8px;
  }
}
</style>
