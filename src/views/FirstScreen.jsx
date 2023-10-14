import { View } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { TextInput as TextInputPaper } from 'react-native-paper';

const FirstScreen = () => {
  return (
    <View style={{ ...styles.globalMargin }}>
      <HeaderTitle title={'Inicio'} />
      <View>
        <TextInputPaper
          label="Nombre"
          keyboardType='default'
          onChangeText={(value) => console.log(value)}
          style={{ marginVertical: 20 }}
          textColor={'#000000'}
        />
      </View>
    </View>
  );
};

export default FirstScreen;
