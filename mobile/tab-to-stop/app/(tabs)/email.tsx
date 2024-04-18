import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import email from 'react-native-email';

const Email = () => {
    const handleEmail = () => {
        const to = ['shuuullltz@gmail.com'];
        email(to, {
            checkCanOpen: false
        }).catch(console.error);
    };

    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold'
                }}>
                Have any questions? </Text>
            <Text style={{
                fontSize: 15
            }}>Send us an email with your name and any questions you have!</Text>
            <View style={{ paddingTop: 20}}> 
                <Button title="Send Email" onPress={handleEmail} />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Email;