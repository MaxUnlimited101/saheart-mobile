import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const HoroscopeForm = ({ onSubmit }) => {
  const [sign, setSign] = useState("");

  const handleSubmit = () => {
    onSubmit(sign);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Your Zodiac Sign:</Text>
      <Picker
        selectedValue={sign}
        style={Platform.select({android: styles.pickerMobile, ios: styles.pickerMobile, default: styles.picker})}
        onValueChange={(itemValue) => setSign(itemValue)}
      >
        <Picker.Item label="--Choose a Sign--" value="" />
        <Picker.Item label="Aries" value="aries" />
        <Picker.Item label="Taurus" value="taurus" />
        <Picker.Item label="Gemini" value="gemini" />
        <Picker.Item label="Cancer" value="cancer" />
        <Picker.Item label="Leo" value="leo" />
        <Picker.Item label="Virgo" value="virgo" />
        <Picker.Item label="Libra" value="libra" />
        <Picker.Item label="Scorpio" value="scorpio" />
        <Picker.Item label="Sagittarius" value="sagittarius" />
        <Picker.Item label="Capricorn" value="capricorn" />
        <Picker.Item label="Aquarius" value="aquarius" />
        <Picker.Item label="Pisces" value="pisces" />
      </Picker>
      <Button title="Get Horoscope" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    fontSize: 18,
    color: '#ffffff', 
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  pickerMobile: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
  }
});

export default HoroscopeForm;
