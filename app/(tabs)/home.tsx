import { useRouter } from "expo-router";
import { Zap } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView className="bg-dark p-6">
      {/* Header */}
      <View className="mt-10 mb-8">
        <Text className="text-white text-[32px] font-inter font-bold">
          DASHBOARD
        </Text>
        <Text className="text-grey text-lg font-bold font-inter">
          Nom Application
        </Text>
      </View>

      {/* Séance du jour */}
      <View className="bg-lightDark w-full min-h-[200px] rounded-3xl p-6 shadow-lg border-grey/20 border">
        {/* Première ligne : header + icône */}
        <View className="flex-row items-center justify-between mb-4">
          <View>
            <Text className="text-lightBlue font-roboto font-extrabold text-2xl tracking-widest text-[10px]">
              PÉRIODISATION
            </Text>
            <Text className="text-white font-roboto font-extrabold text-[15px]">
              NOM DE LA SÉANCE
            </Text>
          </View>

          <View className="bg-darkBlue/20 p-4 h-16 w-16 rounded-2xl items-center justify-center">
            <Zap
              color="#60A5FA"
              size={32}
              fill="none"
              stroke="#60A5FA"
              strokeWidth={1.5}
            />
          </View>
        </View>

        {/* Barre de progression à modif*/}
        <View className="bg-lightBlue w-full h-2 rounded-full mt-6" />

        <View className="flex-row items-center justify-between mt-4">
          <Text className="text-grey text-[10px] font-roboto font-bold tracking-widest">
            INTENSIFICATION
          </Text>
          <Text className="text-white font-roboto font-bold text-sm">
            S14/22
          </Text>
        </View>

        <TouchableOpacity
          className="bg-lightBlue w-full h-14 rounded-2xl mt-6 items-center justify-center"
          onPress={() => router.push("/seance")}
        >
          <Text className="text-white text-center text-[14px] text-sm font-roboto font-extrabold">
            LANCER LA SÉANCE
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
