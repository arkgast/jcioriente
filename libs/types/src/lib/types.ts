export type MenuSettings = {
  displayInMainMenu: boolean;
};

export type BaseRoute = {
  path: string;
  name: string;
  menuSettings: MenuSettings;
};

export type NestedRoute = Omit<BaseRoute, 'menuSettings'> & {
  menuSettings?: MenuSettings;
};

export type Route<
  Children extends Record<string, NestedRoute> = Record<string, never>,
> = BaseRoute & {
  children?: Children;
};

export type NestedRoutes = Record<string, Record<string, NestedRoute>>;

export type Routes<T extends string, N extends NestedRoutes> = {
  [K in T]: K extends keyof N ? Route<N[K]> : Route;
};
