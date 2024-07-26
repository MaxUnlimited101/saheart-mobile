import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const HoroscopeDisplay = ({ sign }) => {
  const [horoscope, setHoroscope] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sign) return;

    const fetchHoroscope = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:5058/${sign}`);
        const data = await response.json();
        if (response.ok) {
          setHoroscope(data["text"]);
        } else {
          setError(data["text"] || 'Failed to fetch horoscope (error message)');
        }
      } catch (err) {
        setError('Failed to fetch horoscope (error fetching)');
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscope();
  }, [sign]);

  if (!sign) return <Text>Please select a sign to get your horoscope.</Text>;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <>
          <Text style={styles.header}>Your Horoscope for {sign.charAt(0).toUpperCase() + sign.slice(1)}:</Text>
          <Text style={styles.horoscope}>{horoscope}</Text>
        </>
      )}
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
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default HoroscopeDisplay;
