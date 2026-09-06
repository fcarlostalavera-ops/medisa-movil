import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: '#3730A3',
        tabBarInactiveTintColor: '#8E8E93',
        
        tabBarStyle: {
          backgroundColor: '#F8FAFC',
          height: 105, 
          paddingBottom: 30, 
          paddingTop: 8,
          
          borderTopWidth: 1,
          borderTopColor: '#E2E8F0',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          
          position: 'absolute', 
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 2,
        }
      }}
    >
      {/* 1. Inicio */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size + 2} color={color} />
          ),
        }}
      />

      {/* 2. Recetas */}
      <Tabs.Screen
        name="recetas"
        options={{
          title: 'Recetas',
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons name={focused ? 'food-apple' : 'food-apple-outline'} size={size + 2} color={color} />
          ),
        }}
      />

      {/* 3. Alertas */}
      <Tabs.Screen
        name="alertas"
        options={{
          title: 'Alertas',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name={focused ? 'alarm' : 'alarm-outline'} size={size + 4} color={color} />
          ),
        }}
      />

      {/* 4. Consejos */}
      <Tabs.Screen
        name="consejos"
        options={{
          title: 'Consejos',
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons name={focused ? 'head-cog' : 'head-cog-outline'} size={size + 4} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}