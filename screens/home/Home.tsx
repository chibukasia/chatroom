import ChatList from "@/components/chats/ChatList";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  return (
      <ScrollView>
        <ChatList />
      </ScrollView>
  );
};

export default HomeScreen;
