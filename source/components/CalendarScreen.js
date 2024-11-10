import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HealthScreenInfo from '../screens/HealthScreenInfo'; // Importing the HealthInfo component directly

const CalendarScreen = () => {
  const [showHealthScreen, setShowHealthScreen] = useState(false);

  const handleEventClick = (eventName) => {
    if (eventName === 'Cycling') {
      setShowHealthScreen(true); // Change state to show the HealthInfo screen
    }
  };

  // If state is set to show HealthScreen, render it instead of the Calendar screen
  if (showHealthScreen) {
    return <HealthScreenInfo />;
  }

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/final logo.png')} // Replace with the correct path to your logo
        style={styles.logo}
      />

      {/* Calendar Events */}
      <View style={styles.calendarContainer}>
        <View style={styles.eventRow}>
          <View style={styles.event}>
            <Text style={styles.dateText}>01 NOV</Text>
            <Text style={styles.dayText}>FRI</Text>
            <Image source={require('../../assets/badminton.png')} style={styles.eventIcon} />
          </View>

          <View style={styles.event}>
            <Text style={styles.dateText}>02 NOV</Text>
            <Text style={styles.dayText}>SAT</Text>
            <TouchableOpacity onPress={() => handleEventClick('Cycling')}>
              <Image source={require('../../assets/bicycle.png')} style={styles.eventIconHighlighted} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Additional Events */}
        <View style={styles.eventRow}>
          <View style={styles.event}>
            <Text style={styles.dateText}>03 NOV</Text>
            <Text style={styles.dayText}>SUN</Text>
            <Image source={require('../../assets/soccer-ball-variant.png')} style={styles.eventIcon} />
          </View>

          <View style={styles.event}>
            <Text style={styles.dateText}>04 NOV</Text>
            <Text style={styles.dayText}>MON</Text>
            <Image source={require('../../assets/ping-pong.png')} style={styles.eventIcon} />
          </View>
        </View>

        {/* More Events */}
        <View style={styles.eventRow}>
          <View style={styles.event}>
            <Text style={styles.dateText}>05 NOV</Text>
            <Text style={styles.dayText}>TUE</Text>
            <Image source={require('../../assets/roller-skate.png')} style={styles.eventIcon} />
          </View>
          <View style={styles.event}>
            <Text style={styles.dateText}>06 NOV</Text>
            <Text style={styles.dayText}>WED</Text>
            <Image source={require('../../assets/bicycle.png')} style={styles.eventIcon} />
          </View>
        </View>

        <View style={styles.eventRow}>
          <View style={styles.event}>
            <Text style={styles.dateText}>07 NOV</Text>
            <Text style={styles.dayText}>THUR</Text>
            <Image source={require('../../assets/skateboard.png')} style={styles.eventIcon} />
          </View>
          <View style={styles.event}>
            <Text style={styles.dateText}>08 NOV</Text>
            <Text style={styles.dayText}>FRI</Text>
            <Image source={require('../../assets/field-hockey.png')} style={styles.eventIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  calendarContainer: {
    flex: 1,
    marginTop: 20,
  },
  eventRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  event: {
    width: '45%',
    padding: 10,
    backgroundColor: '#d2d2a8',
    borderRadius: 10,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dayText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  eventIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  eventIconHighlighted: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    tintColor: '#ff6600', // Highlight color for cycling
  },
});

export default CalendarScreen;
