<script lang="ts" setup>
import { useEditorStore } from "@/stores/editor-store";
import { getToolIcon, type EditorTool } from "@/types/editor";
import { ref } from "vue";

const editor = useEditorStore();

const tools: EditorTool[] = ["select", "add"];

// TODO: move to editor.sheet
const sheetName = ref("");

function handleNew() {}

function handleSave() {}

function handleLoad() {}
</script>

<template>
  <div class="toolbar">
    <input v-model="sheetName" type="text" placeholder="Untitled" class="toolbar__name-input" />

    <div class="toolbar__divider"></div>

    <button class="toolbar__button" @click="handleNew">New</button>
    <button class="toolbar__button" @click="handleSave">Save</button>
    <button class="toolbar__button" @click="handleLoad">Load</button>

    <div class="toolbar__divider"></div>

    <button
      v-for="tool in tools"
      :key="tool"
      class="toolbar__tool"
      :class="{ 'toolbar__tool--active': editor.tool === tool }"
      @click="editor.tool = tool"
      v-html="getToolIcon(tool)"
    ></button>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  @include card;
  @include flex(row, flex-start, center, $spacing-xs);

  width: fit-content;
  padding: $spacing-xs $spacing-sm;
  position: relative;
}

.toolbar__name-input {
  @include truncate;
  border: none;
  background: transparent;
  outline: none;
  font-size: $font-size-base;
  font-weight: 600;
  color: $color-text;
  padding: $spacing-xs;
  border-radius: $radius-sm;

  field-sizing: content;
  min-width: 140px;
  max-width: 320px;

  &::placeholder {
    color: $color-text-muted;
    font-weight: 400;
  }

  &:focus {
    background: $color-neutral-100;
  }
}

.toolbar__divider {
  width: 1px;
  align-self: stretch;
  background: $color-border;
  margin: $spacing-xs 0;
}

.toolbar__button {
  padding: $spacing-xs $spacing-sm;
  border-radius: $radius-sm;
  font-size: $font-size-sm;
  color: $color-text;
  transition: background-color $transition-fast;

  &:hover {
    background: $color-neutral-100;
  }
}

.toolbar__tool {
  @include flex(row, center, center);
  @include icon;

  border-radius: $radius-sm;
  color: $color-text-muted;
  transition:
    background-color $transition-fast,
    color $transition-fast;

  &:hover {
    background: $color-neutral-100;
    color: $color-text;
  }

  &--active {
    background: $color-primary-100;
    color: $color-primary-600;

    &:hover {
      background: $color-primary-100;
      color: $color-primary-600;
    }
  }
}
</style>
