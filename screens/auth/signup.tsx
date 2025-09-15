import { Image } from "expo-image";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Input from "@/components/inputs/input";
import { useForm } from "react-hook-form";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
export default function SignUpScreen() {
  const [secret, setSecret] = useState(true);
  const { control } = useForm();
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
            <Input name="firstName" label="First Name" control={control} />
          </View>
          <View style={{ width: "48%" }}>
            <Input name="lastName" label="First Name" control={control} />
          </View>
        </View>
        <View style={{ gap: 10, paddingTop: 10 }}>
          <Input name="email" label="Email" control={control} />
          <Input name="username" label="Preffered Username" control={control} />
          <Input
            name="password"
            label="Passowrd"
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
            control={control}
          />
        </View>
        <Button
          mode="contained"
          style={{ marginHorizontal: 40, marginVertical: 20 }}
        >
          Sign Up
        </Button>
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
