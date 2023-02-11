import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native"
import { Listitem } from "./assets/components/ListItem"
import articles from "./assets/data/article"

export default function App() {
  const exampleText =
    "Ea veniam dolor non incididunt velit amet Lorem quis et voluptate magna. Amet nisi aliquip tempor cupidatat cupidatat et cillum ea ipsum. Est fugiat Lorem elit ipsum consectetur. Nulla officia eu adipisicing sint magna tempor qui aliqua id mollit. Nisi voluptate"

  const items = articles.map((article, index) => {
    return (
      <Listitem
        imageUrl={article.picture}
        title={article.text}
        author={article.author}
        key={index.toString()}
      />
    )
  })

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.containerTitle}>Hello Expo</Text>
        {items}
        {/* <Listitem
        imageUrl="https://picsum.photos/id/10/300/300"
        title={exampleText}
        author="by the news"
      /> */}
        {/* <Listitem /> */}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f3f3",
    paddingTop: StatusBar.currentHeight,
  },
  containerTitle: {
    color: "orange",
    fontSize: 32,
  },
  scrollView: {
    // backgroundColor: "pink",
    marginHorizontal: 20,
  },
})
