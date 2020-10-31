import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const PostDetailScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text>Post Detail Screen</Text>
            <Button
                title="Go To Category Posts"
                onPress={() => navigation.navigate('CategoryPosts')} />
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

export default PostDetailScreen
