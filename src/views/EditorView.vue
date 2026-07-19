<script lang="ts" setup>
import EditorToolbar from "@/components/EditorToolbar.vue";
import SegmentedControl, { type SegmentedControlOption } from "@/components/SegmentedControl.vue";
import SheetEditor from "@/components/SheetEditor.vue";
import { useEditorStore } from "@/stores/editor-store";
import type { EditorMode } from "@/types/editor";

const editor = useEditorStore();
const modeOptions: SegmentedControlOption<EditorMode>[] = [
  { label: "Edit", value: "edit" },
  { label: "Text", value: "text" },
];
</script>

<template>
  <div class="editor">
    <menu class="editor__header">
      <EditorToolbar class="editor__toolbar" />
      <SegmentedControl v-model="editor.mode" :options="modeOptions" class="editor__mode-switch" />
    </menu>

    <div class="editor__canvas">
      <SheetEditor />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.editor {
  @include flex(column, flex-start, stretch);
  min-height: 100vh;
  background: $color-background;
}

.editor__header {
  position: relative;
  height: 64px;
  flex-shrink: 0;
}

.editor__toolbar {
  position: absolute;
  top: $spacing-sm;
  left: $spacing-sm;
}

.editor__mode-switch {
  position: absolute;
  top: $spacing-sm;
  left: 50%;
  transform: translateX(-50%);
}

.editor__canvas {
  @include flex(row, center, flex-start);
  flex: 1;
  overflow: auto;
  padding: $spacing-xl $spacing-md;
}
</style>
