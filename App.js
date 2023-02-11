import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Hello Expo</Text>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}></View>
        <View style={styles.rightContainer}></View>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitle: {
    color: "orange",
    fontSize: 32,
  },
  itemContainer: { width: "100%" },
  leftContainer: { width: "100%" },
  rightContainer: { width: "100%" },
})
