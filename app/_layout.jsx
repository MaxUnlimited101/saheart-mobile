import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import HoroscopeForm from './HoroscopeForm';
import HoroscopeDisplay from './HoroscopeDisplay';
import { ImageBackground } from 'react-native';

const App = () => {
  const [selectedSign, setSelectedSign] = useState('');
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (sign) => {
    setLoading(true);
    setSelectedSign(sign);

    try {
      const response = await fetch(`http://localhost:5058/cancer`);
      const data = await response.json();

      if (response.ok) {
        setBackgroundUrl(data.pathToImage);
      } else {
        setError(data.message || 'Failed to fetch background image');
      }
    } catch (err) {
      setError('Failed to fetch horoscope (error fetching)');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ImageBackground source={{ uri: `http://localhost:5058/${backgroundUrl}` }} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Horoscope Predictions</Text>
        <HoroscopeForm onSubmit={handleFormSubmit} />
        {selectedSign && <HoroscopeDisplay sign={selectedSign} />}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#a83297', // Ensure text is visible on background
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default App;
