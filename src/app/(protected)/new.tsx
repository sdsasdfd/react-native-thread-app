import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const New = () => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView className="p-4 flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
      >
        <Text className=" text-white text-lg font-bold">username</Text>
        <TextInput
          className="text-white text-lg"
          placeholder="What's on your mind?"
          multiline={true}
          numberOfLines={4}
          placeholderTextColor={"gray"}
          value={text}
          onChangeText={setText}
        />

        <View className="mt-auto">
          <Pressable className=" bg-white py-3 px-6 self-end rounded-full">
            <Text className="text-black font-bold">Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default New;
