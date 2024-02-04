import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const SvgFacebookComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fill: "#000",
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <G
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
    >
      <Path
        fill="#030de5"
        d="M128 26.667C72.035 26.667 26.667 72.035 26.667 128c0 55.965 45.368 101.333 101.333 101.333 55.965 0 101.333-45.368 101.333-101.333 0-55.965-45.368-101.333-101.333-101.333z"
      />
      <Path
        fill="#fff"
        d="M141.717 154.859h26.224l4.118-26.64h-30.347v-14.56c0-11.067 3.616-20.88 13.968-20.88h16.635V69.53c-2.923-.395-9.104-1.259-20.784-1.259-24.39 0-38.688 12.88-38.688 42.224v17.723H87.77v26.64h25.072v73.22c4.965.748 9.994 1.254 15.157 1.254 4.667 0 9.221-.426 13.717-1.034z"
      />
    </G>
  </Svg>
)
export default SvgFacebookComponent
