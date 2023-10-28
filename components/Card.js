import { View, Text, StyleSheet } from "react-native";

const Card = (props) => {
  <View style={styles.main}>
    <View style={styles.headv}>
      <Text style={styles.head}>{props.heading}</Text>
    </View>
    <View style={styles.descv}>
      <Text style={styles.desc}>{props.descp}</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    elevation: 50,
    shadowColor: "black",
    backgroundColor: "#ccc",
    borderRadius: 50,
  },
  headv: {
    flex: 1,
  },
  head: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  descv: {
    flex: 4,
  },
  desc: {
    fontSize: 8,
    fontWeight: "200",
  },
});

export default Card;
