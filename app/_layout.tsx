import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { PaperProvider } from "react-native-paper";
import { useAuthStore } from "@/store/authstore";
import Toast from "react-native-toast-message"

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const authState = useAuthStore.getState();
  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <PaperProvider>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Protected guard={authState.isSignedIn}>
          <Stack.Screen name="(protected)/(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!authState.isSignedIn}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack.Protected>
        
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      <Toast />
    </PaperProvider>
  );
}
