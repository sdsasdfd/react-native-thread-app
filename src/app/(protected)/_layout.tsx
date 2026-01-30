import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ProtectedLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="new"
        options={{ presentation: "modal", title: "New Thread" }}
      />
    </Stack>
  );
};

export default ProtectedLayout;
