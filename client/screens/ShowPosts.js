import React, { useState, useEffect } from "react";

import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";

const URL = "http://localhost:3000/";

const ShowPosts = () => {
  const [user, setUser] = useState("");
  const [caption, setCaption] = useState("");
  const [url, setUrl] = useState("");
  const [comments, setComments] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${URL}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <View style={styles.card}>
        <View style={styles.form}>
          <View style={styles.inputs}>
            <ul>
              {items.map((item) => (
                <Post item={item} />
              ))}
            </ul>
          </View>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  image: {
    flex: 1,

    width: "100%",

    alignItems: "center",
  },

  card: {
    flex: 1,

    backgroundColor: "rgba(255, 255, 255, 0.4)",

    width: "80%",

    marginTop: "40%",

    borderRadius: 20,

    maxHeight: 380,

    paddingBottom: "30%",
  },

  heading: {
    fontSize: 30,

    fontWeight: "bold",

    marginLeft: "10%",

    marginTop: "5%",

    marginBottom: "30%",

    color: "black",
  },

  form: {
    flex: 1,

    justifyContent: "space-between",

    paddingBottom: "5%",
  },

  inputs: {
    width: "100%",

    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    paddingTop: "10%",
  },

  input: {
    width: "80%",

    borderBottomWidth: 1,

    borderBottomColor: "black",

    paddingTop: 10,

    fontSize: 16,

    minHeight: 40,
  },

  button: {
    width: "80%",

    backgroundColor: "black",

    height: 40,

    borderRadius: 50,

    justifyContent: "center",

    alignItems: "center",

    marginVertical: 5,
  },

  buttonText: {
    color: "white",

    fontSize: 16,

    fontWeight: "400",
  },

  buttonAlt: {
    width: "80%",

    borderWidth: 1,

    height: 40,

    borderRadius: 50,

    borderColor: "black",

    justifyContent: "center",

    alignItems: "center",

    marginVertical: 5,
  },

  buttonAltText: {
    color: "black",

    fontSize: 16,

    fontWeight: "400",
  },

  message: {
    fontSize: 16,

    marginVertical: "5%",
  },
});

export default ShowPosts;
