import { View, Text, Alert } from "react-native";
import { Button } from "react-native";


const Screen=()=>{


    return(

        <View>
            <Text>
                SCREEN
            </Text>
            <Button title="OK" onPress={()=>{  
                Alert.alert("hello");
            }} />
        </View>
    )
}

export default Screen;