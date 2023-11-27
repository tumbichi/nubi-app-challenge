import {Path, Svg, SvgProps} from 'react-native-svg';
import {useStyles} from '../theme';

const HalfOval = (props: SvgProps) => {
  const {theme} = useStyles();
  return (
    <Svg width={750} height={48} fill="none" {...props}>
      <Path
        fill={theme.colors.accent}
        d="M750 3.971C750 6.165 582.107 48 375 48S0 6.165 0 3.971C0 1.778 167.893.124 375 .124s375 1.654 375 3.847Z"
      />
      <Path fill={theme.colors.accent} d="M0 0h750v3.971H0z" />
    </Svg>
  );
};

export default HalfOval;
