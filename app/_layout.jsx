import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HoroscopeForm from './HoroscopeForm';
import HoroscopeDisplay from './HoroscopeDisplay';

const App = () => {
  const [selectedSign, setSelectedSign] = useState('');

  const handleFormSubmit = (sign) => {
    setSelectedSign(sign);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Horoscope Predictions</Text>
      <HoroscopeForm onSubmit={handleFormSubmit} />
      <HoroscopeDisplay sign={selectedSign} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default App;
