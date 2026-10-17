import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard
} from 'react-native';

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(null);

  const handleConvert = () => {
    if (celsius === '' || isNaN(celsius)) {
      alert('Please enter a valid number!');
      return;
    }

    const tempC = parseFloat(celsius);
    const tempF = (tempC * 9) / 5 + 32;

    setFahrenheit(tempF.toFixed(1));
    Keyboard.dismiss();
  };

  // Reset inputs
  const handleClear = () => {
    setCelsius('');
    setFahrenheit(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Temperature Converter</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Celsius (°C)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter °C (e.g., 25)"
          keyboardType="numeric"
          value={celsius}
          onChangeText={(text) => setCelsius(text)}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.convertBtn} onPress={handleConvert}>
            <Text style={styles.btnText}>Convert</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.clearBtn} onPress={handleClear}>
            <Text style={styles.btnText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      {fahrenheit !== null && (
        <View style={styles.resultCard}>
          <Text style={styles.resultLabel}>Converted Value:</Text>
          <Text style={styles.resultText}>{fahrenheit} °F</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1e293b',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    backgroundColor: '#f8fafc',
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  convertBtn: {
    flex: 1,
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  clearBtn: {
    flex: 1,
    backgroundColor: '#94a3b8',
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultCard: {
    marginTop: 20,
    backgroundColor: '#dbeafe',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  resultLabel: {
    fontSize: 16,
    color: '#1e40af',
    marginBottom: 5,
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
});