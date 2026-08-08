import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.center}>
        <Text style={styles.h1}>Harmonic Musics</Text>
        <View style={styles.space} />
        <Text style={styles.h1}>Login</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
        <Button
          title="Login"
          onPress={() => {
            if (email.trim() && password.trim()) {
              onLogin();
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    marginVertical: 10,
  },
  space: {
    height: 18,
  },
  input: {
    width: '100%',
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#777777',
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginVertical: 10,
    color: '#000000',
  },
});
