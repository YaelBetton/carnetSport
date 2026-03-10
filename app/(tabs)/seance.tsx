import { ScrollView, Text, View } from "react-native";

export default function SeanceScreen() {
  return (
    <ScrollView className="bg-dark p-6">
      {/* Header */}
      <View className="mt-10 mb-8">
        <Text className="text-white text-[32px] font-inter font-bold">
          SEANCE
        </Text>
        <Text className="text-grey text-lg font-bold font-inter">
          Nom Application
        </Text>
      </View>
    </ScrollView>
  );
}
