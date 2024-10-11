import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export default function Touchable(props: TouchableOpacityProps) {
  return <TouchableOpacity {...props} activeOpacity={0.75} />;
}
