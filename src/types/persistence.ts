export type StorageProvider = "Local" | "GoogleDrive";

export interface SheetLocation {
  name: string;
  path: string;
  storageProvider: StorageProvider;
  lastUpdated: Date;
}
