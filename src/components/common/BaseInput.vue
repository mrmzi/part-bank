<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
  error: { type: String, default: null },
  id: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-personal-info__field">
    <label v-if="label" :for="id" class="form-personal-info__label">
      {{ label }}
    </label>

    <input
      :id="id"
      class="form-personal-info__input"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />

    <span v-if="error" class="form-personal-info__error">{{ error }}</span>
  </div>
</template>
<style scoped>
input {
  padding: 14px 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9fafb;
  font-family: 'peyda-regular';
  outline: none;
  height: 48px;
}
input::placeholder{
  color: #C3C5C9;
}
label {
  font-size: 14px;
  color: #8999b9;
  padding: 0 8px;
  margin-bottom: 8px;

}
span {
  color: red;
  font-size: 12px;
  margin-top: 8px;
}
</style>
