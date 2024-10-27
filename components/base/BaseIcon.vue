<template>
  <component
    :is="file"
    role="img"
    focusable="false"
    :aria-label="alt"
    fill="currentColor"
  />
</template>

<script setup>
import AddressIcon from "@/components/icons/AddressIcon.vue";
import BookIcon from "@/components/icons/BookIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import MenuIcon from "@/components/icons/MenuIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import PersonIcon from "@/components/icons/PersonIcon.vue";
import PeopleIcon from "@/components/icons/PeopleIcon.vue";
import QuotesIcon from "@/components/icons/QuotesIcon.vue";

const props = defineProps({
  file: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>
