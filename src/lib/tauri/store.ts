import { load, type Store } from "@tauri-apps/plugin-store";

export interface IStoreData extends Record<string, unknown> {
  ircUsername?: string;
  ircPassword?: string;
  saveIrcCredentials: boolean;
}

const storeDefaults: IStoreData = {
  saveIrcCredentials: true,
};

export interface IAppStore {
  rawStore: Store;

  get: <K extends (keyof IStoreData)[]>(
    ...keys: K
  ) => Promise<{
    [P in K[number]]: IStoreData[P];
  }>;

  set: <K extends Extract<keyof IStoreData, string>>(
    key: K,
    value: IStoreData[K]
  ) => Promise<void>;

  has: (key: Extract<keyof IStoreData, string>) => Promise<boolean>;

  delete: (key: Extract<keyof IStoreData, string>) => Promise<boolean>;
}

export const store = async (): Promise<IAppStore> => {
  const rawStore = await load("store.json", {
    defaults: storeDefaults,
    autoSave: false,
  });
};
