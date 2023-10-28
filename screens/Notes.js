import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const Notes = () => {
  const [head, setHead] = useState("");
  const [desc, setDesc] = useState("");

  const goHome = (navigation) => {
    navigation.navigate("Home", { heading: { head }, description: { desc } });
  };

  <View style={styles.conatiner}>
    <View style={styles.headv}>
      <TextInput
        placeholder="Heading"
        value={head}
        onChangeText={() => setHead(head)}
        style={styles.headt}
      />
    </View>
    <View style={styles.descv}>
      <TextInput
        placeholder="Desciption"
        value={desc}
        onChangeText={() => setDesc(desc)}
        style={styles.desct}
      />
    </View>
    <Button title="Done" onPress={() => goHome} />
  </View>;
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "black",
  },
  headv: {
    flex: 1,
  },
  headt: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  descv: {
    flex: 4,
  },
  desct: {
    fontSize: 10,
    fontWeight: "300",
  },
});

export default Notes;
