import googleDriveIcon from "@/assets/icons/google-drive.svg";
import localIcon from "@/assets/icons/local.svg";

export type StorageProvider = "Local" | "GoogleDrive";

export interface SheetLocation {
  name: string;
  path: string;
  storageProvider: StorageProvider;
  lastUpdated: Date;
}

export function getProviderIcon(provider: StorageProvider): string {
  switch (provider) {
    case "Local":
      return localIcon;
    case "GoogleDrive":
      return googleDriveIcon;
  }
}
