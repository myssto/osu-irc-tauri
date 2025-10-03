import { load, type Store } from "@tauri-apps/plugin-store";

export interface IStoreData {
  ircUsername?: string;
  ircPassword?: string;
  saveIrcCredentials: boolean;
}

const storeDefaults: IStoreData & { [key: string]: unknown } = {
  saveIrcCredentials: true,
};

export interface IAppStore {
  raw: Store;

  get: <K extends keyof IStoreData>(
    key: K
  ) => Promise<IStoreData[K] | undefined>;

  set: <K extends keyof IStoreData>(
    key: K,
    value: IStoreData[K]
  ) => Promise<void>;
}

export const store = async (): Promise<IAppStore> => {
  const raw = await load("store.json", {
    defaults: storeDefaults,
    autoSave: false,
  });

  return {
    raw,
    get: async (key) => {
      return await raw.get(key as string);
    },
    set: async (key, value) => {
      return await raw.set(key as string, value);
    },
  };
};
