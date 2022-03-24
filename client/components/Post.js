import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { firebase, db } from "../firebase";

const postFooterIcons = [
  {
    name: "Like",
    url: "https://img.icons8.com/material-outlined/24/ffffff/filled-like.png",
    likedUrl: "https://img.icons8.com/material/24/ffffff/filled-like--v1.png",
  },
  {
    name: "comment",
    url: "https://img.icons8.com/material-outlined/24/ffffff/filled-topic.png",
  },
  {
    name: "share",
    url: "https://img.icons8.com/material-outlined/24/ffffff/filled-sent.png",
  },
  {
    name: "bookmark",
    url: "https://img.icons8.com/material-outlined/24/ffffff/bookmark-ribbon.png",
  },
];
const Post = ({ post }) => {
  const [time, setTime] = useState([]);
  const handleLike = () => {
    const currentLikeStatus = !post.likes_by_users.includes(
      firebase.auth().currentUser.email
    );
    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .doc(post.id)
      .update({
        likes_by_users: currentLikeStatus
          ? firebase.firestore.FieldValue.arrayUnion(
              firebase.auth().currentUser.email
            )
          : firebase.firestore.FieldValue.arrayRemove(
              firebase.auth().currentUser.email
            ),
      })
      .then(() => {
        console.log("doc updated");
      })
      .catch((err) => {
        console.error("Error updating doc: ", err);
      });
  };
  //* I tried for getting the time but it was in nanosecs and secs. Forgive me
  const getTimestamp = () => {
    db.collection("users")
      .doc(post.owner_email)
      .collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setTime({ id: doc.id, ...doc.data() });
          console.log({ id: doc.id, ...doc.data() });
        });
      })
      .then(() => {
        Alert.alert(
          "Time Sent",
          "Nanoseconds => ",
          time.createdAt.nanoseconds,
          "Seconds => ",
          time.createdAt.seconds
        );
      });
  };
  return (
    <View style={{ marginBottom: 30 }}>
      <PostHeader post={post} getTimestamp={getTimestamp} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter post={post} handleLike={handleLike} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post, getTimestamp }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ color: "white", marginLeft: 15, fontWeight: "700" }}>
          {post.user}
        </Text>
      </View>
      <TouchableOpacity /*onPress={getTimestamp}*/>
        <Text style={{ color: "white", fontWeight: "900" }}>
          <Ionicons name="ellipsis-vertical" size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const PostImage = ({ post }) => (
  <View style={{ width: "100%", hieght: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: 300, resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ handleLike, post }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "32%",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={() => handleLike(post)}>
        <Image
          style={styles.footerIcon}
          source={{
            uri: post.likes_by_users.includes(firebase.auth().currentUser.email)
              ? postFooterIcons[0].likedUrl
              : postFooterIcons[0].url,
          }}
        />
      </TouchableOpacity>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].url} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].url} />
    </View>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].url} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
      <Text style={{ color: "white", fontWeight: "600" }}>
        {post.likes_by_users.length.toLocaleString("en")}
      </Text>
      <Text style={{ color: "white", fontWeight: "900", marginLeft: 6 }}>
        {post.likes_by_users.length === 1 ? "like" : "likes"}
      </Text>
      {post.likes_by_users.length == 1 ? (
        <Text style={{ color: "white" }}>
          {" "}
          Liked by: {post.likes_by_users[0]}
        </Text>
      ) : (
        <Text style={{ color: "white" }}>
          {" "}
          Liked by: {post.likes_by_users[0]} and{" "}
          {post.likes_by_users.length - 1} more
        </Text>
      )}
    </View>
  );
};

const Caption = ({ post }) => (
  <View style={{ marginTop: 10 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post.user}</Text>
      <Text style={{ fontWeight: "100" }}> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      {!!post.comments.length && (
        <Text style={{ color: "gray" }}>
          {post.comments.length > 1
            ? `View all ${post?.comments?.length} comments`
            : `View a comment`}
        </Text>
      )}
    </View>
  );
};

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>
          <Text> {comment.comment}</Text>
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 2990,
    marginLeft: 6,
    borderWidth: 1,
    // padding: 10,
    borderColor: "#7b4397",
    // backgroundImage: "linear-gradient(to right, #7b4397, #dc2430)",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
});

export default Post;
