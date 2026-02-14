
import { StyleSheet, Text, View, Button } from 'react-native';
 
export default function Alumno(props){

return(
<View>
   <Button title={props.nombre} onPress={() => alert(`Alumno: ${props.nombre}`)} />
</View>
)
}