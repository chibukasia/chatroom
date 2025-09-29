import { StyleSheet, View } from "react-native"
import { Avatar, Text } from "react-native-paper"

const ChatList = () => {
    return(
        <View style={styles.container}>
            <View style={styles.chatItem}>
                <Avatar.Text size={32} label="JD" />
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>John Doe</Text>
                    <Text numberOfLines={1} style={{color: 'gray'}}>Hey! How are you?</Text>
                </View>
            </View>
            <View style={styles.chatItem}>
                <Avatar.Text size={32} label="KB" />
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Kevin Bruyne</Text>
                    <Text numberOfLines={1} style={{color: 'gray'}}>Hey! How are you?</Text>
                </View>
            </View>
            <View style={styles.chatItem}>
                <Avatar.Text size={32} label="ML" />
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Mike Lance</Text>
                    <Text numberOfLines={1} style={{color: 'gray'}}>Hey! How are you?</Text>
                </View>
            </View>
            <View style={styles.chatItem}>
                <Avatar.Text size={32} label="AW" />
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Ann Waiguru</Text>
                    <Text numberOfLines={1} style={{color: 'gray'}}>I stole a lot from NYS</Text>
                </View>
            </View>
        </View>
    )
}

export default ChatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    }
})