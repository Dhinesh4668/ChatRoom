import react from 'react';
import {View, Text} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

function Onbord() {
  return (
    <View>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require()} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require()} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  )
}

export default Onbord
