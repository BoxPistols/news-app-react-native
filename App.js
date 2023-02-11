import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image } from "react-native"
import { Listitem } from "./assets/components/ListItem"

export default function App() {
  const exampleText =
    "Ea veniam dolor non incididunt velit amet Lorem quis et voluptate magna. Amet nisi aliquip tempor cupidatat cupidatat et cillum ea ipsum. Est fugiat Lorem elit ipsum consectetur. Nulla officia eu adipisicing sint magna tempor qui aliqua id mollit. Nisi voluptate"
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Hello Expo</Text>
      <Listitem
        imageUrl="https://picsum.photos/id/200/300/300"
        title="最新ニュース。。あああああああああああああああああああああああああああああいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"
        author="by the news"
      />
      <Listitem
        imageUrl="https://picsum.photos/id/10/300/300"
        title={exampleText}
        author="by the news"
      />
      <Listitem />
      <Listitem
        imageUrl="https://picsum.photos/id/10/300/300"
        title={exampleText}
        author="by the news"
      />
      <Listitem />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitle: {
    color: "orange",
    fontSize: 32,
  },
})
