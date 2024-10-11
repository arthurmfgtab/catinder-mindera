import { View } from 'react-native';
import globalStyles from '../contants/globalStyles';
import CustomText from '../components/CustomText';

export default function Profile() {
  return (
    <View style={globalStyles.container}>
      <CustomText>Profile screen</CustomText>
    </View>
  );
}
