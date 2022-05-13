import {Button, View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NavigationButtons() {

    const navigation= useNavigation();

    return (
        <View style={styles.footer}>
            <Button 
                title="Atras"
                onPress={() => navigation.goBack()}
            />
            <Button 
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        justifyContent: 'space-evenly',
        flex: 0,
        backgroundColor: "#00701a",
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        width: 400,
        height: 50,
      },
})

export default NavigationButtons;