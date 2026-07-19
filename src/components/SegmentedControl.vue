<script lang="ts" setup>
export interface SegmentedControlOption<T> {
  label: string;
  value: T;
}

defineProps<{
  options: SegmentedControlOption<string>[];
}>();

const model = defineModel<string>();
</script>

<template>
  <div class="segmented-control">
    <button
      v-for="option in options"
      :key="option.value"
      class="segmented-control__option"
      :class="{ 'segmented-control__option--active': option.value === model }"
      @click="model = option.value"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.segmented-control {
  @include card;
  @include flex(row, flex-start, center);

  width: fit-content;
  padding: 4px;
  gap: 2px;
}

.segmented-control__option {
  padding: $spacing-xs $spacing-md;
  border-radius: $radius-sm;
  font-size: $font-size-sm;
  font-weight: 500;
  color: $color-text-muted;
  transition:
    background-color $transition-fast,
    color $transition-fast;

  &:hover {
    color: $color-text;
  }

  &--active {
    background: $color-primary-500;
    color: $color-text-inverse;

    &:hover {
      color: $color-text-inverse;
    }
  }
}
</style>
