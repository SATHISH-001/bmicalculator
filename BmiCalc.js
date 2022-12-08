import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constants from 'react-native'

const BmiCalc = () => {
    const [weight, setWeight] = useState('')
    const [height, setheight] = useState('')
    const [bmi, setBmi] = useState('')
    const [description, setDescpiption] = useState('')

    const calculatorBmi = () => {
        const bmi = weight / ((height / 100) * (height / 100))
        //((height/100) * (height /100))
        setBmi(bmi.toFixed(1))

        if (bmi < 18.6) {
            setDescpiption('UnderWeight🧍🏼,              eat more!!!')
        }
        else if (bmi > 18.6 && bmi <= 24.9) {
            setDescpiption('Normal weight, Keep it up!!💪')
        }
        else if (bmi > 24.9 && bmi < 29.9) {
            setDescpiption('😱Overweight,start 🏋️workout..!, Avoid junk foods 🍕')
        }
        else if (bmi > 30) {
            setDescpiption('❌Obese, Hit the gym🏋️')
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>BmiCalculator</Text>
            </View>
            <TextInput
                style={styles.input}
                value={weight}
                onChangeText={(text) => setWeight(text)}
                placeholder='weight in Kg...'
                keyboardType='numeric'
            />
            <TextInput
                style={styles.input}
                value={height}
                onChangeText={(text) => setheight(text)}
                placeholder=' height in cm...'
                keyboardType='numeric'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={calculatorBmi}
            >
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
            <View style={styles.resultView}>
                <Text style={styles.result}>{bmi}</Text>
                <Text style={styles.result}>{description}</Text>
            </View>

        </View>
    )
}
export default BmiCalc;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        //backgroundColor:'#e0ecde',
        //backgroundColor:'#302399',
        backgroundColor: '#746CFE',

    },
    title: {
        //backgroundColor:'#2c6975',
        backgroundColor: '#302399',
        //backgroundColor:'#746CFE',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    titleText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    input: {
        height: 55,
        margin: 15,
        borderWidth: 1 / 2,
        padding: 10,
        borderRadius: 5,
        // backgroundColor:'#cde0c9',
        backgroundColor: '#FFFCFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        height: 55,
        margin: 15,
        borderWidth: 1 / 2,
        borderRadius: 10,
        // backgroundColor:'#68b2a0',
        //backgroundColor:'#603F83FF',
        backgroundColor: '#302399',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    resultView: {
        margin: 15,
    },
    result: {
        fontSize: 30,
        color: '#080808',
        fontWeight: 'bold',
    }

})