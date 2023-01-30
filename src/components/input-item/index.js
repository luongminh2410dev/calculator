import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { TextInput } from 'react-native';
import { Colors } from '../../utils';

const InputItem = forwardRef((props, ref) => {
    const { initialValue = '', enableSoftKeyboard = false } = props;
    const [text, setText] = useState(initialValue);

    useImperativeHandle(ref, () => ({
        getValue: () => {
            return text;
        },
        setValue: (txt) => {
            setText(txt)
        }
    }))

    return (
        <TextInput
            value={text}
            onChangeText={setText}
            placeholderTextColor={Colors.DEFAULT_TEXT_COLOR}
            showSoftInputOnFocus={enableSoftKeyboard}
            {...props} />
    )
})

export default InputItem