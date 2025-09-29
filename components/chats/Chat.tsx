import { View } from "react-native";
import { LegendList } from "@legendapp/list";
import { Text } from "react-native-paper";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const messages = [
  {
    id: "1",
    sender: "Jane Doe",
    message: "Hey John, how are you?",
    isMe: false,
  },
  {
    id: "2",
    sender: "John Smith",
    message: "Hi Jane, I’m good! How about you?",
    isMe: true,
    isOnline: true,
    isRead: true,
    isDelivered: true,
  },
  {
    id: "3",
    sender: "Jane Doe",
    message: "I’m doing well, just busy with work.",
    isMe: false,
  },
  {
    id: "4",
    sender: "John Smith",
    message: "Same here. What project are you working on?",
    isMe: true,
  },
  {
    id: "5",
    sender: "Jane Doe",
    message: "I’m preparing a presentation for next week.",
    isMe: false,
  },
  {
    id: "6",
    sender: "John Smith",
    message: "Nice! What’s it about?",
    isMe: true,
  },
  {
    id: "7",
    sender: "Jane Doe",
    message: "It’s about market trends in 2025.",
    isMe: false,
  },
  {
    id: "8",
    sender: "John Smith",
    message: "Sounds interesting. Do you need any help?",
    isMe: true,
  },
  {
    id: "9",
    sender: "Jane Doe",
    message: "Maybe some feedback once I draft it.",
    isMe: false,
  },
  {
    id: "10",
    sender: "John Smith",
    message: "Of course, happy to review.",
    isMe: true,
  },
  {
    id: "11",
    sender: "Jane Doe",
    message: "Thanks, that’ll be really helpful.",
    isMe: false,
  },
  {
    id: "12",
    sender: "John Smith",
    message: "Anytime! By the way, did you watch that new show?",
    isMe: true,
  },
  {
    id: "13",
    sender: "Jane Doe",
    message: "Not yet, is it good?",
    isMe: false,
  },
  {
    id: "14",
    sender: "John Smith",
    message: "Yeah, I binged it over the weekend.",
    isMe: true,
  },
  {
    id: "15",
    sender: "Jane Doe",
    message: "Haha, must be really good then.",
    isMe: false,
  },
  {
    id: "16",
    sender: "John Smith",
    message: "It’s funny and the plot twists are wild.",
    isMe: true,
  },
  {
    id: "17",
    sender: "Jane Doe",
    message: "Alright, I’ll add it to my list.",
    isMe: false,
  },
  {
    id: "18",
    sender: "John Smith",
    message: "Cool. We can talk about it later.",
    isMe: true,
  },
  {
    id: "19",
    sender: "Jane Doe",
    message: "Sure! By the way, how’s your family?",
    isMe: false,
  },
  {
    id: "20",
    sender: "John Smith",
    message: "They’re good, thanks for asking.",
    isMe: true,
  },
  { id: "21", sender: "Jane Doe", message: "Glad to hear that!", isMe: false },
  {
    id: "22",
    sender: "John Smith",
    message: "When are you free to catch up in person?",
    isMe: true,
  },
  {
    id: "23",
    sender: "Jane Doe",
    message: "Maybe this Friday evening?",
    isMe: false,
  },
  {
    id: "24",
    sender: "John Smith",
    message: "Perfect, let’s do dinner then.",
    isMe: true,
  },
  {
    id: "25",
    sender: "Jane Doe",
    message: "Sounds great, I’ll book a spot.",
    isMe: false,
  },
  {
    id: "26",
    sender: "John Smith",
    message: "Awesome, looking forward to it.",
    isMe: true,
  },
  {
    id: "27",
    sender: "Jane Doe",
    message: "Me too! It’s been a while.",
    isMe: false,
  },
  {
    id: "28",
    sender: "John Smith",
    message: "Yeah, way too long.",
    isMe: true,
  },
  {
    id: "29",
    sender: "Jane Doe",
    message: "Alright, I’ll send you the details later.",
    isMe: false,
  },
  { id: "30", sender: "John Smith", message: "Okay, thanks Jane!", isMe: true },
];

const Chat = () => {
  return (
    <LegendList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Message message={item.message} sender={item.sender} isMe={item.isMe} isRead={item.isRead} isDelivered={item.isOnline}/>
      )}
    />
  );
};

export default Chat;

interface MessageProps {
  message: string;
  sender: string;
  isMe: boolean;
  isRead?: boolean;
  isDelivered?: boolean;
}
const Message = ({
  message,
  sender,
  isMe,
  isRead,
  isDelivered,
}: MessageProps) => {
  return (
    
    <View
      style={{
        padding: 10,
        backgroundColor: isMe ? "#FA7323" : "#FE880C",
        alignSelf: isMe ? "flex-end" : "flex-start",
        marginVertical: 5,
        borderRadius: 10,
        maxWidth: "75%",
      }}
    >
      {!isMe && (
        <Text style={{ fontWeight: "bold", marginBottom: 5, color: "white" }}>
          {sender}
        </Text>
      )}
      <Text style={{ color: "white" }}>{message}</Text>
      {isMe && (
        <View style={{ alignItems: "flex-end" }}>
          <Ionicons
            name={isDelivered ? "checkmark-done-sharp" : "checkmark-sharp"}
            size={16}
            color={isRead ? "#25E9F7" : "#C5C7C7"}
          />
        </View>
      )}
    </View>
  );
};
