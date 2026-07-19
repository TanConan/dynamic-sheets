import type { EditorMode } from "@/types/editor";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useEditorStore = defineStore("counter", () => {
  const mode = ref<EditorMode>("view");

  return { mode };
});
