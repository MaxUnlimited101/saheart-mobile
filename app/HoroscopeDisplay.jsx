import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const serverUrl = 'https://saheart-server-img-5hsrtnwzea-ey.a.run.app';

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
        const response = await fetch(`${serverUrl}/${sign}`);
        const data = await response.json();

        if (response.ok) {
          setHoroscope(data.text);
        } else {
          setError(data.message || 'Failed to fetch horoscope');
        }
      } catch (err) {
        setError('Failed to fetch horoscope (error fetching)');
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscope();
  }, [sign]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Horoscope for {sign.charAt(0).toUpperCase() + sign.slice(1)}:</Text>
      <Text style={styles.horoscope}>{horoscope}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff', 
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  horoscope: {
    fontSize: 18,
    color: '#ffffff', 
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default HoroscopeDisplay;
