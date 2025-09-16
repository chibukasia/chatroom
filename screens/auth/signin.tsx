import { Image } from "expo-image";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Input from "@/components/inputs/input";
import { useForm } from "react-hook-form";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { useState } from "react";
import { z } from "zod";
import { signInSchema } from "./auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";

type SignInData = z.infer<typeof signInSchema>;
export default function SignInScreen() {
  const [secret, setSecret] = useState(true);
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInData) => {
    console.log(data);
  };
  return (
    <ScrollView
      style={{ padding: 20 }}
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
    >
      <View style={{ alignItems: "center", padding: 10 }}>
        <Image
          source={require("../../assets/images/icon.png")}
          style={{ width: 60, height: 60 }}
        />
      </View>
      <View>
        <Text
          variant="headlineMedium"
          style={{ fontWeight: "bold", textAlign: "center", paddingBottom: 20 }}
        >
          Sign In
        </Text>

        <View style={{ gap: 10, paddingTop: 10 }}>
          <Input
            name="email"
            label="Email"
            control={control}
            error={errors.email?.message}
          />
          <Input
            name="password"
            label="Passowrd"
            error={errors.password?.message}
            secret={secret}
            control={control}
            right={
              <TextInput.Icon
                icon={secret ? "eye" : "eye-off"}
                onPress={() => setSecret(!secret)}
              />
            }
          />
        </View>
        <Button
          mode="contained"
          style={{ marginHorizontal: 40, marginVertical: 20 }}
          onPress={handleSubmit(onSubmit)}
        >
          Sign In
        </Button>
        <Text style={{ textAlign: "center" }}>
          Don&apos;t Have an Account?{" "}
          <Text
            style={{ color: theme.colors.primary, fontWeight: "700" }}
            onPress={() => console.log("Sign In")}
          >
            Sign Up
          </Text>
        </Text>

        <Text style={{ textAlign: "center", paddingBottom: 10 }}>Or</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingHorizontal: 20,
            borderRadius: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            paddingVertical: 5,
          }}
        >
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s",
            }}
            style={{ width: 40, height: 40 }}
          />
          <Text>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
