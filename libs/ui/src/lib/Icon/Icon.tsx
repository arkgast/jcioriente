import { SVGProps } from 'react';

export type IconName = 'facebook' | 'instagram' | 'twitter';

type IconProps = SVGProps<SVGSVGElement> & {};

export function Icon(props: IconProps) {
  return <h1>Icon</h1>;
}
