export type MenuSettings = {
  displayInMainMenu: boolean;
};

export type NestedRoute = {
  path: string;
  name: string;
};

export type Route<
  Children extends Record<string, NestedRoute> = Record<string, never>,
> = {
  path: string;
  name: string;
  menuSettings: MenuSettings;
  children?: Children;
};

export type NestedRoutes = Record<string, Record<string, NestedRoute>>;

export type Routes<T extends string, N extends NestedRoutes> = {
  [K in T]: K extends keyof N ? Route<N[K]> : Route;
};
