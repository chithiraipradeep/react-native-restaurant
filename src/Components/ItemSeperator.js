import React from "react";
import { View } from "react-native";
import Color from "../Theme/Color";

const ItemSeparator = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: Color.Border,
      }}
    />
  );
};

export default ItemSeparator;