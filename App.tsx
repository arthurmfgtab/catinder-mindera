import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Feed from './src/screens/Feed';
import Chats from './src/screens/Chats';
import Profile from './src/screens/Profile';
import { CustomTabBar } from './src/components/CustomTabBar';
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from './src/contants/colors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Tab = createBottomTabNavigator();

export const queryClient = new QueryClient();

const screenOptions = {
  headerShown: false,
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={CustomTabBar}
            sceneContainerStyle={styles.tabs}
            screenOptions={screenOptions}>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
  tabs: {
    backgroundColor: colors.background,
  },
});
