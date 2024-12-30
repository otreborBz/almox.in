import react from "react";
import { View, ActivityIndicator} from 'react-native';
import styles from "./style";

export default function Loading(){
  return(
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  )
}