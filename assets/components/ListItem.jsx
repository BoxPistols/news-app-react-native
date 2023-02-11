import { StyleSheet, Text, View, Image } from "react-native"

export const Listitem = () => {
  const exampleText =
    "Ea veniam dolor non incididunt velit amet Lorem quis et voluptate magna. Amet nisi aliquip tempor cupidatat cupidatat et cillum ea ipsum. Est fugiat Lorem elit ipsum consectetur. Nulla officia eu adipisicing sint magna tempor qui aliqua id mollit. Nisi voluptate"
  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: "https://picsum.photos/id/10/300/300" }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.rightContainerText}>
            {exampleText}
          </Text>
          <Text numberOfLines={1} style={styles.rightContainerTextSub}>
            React News
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",

    height: 100,
    backgroundColor: "red",
  },
  leftContainer: { width: 100 },
  rightContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fefefe",
    padding: 8,
  },
  rightContainerText: {
    fontSize: 16,
    // padding: (8, 12, 4, 8),
  },
  rightContainerTextSub: {
    fontSize: 14,
    color: "gray",
  },
})
