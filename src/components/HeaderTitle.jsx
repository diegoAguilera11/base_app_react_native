import { View, Text } from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const HeaderTitle = ({ title }) => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text
                style={{
                    ...styles.title,
                }}
            >{title}</Text>
        </View>
    );
};
