import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  ChartLine,
  Dumbbell,
  LayoutDashboard,
  User,
  Zap,
} from "lucide-react-native";
import { StyleSheet, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // Couleurs des icônes et texte
        tabBarActiveTintColor: "#3B82F6",
        tabBarInactiveTintColor: "#71717A",

        // Style de la barre entière
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#18181B",
          borderColor: "#27272A",
          borderWidth: 1,
          height: 100,
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: 10,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },

        // Style des labels (textes)
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 100,
          fontFamily: "Inter",
          marginTop: 4,
          width: 80,
          textAlign: "center",
        },

        // Style des icônes
        tabBarIconStyle: {
          marginTop: 5,
        },

        // Autres options
        tabBarShowLabel: true,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color }) => (
            <LayoutDashboard size={28} color={color} strokeWidth={1.2} />
          ),
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          title: "Entrainement",
          tabBarIcon: ({ color }) => (
            <Dumbbell size={28} color={color} strokeWidth={1.2} />
          ),
        }}
      />

      {/* Bouton central surélevé */}
      <Tabs.Screen
        name="seance"
        options={{
          title: "",
          tabBarShowLabel: true,
          tabBarIcon: ({ focused }) => (
            <View style={styles.centralButton}>
              <Zap size={32} color="#ffffff" fill="#ffffff" strokeWidth={0} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="analysis"
        options={{
          title: "Analyses",
          tabBarIcon: ({ color }) => (
            <ChartLine size={28} color={color} strokeWidth={1.2} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <User size={28} color={color} strokeWidth={1.2} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  centralButton: {
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    shadowRadius: 8,
    elevation: 8,
  },
});
