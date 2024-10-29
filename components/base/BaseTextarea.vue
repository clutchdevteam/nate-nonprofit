<template>
  <div class="flex flex-col">
    <label class="text-sm mb-2 font-bold text-primary-dark">
      <slot /> <span v-if="required">*</span>
    </label>

    <textarea
      class="border border-gray-300 rounded-md px-2 py-1"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 4,
  },
  inputType: {
    type: String,
    default: "text",
    validator: (value) => {
      const validProps = [
        "text",
        "email",
        "tel",
        "url",
        "search",
        "password",
        "date",
      ];
      return validProps.includes(value);
    },
  },
});

defineEmits(["update:modelValue"]);
</script>
