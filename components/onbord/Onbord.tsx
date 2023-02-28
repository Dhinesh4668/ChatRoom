import react from 'react';
import {View, Text, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import  Cloude from '../../src/assets/cloude.png';
import  Connect from '../../src/assets/connect.png';
import  Secure from '../../src/assets/secure.png';
import  Speed from '../../src/assets/speed.png';


function Onbord() {
  return (
    <View>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require(Cloude)} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require(Connect)} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require(Secure)} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            // eslint-disable-next-line react/react-in-jsx-scope
            image: <Image source={require(Speed)} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  )
}

export default Onbord
