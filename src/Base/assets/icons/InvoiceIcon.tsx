import Svg, {SvgProps, Path} from 'react-native-svg';
const InvoiceIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 512 512"
    height={24}
    width={24}
    fill="currentColor"
    {...props}>
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z"
    />
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M256 56v120a32 32 0 0 0 32 32h120m-232 80h160m-160 80h160"
    />
  </Svg>
);
export default InvoiceIcon;
