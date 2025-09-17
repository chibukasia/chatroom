import { Text, TextInput } from "react-native-paper";
import { Control, Controller } from "react-hook-form";
import { KeyboardType, View } from "react-native";
import { ReactNode } from "react";

interface InputProps {
  name: string;
  label?: string;
  control: Control<any>;
  placeholder?: string;
  error?: string;
  secret?: boolean;
  disabled?: boolean;
  right?: ReactNode
  keyboardType?: KeyboardType
}
const Input = ({
  name,
  label,
  control,
  placeholder,
  error,
  secret,
  disabled = false,
  right,
  keyboardType
}: InputProps) => {
  return (
    <View>
      {label && <Text style={{paddingBottom: 5}}>{label}</Text>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={placeholder}
            secureTextEntry={secret}
            value={value}
            mode="outlined"
            keyboardType={keyboardType}
            outlineStyle={{borderRadius: 16}}
            // style={{padding: 0, margin: 0}}
            dense
            onChangeText={onChange}
            editable={!disabled}
            right={right}
          />
        )}
      />
      {error && <Text style={{color: "red", fontSize: 10}}>{error}</Text>}
    </View>
  );
};

export default Input;
