<script lang="ts" setup>
export interface ActionCardProps {
  variant?: "default" | "primary";
}

withDefaults(defineProps<ActionCardProps>(), {
  variant: "default",
});
</script>

<template>
  <button class="action-card" :class="`action-card--${variant}`">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.action-card {
  @include card;

  transition:
    transform $transition-base,
    box-shadow $transition-base,
    border-color $transition-base,
    background-color $transition-fast;

  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-md;
  }

  &:active {
    transform: translateY(0);
  }

  &--default:hover {
    border-color: $color-neutral-300;
    background: $color-neutral-100;
  }

  &--primary {
    border-color: $color-primary-500;

    &:hover {
      border-color: $color-primary-600;
      background: $color-primary-100;
    }
  }
}
</style>
