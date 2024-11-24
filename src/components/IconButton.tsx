import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export const IconButton = ({
  name,
  isSelected,
  source,
}: {
  name: string;
  isSelected: boolean;
  source: ImageSourcePropType;
}) => {
  const styles = StyleSheet.create({
    touchable: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 20, // Optional: Adds a rounded corner effect
      // borderWidth: 1,
      // borderColor: '#C0C4EA73',
      // Android shadow
      elevation: 5,
      width: 70,
      height: 70,
      marginBottom: 10,
      // iOS shadow
      shadowColor: '#C0C4EA', // Shadow color
      shadowOffset: {width: 10, height: 10}, // Position of the shadow
      shadowOpacity: 1, // Transparency of the shadow
      shadowRadius: 30, // Blur radius
    },
  });
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity style={styles.touchable}>
        <Image
          source={source}
          style={{
            height: 30,
            width: 30,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: isSelected ? '#081638' : '#5E626C',
          fontSize: 14,
          fontWeight: '400',
          fontFamily: isSelected ? 'Poppins-SemiBold' : 'Poppins-Regular',
        }}>
        {name}
      </Text>
    </View>
  );
};
