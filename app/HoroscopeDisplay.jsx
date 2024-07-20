import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const horoscopes = {
  aries: "Today is a great day to start something new.",
  taurus: "You may find unexpected opportunities coming your way.",
  gemini: "Communication is key today.",
  cancer: "Focus on home and family matters.",
  leo: "Your charisma will shine today.",
  virgo: "Pay attention to the details.",
  libra: "Balance is important today.",
  scorpio: "Embrace your passions.",
  sagittarius: "Adventure is calling.",
  capricorn: "Hard work will pay off.",
  aquarius: "Innovative ideas will come to you.",
  pisces: "Trust your intuition.",
};

const HoroscopeDisplay = ({ sign }) => {
  if (!sign) return <Text>Please select a sign to get your horoscope.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Horoscope for {sign.charAt(0).toUpperCase() + sign.slice(1)}:</Text>
      <Text style={styles.horoscope}>{horoscopes[sign]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horoscope: {
    fontSize: 18,
  },
});

export default HoroscopeDisplay;
