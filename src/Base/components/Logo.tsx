import LogoSvg from '@/Base/assets/images/nubi-logo.svg';
import {SVGAttributes} from 'react';

const Logo = (props: SVGAttributes<SVGElement>) => {
  return <LogoSvg {...props} />;
};

export default Logo;
