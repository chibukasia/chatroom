import { Image } from "expo-image";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Input from "@/components/inputs/input";
import { useForm } from "react-hook-form";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { useState } from "react";
import { z } from "zod";
import { signupSchema } from "./auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";

type UserData = z.infer<typeof signupSchema>;

export default function SignUpScreen() {
  const [secret, setSecret] = useState(true);
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: UserData) => {
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
          Sign Up
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "48%" }}>
            <Input
              name="firstName"
              label="First Name"
              control={control}
              error={errors.firstName?.message}
            />
          </View>
          <View style={{ width: "48%" }}>
            <Input
              name="lastName"
              label="Last Name"
              control={control}
              error={errors.lastName?.message}
            />
          </View>
        </View>
        <View style={{ gap: 10, paddingTop: 10 }}>
          <Input
            name="email"
            label="Email"
            control={control}
            error={errors.email?.message}
          />
          <Input
            name="username"
            label="Preffered Username"
            control={control}
            error={errors.username?.message}
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
          <Input
            name="confirmPassword"
            label="Confirm Passowrd"
            error={errors.confirmPassword?.message}
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
          Sign Up
        </Button>
        <Text style={{ textAlign: "center" }}>
          Already Have an Account?{" "}
          <Text
            style={{ color: theme.colors.primary, fontWeight: "700" }}
            onPress={() => console.log("Sign In")}
          >
            Sign In
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
          <Text>Sign Up With Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
