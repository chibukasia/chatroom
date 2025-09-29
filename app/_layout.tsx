import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';import { useAuthStore } from "@/store/authstore";
import Toast from "react-native-toast-message";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const authState = useAuthStore.getState();
  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: '#FA7323',
    secondary: '#FE880C',
  },
};

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <KeyboardProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={authState.isSignedIn}>
              <Stack.Screen
                name="(protected)/(tabs)"
                options={{ headerShown: false }}
              />
            </Stack.Protected>
            <Stack.Protected guard={!authState.isSignedIn}>
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack.Protected>

            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
          <Toast />
        </KeyboardProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
