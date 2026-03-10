import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function EntrainementScreen() {
  const router = useRouter();

  return (
    <ScrollView className="bg-dark p-6">
      {/* Header */}
      <View className="mt-10 mb-8">
        <Text className="text-white text-[32px] font-inter font-bold">
          ENTRAINEMENT
        </Text>
        <Text className="text-grey text-lg font-bold font-inter">
          Nom Application
        </Text>
      </View>

      {/* Contenu de la page */}
      <TouchableOpacity onPress={() => router.push("/newTraining")}>
        <View className="border-lightDark bg-black w-full min-h-[150px] rounded-3xl shadow-lg border-dashed border-2 items-center justify-center">
          <Text className="text-lightDark text-7xl font-inter font-light">
            +
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
