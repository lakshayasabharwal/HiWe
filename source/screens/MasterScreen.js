import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import CalendarScreen from '../components/CalendarScreen';
import MembershipScreen from '../components/MembershipScreen';
import ProgressScreen from '../components/ProgressScreen';
import AboutYouScreen from '../components/AboutYouScreen';

const MasterScreen = () => {
  // State to keep track of the active screen
  const [activeScreen, setActiveScreen] = useState('Calendar');

  // Function to render the correct screen
  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'Calendar':
        return <CalendarScreen />;
      case 'Membership':
        return <MembershipScreen />;
      case 'Progress':
        return <ProgressScreen />;
      case 'AboutYou':
        return <AboutYouScreen />;
      default:
        return <CalendarScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Main Content - Render Active Screen */}
      <View style={styles.contentContainer}>{renderActiveScreen()}</View>

      {/* Footer with Custom Navigation Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveScreen('Calendar')}
        >
          <Image
            source={require('../../assets/final logo.png')}
            style={[styles.icon, activeScreen === 'Calendar' ? styles.iconFocused : null]}
          />
          <Text style={activeScreen === 'Calendar' ? styles.labelFocused : styles.label}>
            Calendar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveScreen('Membership')}
        >
          <Image
            source={require('../../assets/GOLD MEMBERSHIP ICON.png')}
            style={[styles.icon, activeScreen === 'Membership' ? styles.iconFocused : null]}
          />
          <Text style={activeScreen === 'Membership' ? styles.labelFocused : styles.label}>
            Membership
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveScreen('Progress')}
        >
          <Image
            source={require('../../assets/Untitled_Artwork__21_-removebg-preview.png')}
            style={[styles.icon, activeScreen === 'Progress' ? styles.iconFocused : null]}
          />
          <Text style={activeScreen === 'Progress' ? styles.labelFocused : styles.label}>
            Progress
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveScreen('AboutYou')}
        >
          <Image
            source={require('../../assets/info_11584501.png')}
            style={[styles.icon, activeScreen === 'AboutYou' ? styles.iconFocused : null]}
          />
          <Text style={activeScreen === 'AboutYou' ? styles.labelFocused : styles.label}>
            About You
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#e6e6e6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#f1c27d',
  },
  iconFocused: {
    tintColor: '#ffcc00',
  },
  label: {
    fontSize: 12,
    color: '#808080',
  },
  labelFocused: {
    fontSize: 12,
    color: '#ffcc00',
    fontWeight: 'bold',
  },
});

export default MasterScreen;
