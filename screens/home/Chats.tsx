import Chat from "@/components/chats/Chat";
import { View } from "react-native";

const ChatsScreen = () => {
    return(
        <View style={{flex: 1, padding: 10}}>
          <Chat />
        </View>
    )
}

export default ChatsScreen;