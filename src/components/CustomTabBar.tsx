import { StyleSheet, View } from 'react-native';
import Touchable from './Touchable';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import colors from '../contants/colors';
import globalStyles from '../contants/globalStyles';
import { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';
import { CatIcon, ChatsIcon, ProfileIcon } from '../assets/svg';

function getIcon(route: string): FunctionComponent<SvgProps> {
  const mapping: Record<string, React.FC<SvgProps>> = {
    Feed: CatIcon,
    Chats: ChatsIcon,
    Profile: ProfileIcon,
  };

  return mapping[route];
}

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View style={[styles.tabBarContainer, globalStyles.shadow]}>
      {state.routes.map(({ key }, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? colors.pink : colors.dark;
        const Icon = getIcon(state.routes[index].name);

        return (
          <Touchable
            key={key}
            style={globalStyles.container}
            testID={`tab-bar-${state.routes[index].name}`}
            onPress={() => navigation.navigate(state.routes[index].name)}>
            <Icon color={color} />
          </Touchable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 44,
    width: 156,
    alignSelf: 'center',
    borderRadius: 100,
    marginBottom: 20,
  },
});
