import { Image } from "expo-image";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Input from "@/components/inputs/input";
import { useForm } from "react-hook-form";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { useState } from "react";
import { z } from "zod";
import { signupSchema } from "./auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useAuthStore } from "@/store/authstore";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { capitalize } from "lodash";

type UserData = z.infer<typeof signupSchema>;

export default function SignUpScreen() {
  const [secret, setSecret] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);
  const theme = useTheme();
  const {replace} = useRouter()
  const {login} = useAuthStore.getState()
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: UserData) => {
    if (data.confirmPassword !== data.password) {
      setError("confirmPassword", {
        type: "pattern",
        message: "Passwords does not match",
      });

      return;
    }
    const { confirmPassword, ...newData } = data;
    setLoading(true)
    createUserWithEmailAndPassword(auth, newData.email, newData.password).then(
      (userCredentials) => {
        console.log(userCredentials);
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: `${data.firstName} ${data.lastName} ${data.username}`
          }).then((data) => {
            console.log('Profile data:::', data)
            Toast.show({
              type: "success",
              text1: "Sign Up Success"
            })
          }).catch((error) => console.log(error))
        }
        login()
        replace('/')
      }
    ).catch((error)=> {
      // const errorCode = error.code;
      const errorMessage = error.message;
      Toast.show({
        type: "success",
        text1: capitalize(error.code.split('/')[1].split('-').join(' '))
      })
      setError("root.serverError", {type: error.code, message: error.message})
      console.log(errorMessage)
    }).finally(() => setLoading(false));
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
            keyboardType="email-address"
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
          loading={loading}
        >
          Sign Up
        </Button>
        <Text style={{ textAlign: "center" }}>
          Already Have an Account?{" "}
          <Text
            style={{ color: theme.colors.primary, fontWeight: "700" }}
            onPress={() => replace("/(auth)")}
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
