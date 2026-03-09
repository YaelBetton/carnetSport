const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// On emballe la config Expo avec NativeWind
module.exports = withNativeWind(config, { input: "./global.css" });
