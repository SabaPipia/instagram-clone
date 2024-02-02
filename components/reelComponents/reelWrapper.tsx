import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import { useState } from "react";
import { reelsData } from "../../config/DummyData/reelsdata";

export default function Reels() {
  return (
    <View>
      <Text style={{ fontWeight: "700", marginBottom: 10 }}>
        Suggested reels
      </Text>

      <FlatList
        data={reelsData}
        renderItem={({ item }) => {
          return (
            <Image
              style={{
                width: 120,
                height: 200,
                marginRight: 20,
                borderRadius: 10,
              }}
              source={item.img}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postImage: {
    width: "auto",
    height: 350,
    marginVertical: 10,
  },
});
