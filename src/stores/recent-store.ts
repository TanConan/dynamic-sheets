import type { SheetLocation } from "@/types/persistence";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useRecentStore = defineStore("recent", () => {
  const recentSheets = ref<SheetLocation[]>([
    {
      name: "Thalindra Moonwhisper",
      path: "/sheets/thalindra.json",
      storageProvider: "Local",
      lastUpdated: new Date(Date.now() - 1000 * 60 * 4),
    },
    {
      name: "Q3 Budget Tracker",
      path: "/DynamicSheets/budget-q3.json",
      storageProvider: "GoogleDrive",
      lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    },
    {
      name: "Zeph the Unseen",
      path: "/sheets/zeph.json",
      storageProvider: "Local",
      lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30 * 6),
    },
  ]);

  return { recentSheets };
});
