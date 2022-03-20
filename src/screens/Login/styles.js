import { StyleSheet } from 'react-native';
import { GREEN, LIGHT_GREEN, PRIMARY, WHITE } from '../../common/constants/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: GREEN,
        borderBottomRightRadius: 75,
        borderBottomLeftRadius: 75,
    },
    containerForm: {
        flex: 2,
        paddingHorizontal: 12,
        marginTop: 20,
    },
    logo: {
        fontSize: 36,
        fontWeight: '900',
        color: WHITE,
    },
    input: {
        marginBottom: 10,
    },
});

export default styles;
