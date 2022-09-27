import { StyleSheet, Text, View } from "react-native";
import { Groups } from "@screens/Groups";

export default function App() {
  return (
    <View style={styles.container}>
      <Groups />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
