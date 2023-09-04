export type MenuSettings = {
  displayInMainMenu: boolean;
};

export type NestedRoute = {
  path: string;
  name: string;
};

export type Route = {
  path: string;
  name: string;
  menuSettings: MenuSettings;
  children?: Record<string, NestedRoute>;
};

export type Routes<T extends string> = Record<T, Route>;
