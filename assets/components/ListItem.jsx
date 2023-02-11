import { StyleSheet, Text, View, Image } from "react-native"
/**
 * @param {
 *    imageUrl： 画像URL(string)
 *    title: タイトル(string)
 *    author:ニュース提供元(stringl
 * } props
 * @returns
 */

export const Listitem = ({ imageUrl, title, author }) => {
  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: imageUrl ? `${imageUrl}` : "https://picsum.photos/id/1/300/300" }}
            // source={{ uri: "https://picsum.photos/id/10/300/300" }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.rightContainerText}>
            {title ? title : "Duis irure veniam pariatur cupidatat officia mollit Lorem do."}
          </Text>
          <Text numberOfLines={1} style={styles.rightContainerTextSub}>
            {author ? author : "出典不明"}
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
    marginVertical: 5,
  },
  leftContainer: { width: 100 },
  rightContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fcfcfc",
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
