import Svg, {Rect, Path, SvgProps} from 'react-native-svg';

const CardIcon = (props: SvgProps) => (
  <Svg height={24} width={24} viewBox="0 0 512 512" {...props}>
    <Rect
      width={416}
      height={320}
      x={48}
      y={96}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      rx={56}
      ry={56}
    />
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={60}
      d="M48 192h416M128 300h48v20h-48z"
    />
  </Svg>
);

export default CardIcon;
