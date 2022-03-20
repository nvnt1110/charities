import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { BLACK, GREEN, LIGHT_GREEN, PRIMARY, YELLOW } from '../constants/Colors';

const styles = StyleSheet.create({
    baseInput: {
        width: 390,
        height: 40,
        borderColor: LIGHT_GREEN,
        borderWidth: 1,
        borderRadius: 2,
        paddingHorizontal: 10,
    },
});

const BaseInput = (props) => {
    const {
        styleContainer,
        placeholder,
        onSubmitEditing,
        onChangeText,
    } = props;
    return (
        <TextInput
            style={[styles.baseInput, styleContainer]}
            onChangeText={onChangeText}
            placeholder={placeholder}
            autoCorrect={false}
            autoCapitalize="none"
            onSubmitEditing={onSubmitEditing}
        />
    );
};

BaseInput.propTypes = {
    styleContainer: PropTypes.instanceOf(Object),
    placeholder: PropTypes.string,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
};

export default BaseInput;
