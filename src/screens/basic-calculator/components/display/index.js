import { all, create } from "mathjs";
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles';

const Mathjs = create(all);
const ln = (num) => Math.log(num);
ln.transform = (num) => ln(num);
Mathjs.import({ ln: ln });

const keyExtractor = (item, index) => `history_${index}`;
const BasicDisplay = forwardRef((props, ref) => {
    const [expr, setExpr] = useState('');
    const [histories, setHistories] = useState([]);
    const refDisplayer = useRef();

    useImperativeHandle(ref, () => ({
        onButtonPress: (value) => {
            setExpr(`${expr}${value}`)
        },
        onFuncPress: (value) => {
            switch (value) {
                case '%':

                    break;
                case '+-':

                    break;
                default:
                    setExpr(`${expr} ${value} `)
                    break;
            }
        },
        calculate: () => {
            let res;
            try {
                res = parseFloat(Mathjs.evaluate(expr).toFixed(4));
            } catch (e) {
                setExpr('ERROR')
            }
            if (!isNaN(res)) {
                setExpr(res);
                setHistories([...histories, `${expr} = ${res}`]);
            }
            else {
                setExpr('ERROR')
            }
        },
        clear: () => {
            expr == '' ?
                setHistories([])
                :
                setExpr('')
        }
    }))

    useEffect(() => {
        refDisplayer.current?.scrollToEnd();
    }, [histories])

    const renderHistoryItem = ({ item, index }) => {
        return (
            <Text style={styles.history_item}>{item}</Text>
        )
    }

    return (
        <View style={styles.list_result}>
            <FlatList
                ref={refDisplayer}
                data={histories}
                keyExtractor={keyExtractor}
                renderItem={renderHistoryItem}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
            <Text numberOfLines={1} style={styles.current_expr}>{expr}</Text>
        </View>
    )
})

export default BasicDisplay