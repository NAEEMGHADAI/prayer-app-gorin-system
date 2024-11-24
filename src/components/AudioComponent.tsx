import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AudioComponent = ({
  name,
  category,
  topImage,
  bookmark,
}: {
  name: string;
  category: string;
  topImage: ImageSourcePropType;
  bookmark: string;
}) => {
  return (
    <View
      style={{
        width: '49%',
      }}>
      <View style={styles.container}>
        <Image source={topImage} style={styles.topImage} />
        <View style={styles.bottomDiv}>
          <View
            style={{
              marginTop: 80,
              flexDirection: 'row',
              marginLeft: 10,
              alignItems: 'center',
              gap: 10,
            }}>
            <Image
              source={require('../../assets/Icon/Gorin-app-music-icon.png')}
            />
            <Text
              style={{
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
              }}>
              {name}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '300',
                fontFamily: 'Poppins-Regular',
                color: '#5E626C',
                marginLeft: 10,
              }}>
              {category}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              alignItems: 'center',
              gap: 10,
            }}>
            <Image
              source={require('../../assets/Icon/Gorin-app-bookmark-icon.png')}
            />
            <Text
              style={{
                color: '#5E626C',
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}>
              {bookmark}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AudioComponent;

const styles = StyleSheet.create({
  container: {
    position: 'relative', // Ensures the images can overlap
  },
  topImage: {
    width: '70%',
    height: 160,
    resizeMode: 'cover',
    position: 'absolute', // Allows overlapping
    top: -100, // Vertical offset
    borderRadius: 10,
    left: '10%',
    zIndex: 10,
    // elevation: 6,
  },
  bottomDiv: {
    width: '90%',
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#C0C4EA', // Shadow color
    elevation: 5,
    shadowOffset: {width: 10, height: 10}, // Position of the shadow
    shadowOpacity: 1, // Transparency of the shadow
    shadowRadius: 30, // Blur radius
    gap: 5,
  },
});
