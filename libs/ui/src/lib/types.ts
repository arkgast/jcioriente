import { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

export type SocialNetworkIcon<T extends string> = IconProps & {
  name: T;
};

export type SocialNetwork = {
  d: string;
  className: string;
};

export type SocialNetworks<T extends string> = {
  [key in T]: SocialNetwork;
};
