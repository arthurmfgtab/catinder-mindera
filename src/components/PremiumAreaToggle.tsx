import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Touchable from './Touchable';
import { useCallback } from 'react';
import { FireIcon, StarIcon } from '../assets/svg';
import colors from '../contants/colors';
import { FeedViewType } from '../types/commom';

type Props = {
  selectedItem: FeedViewType;
  containerStyle?: StyleProp<ViewStyle>;
  onSelect: (item: FeedViewType) => void;
};

export default function PremiumAreaToggle({
  selectedItem,
  containerStyle,
  onSelect,
}: Props) {
  const toggleItem = useCallback(() => {
    onSelect(selectedItem === 'fire' ? 'star' : 'fire');
  }, [selectedItem, onSelect]);

  const _containerStyle = StyleSheet.flatten([
    styles.container,
    containerStyle,
  ]);

  return (
    <Touchable
      style={_containerStyle}
      onPress={toggleItem}
      testID="premium-area-toggle">
      {['fire', 'star'].map(item => (
        <View
          key={item}
          style={[
            styles.selectableItem,
            {
              backgroundColor:
                item === selectedItem ? colors.background : colors.grey,
            },
          ]}>
          {item === 'fire' ? (
            <FireIcon
              color={item === selectedItem ? colors.pink : colors.darkGrey}
            />
          ) : (
            <StarIcon
              color={item === selectedItem ? colors.yellow : colors.darkGrey}
            />
          )}
        </View>
      ))}
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 84,
    height: 28,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    borderRadius: 28,
    padding: 2,
    alignSelf: 'center',
  },
  selectableItem: {
    flex: 1,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
