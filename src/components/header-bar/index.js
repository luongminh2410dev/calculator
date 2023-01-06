import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const HeaderBar = (props) => {
    const { title = '', customRightButton = () => null } = props;
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.header}>
            <View style={styles.header_left}>
                <TouchableOpacity onPress={handleGoBack} style={styles.back_btn}>
                    <Feather name='chevron-left' size={26} color='white' />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            {customRightButton()}
        </View>
    )
}

export default HeaderBar