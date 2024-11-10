import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutYouScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/final logo.png')}
        style={styles.logo}
      />

      {/* Profile Picture */}
      <Image
        source={require('../../assets/v.png')} // Replace with the path to the profile picture you have
        style={styles.profilePicture}
      />

      {/* User Information */}
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>Name: Vanshika Doe</Text>
        <Text style={styles.userInfoText}>Phone Number: +91 9876543210</Text>
        <Text style={styles.userInfoText}>Email ID: vanshika@gmail.com</Text>
        <Text style={styles.userInfoText}>Location: Delhi</Text>
      </View>

      {/* Registered Upcoming Events */}
      <Text style={styles.eventsHeader}>Registered upcoming events</Text>
      <View style={styles.eventItem}>
        <View style={styles.eventIconContainer}>
          <Image
            source={require('../../assets/bicycle.png')} // Replace with the correct path to your event icon
            style={styles.eventIcon}
          />
        </View>
        <View style={styles.eventDetails}>
          <Text style={styles.eventDate}>Nov 2 | Saturday | 6am-8am</Text>
          <Text style={styles.eventName}>EXPLORING QILA RAI PITHORA ; CYCLING</Text>
        </View>
      </View>

      <View style={styles.eventItem}>
        <View style={styles.eventIconContainer}>
          <Image
            source={require('../../assets/soccer-ball-variant.png')} // Replace with the correct path to your event icon
            style={styles.eventIcon}
          />
        </View>
        <View style={styles.eventDetails}>
          <Text style={styles.eventDate}>Nov 7 | Thursday | 7:30am-9:30am</Text>
          <Text style={styles.eventName}>BEGINNERS FOOTBALL LESSONS</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginVertical: 20,
  },
  userInfo: {
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  userInfoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  eventsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 10,
    elevation: 2,
  },
  eventIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#ffcc00',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  eventIcon: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
  },
  eventDetails: {
    flex: 1,
  },
  eventDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  eventName: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default AboutYouScreen;
