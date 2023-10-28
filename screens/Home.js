import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(1);

  const openNote = (navigation) => {
    navigation.navigate("Notes");
  };

  const addNote = () => {
    setCards([...cards, { head }, { desc }]);
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topdiv}>
        <Text style={styles.appname}>Notes App</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.sbox}>
          <TextInput
            placeholder="Search note.."
            value={search}
            onChangeText={() => setSearch(search)}
            style={styles.tinp}
          />
        </View>
        <View style={styles.carddesign}>
          <ScrollView>
            {cards.map((head, desc, index) => (
              <Card key={index} heading={head} descp={desc} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.btncontainer}>
          <TouchableOpacity onPress={() => openNote} style={styles.btn}>
            <Text style={styles.btnt}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topdiv: {
    flex: 1,
    width: "100%",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  appname: {
    fontSize: 30,
    fontWeight: "600",
  },
  body: {
    flex: 8,
    height: "100%",
    width: "100%",
  },
  sbox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinp: {
    borderColor: "#bbb",
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
    fontSize: 20,
    width: "80%",
  },
  carddesign: {
    flex: 7,
  },
  btncontainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  btn: {
    backgroundColor: "grey",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#33ccff",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  btnt: {
    color: "white",
    fontSize: 40,
    fontWeight: "500",
  },
});

export default Home;
