import { ScrollView, Text, View } from "react-native";

export default function ProfilScreen() {
  return (
    <ScrollView className="bg-dark p-6">
      {/* Header */}
      <View className="mt-10 mb-8">
        <Text className="text-white text-[32px] font-inter font-bold">
          PROFIL
        </Text>
        <Text className="text-grey text-lg font-bold font-inter">
          Nom Application
        </Text>
      </View>
    </ScrollView>
  );
}
