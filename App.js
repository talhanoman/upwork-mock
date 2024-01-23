import React, { useState } from "react";
import { NativeBaseProvider, Box, Heading, Button, VStack, Divider, Input, Fab, View, Text } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from "react-native";



export default function App() {
  const [password, setPassword] = useState('');
  let length = 20;
  const generateRandomPassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    setPassword(password)
  }

  const generateAlphanumericPassword = () => {    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    setPassword(password)
  }

  const generateComplexPassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+';

    const allCharacters = uppercase + lowercase + numbers + specialCharacters;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
    setPassword(password)
  }
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ height: '100%' }}>
        <View padding={10} height={'90%'}>
          <VStack justifyContent={'space-around'} flexGrow={1}>
            <Heading size={'xl'} textAlign={'center'}>Password Generator</Heading>
            <Divider />
            <Button onPress={generateAlphanumericPassword} variant={'solid'} colorScheme={'primary'}>Generate AlphaNumeric Password</Button>
            <Button onPress={generateRandomPassword} variant={'solid'} colorScheme={'primary'}>Generate Random Password</Button>
            <Button onPress={generateComplexPassword} variant={'solid'} colorScheme={'primary'}>Generate Complex Password</Button>
          </VStack>
          <Box borderWidth={1} borderColor={'gray.600'} borderRadius={'xl'} width={'100%'} padding={10}>
            <Text color={'black'}>
              {password}
            </Text>
          </Box>
        </View>
        <Fab onPress={()=> Alert.alert('Password Copied!')} renderInPortal={false} shadow={2} placement="bottom-right" size="sm" label="Copy Password" />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}