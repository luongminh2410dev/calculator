import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { TextInput } from 'react-native';
import { Colors } from '../../utils';

const InputItem = forwardRef((props, ref) => {
    const [text, setText] = useState('');
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
            defaultValue=''
            onChangeText={setText}
            placeholderTextColor={Colors.DEFAULT_TEXT_COLOR}
            {...props} />
    )
})

export default InputItem