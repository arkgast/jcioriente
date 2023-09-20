import { NestedRoute, Route } from '@jcioriente/types';

export type MainRouteKeys =
  | 'home'
  | 'about'
  | 'projects'
  | 'contactUs'
  | 'login'
  | 'footerNavigation';

export type AboutChildren = 'history' | 'members' | 'presidents';

// export type FooterChildren = 'apply' | 'activities' | 'alliances' | 'history';
export type FooterChildren = 'apply' | 'history';

export type NestedRouteKeys = {
  about: Record<AboutChildren, NestedRoute>;
  footerNavigation: Record<FooterChildren, NestedRoute>;
};

export type MainRoutes = Route<Record<string, NestedRoute>>[];
