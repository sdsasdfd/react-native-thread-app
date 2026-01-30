import { View, Text, FlatList } from "react-native";
import React from "react";
import { dummyPosts } from "@/dummyData";
import PostListItem from "@/components/PostListItem";
import { Link } from "expo-router";

const Feed = () => {
  return (
    <View>
      <Link href={"/login"} className=" text-white">
        login
      </Link>
      <FlatList
        data={dummyPosts}
        renderItem={(item) => <PostListItem post={item.item} />}
        ListHeaderComponent={() => (
          <Link href="/new" className="p-4 text-3xl text-blue-500 ">
            New Post
          </Link>
        )}
      />
    </View>
  );
};

export default Feed;
