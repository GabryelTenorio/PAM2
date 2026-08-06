import React, { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const baseUrl = 'https://raw.githubusercontent.com/GabryelTenorio/PW3/main/3bi-2026/31-07-2026';

const imagens = [
  'images (1).jpg',
  'images (2).jpg',
  'images (3).jpg',
  'images (4).jpg',
  'images (5).jpg',
  'images (6).jpg',
  'images.jpg',
  'download (1).jpg',
  'download.jpg',
];

function Login({ onLogin }) {
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

function Home() {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.h1}>Olá Usuário</Text>
        <Text style={styles.h2}>Suas Junkbox</Text>

        {imagens.map((nome) => (
          <Image
            key={nome}
            source={{ uri: `${baseUrl}/${encodeURIComponent(nome)}` }}
            style={styles.image}
            resizeMode="contain"
          />
        ))}

        <Text style={styles.h2}>Músicas Em Alta</Text>
        <Text style={styles.h2}>Suas Playlist</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return <Home />;
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
  content: {
    padding: 8,
  },
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    marginVertical: 10,
  },
  h2: {
    fontSize: 24,
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
  image: {
    width: '100%',
    height: 220,
    marginBottom: 4,
  },
});
