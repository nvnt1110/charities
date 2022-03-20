import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { LIGHT_GREEN, PRIMARY, WHITE } from '../constants/Colors';

const styles = StyleSheet.create({
    baseBtn: {
        backgroundColor: LIGHT_GREEN,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 390,
        height: 40,
    },
    baseTxt: {
        color: WHITE,
        fontSize: 13,
    },
});

const BaseButton = (props) => {
    const { children, styleContainer, styleContent, onPress } = props;

    return (
        <TouchableOpacity style={styleContainer === undefined ? styles.baseBtn : styleContainer} onPress={onPress}>
            <Text style={styleContent === undefined ? styles.baseTxt : styleContent}>{children}</Text>
        </TouchableOpacity>
    );
};

BaseButton.propTypes = {
    styleContainer: PropTypes.instanceOf(Object),
    styleContent: PropTypes.instanceOf(Object),
    onPress: PropTypes.func,
};

export default BaseButton;
