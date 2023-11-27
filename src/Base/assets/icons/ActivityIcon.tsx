import Svg, {Path, SvgProps} from 'react-native-svg';
const ActivityIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" height={24} width={24} {...props}>
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="m304 48 112 112-112 112m94.87-112H96m112 304L96 352l112-112m-94 112h302"
    />
  </Svg>
);
export default ActivityIcon;
