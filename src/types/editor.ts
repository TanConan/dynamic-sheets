import addIcon from "@/assets/icons/tool-add.svg?raw";
import selectIcon from "@/assets/icons/tool-select.svg?raw";

export type EditorMode = "edit" | "text";

export type EditorTool = "select" | "add";

export function getToolIcon(tool: EditorTool) {
  switch (tool) {
    case "select":
      return selectIcon;
    case "add":
      return addIcon;
  }
}
