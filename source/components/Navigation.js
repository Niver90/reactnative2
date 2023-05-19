import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer} from "@react-navigation/native";
import Home from "../screen/Home";
import Add from "../screen/Add";

const stack = createNativeStackNavigator();

function Mystack(){

    return(
        <stack.Navigator>
            <stack.Screen name="Inicio" component={Home} />
            <stack.Screen name="Agregar" component={Add} />
        </stack.Navigator>
    );
}

export default function Navigation(){
   
    return (
        <NavigationContainer>
            <Mystack/>
        </NavigationContainer>
    )
}