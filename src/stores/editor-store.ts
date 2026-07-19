import type { EditorMode, EditorTool } from "@/types/editor";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useEditorStore = defineStore("editor", () => {
  const mode = ref<EditorMode>("edit");
  const tool = ref<EditorTool>("select");

  return { mode, tool };
});
