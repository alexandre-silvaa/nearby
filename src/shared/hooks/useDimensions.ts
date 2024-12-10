import { Dimensions } from "react-native";

export default function useDimensions() {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  return { width, height };
}
