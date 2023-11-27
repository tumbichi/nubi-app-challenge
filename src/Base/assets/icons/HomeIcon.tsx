import Svg, {Path, SvgProps} from 'react-native-svg';

const HomeIcon = (props: SvgProps) => {
  console.log('color :>> ', props.color);
  return (
    <Svg width={24} height={24} fill="currentColor" {...props}>
      <Path
        stroke="currentColor"
        d="M12.97 2.59a1.5 1.5 0 0 0-1.94 0l-7.5 6.363A1.5 1.5 0 0 0 3 10.097V19.5A1.5 1.5 0 0 0 4.5 21h4.75a.75.75 0 0 0 .75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 0 0 1.5-1.5v-9.403a1.5 1.5 0 0 0-.53-1.144l-7.5-6.363Z"
      />
    </Svg>
  );
};
export default HomeIcon;
