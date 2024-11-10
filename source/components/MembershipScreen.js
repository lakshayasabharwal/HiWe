import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MembershipScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/final logo.png')} // Update with the correct path to your logo
        style={styles.logo}
      />

      {/* Membership Icon */}
      <Image
        source={require('../../assets/GOLD MEMBERSHIP ICON.png')} // Update with the correct path to your membership icon
        style={styles.membershipIcon}
      />

      {/* Title and Membership Benefits */}
      <Text style={styles.title}>Join the HiWe membership!</Text>
      <View style={styles.benefitsContainer}>
        <Text style={styles.benefitItem}>+ early access to sports social events</Text>
        <Text style={styles.benefitItem}>+ merchandise coupons</Text>
        <Text style={styles.benefitItem}>+ discounted events</Text>
        <Text style={styles.benefitItem}>+ exclusive monthly members events</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    marginTop: 20,
  },
  membershipIcon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  benefitsContainer: {
    alignItems: 'flex-start',
  },
  benefitItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
});

export default MembershipScreen;
