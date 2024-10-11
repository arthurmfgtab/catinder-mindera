import { View } from 'react-native';
import globalStyles from '../contants/globalStyles';
import CustomText from '../components/CustomText';

export default function Chats() {
  return (
    <View style={globalStyles.container}>
      <CustomText>Chats screen</CustomText>
    </View>
  );
}
