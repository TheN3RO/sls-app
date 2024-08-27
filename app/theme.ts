import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Define the configuration for the theme
const config: ThemeConfig = {
  initialColorMode: "dark", // Set dark mode as the default
  useSystemColorMode: false, // Disable system color mode preference
};

// Extend the theme with the custom configuration
export const theme = extendTheme({ config });