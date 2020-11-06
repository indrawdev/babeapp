import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DashboardScreen = () => {
    
    return (
        <View style={styles.screen}>
            <Text>Dashboard Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DashboardScreen
