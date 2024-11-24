import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export const BookComponent = ({
  name,
  topImage,
  bottomImage,
  progress,
  isComplete,
}: {
  name: string;
  topImage: ImageSourcePropType;
  bottomImage: ImageSourcePropType;
  progress: number;
  isComplete: boolean;
}) => {
  const Tag = ({icon, label}: {icon: ImageSourcePropType; label: string}) => {
    return (
      <View style={styles.tagContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{label}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    imageContainer: {
      position: 'relative', // Ensures the images can overlap
    },
    bottomImage: {
      width: '85%',
      height: 200,
      resizeMode: 'contain',
    },
    topImage: {
      width: '70%',
      height: 160,
      resizeMode: 'cover',
      position: 'absolute', // Allows overlapping
      top: -20, // Vertical offset
      borderRadius: 10,
      left: '8%',
    },
    bookName: {
      fontSize: 18,
      fontWeight: '500',
      color: '#000000',
      marginTop: 10,
      marginBottom: 14,
      fontFamily: 'Poppins-Regular',
    },
    tagContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      backgroundColor: '#EBF0F1',
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 2,
    },
    tagParentContainer: {
      flexDirection: 'row',
      gap: 10,
    },
    text: {
      color: '#5E626C',
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
    },
    icon: {
      width: 16, // Adjust icon size as needed
      height: 16,
      resizeMode: 'contain',
    },
    progressBar: {
      width: '100%',
      height: 6,
      backgroundColor: '#EBF0F1',
      borderRadius: 3,
      overflow: 'hidden',
      marginBottom: 5,
    },
    progress: {
      height: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: 3,
    },
  });

  return (
    <TouchableOpacity
      style={{
        width: '50%',
      }}>
      <View style={styles.imageContainer}>
        <Image source={bottomImage} style={styles.bottomImage} />
        <Image source={topImage} style={styles.topImage} />
        {isComplete ? (
          <View
            style={{
              position: 'absolute',
              bottom: 15,
              marginLeft: '7%',
              width: '70%',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 12,
                fontWeight: '400',
                fontFamily: 'Poppins-Regular',
              }}>
              Time to read
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
              }}>
              <Image source={require('../../assets/Icon/time-icon.png')} />
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 12,
                  fontWeight: '400',
                  fontFamily: 'Poppins-Regular',
                }}>
                2hrs 30 min
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              position: 'absolute',
              bottom: 15,
              marginLeft: '7%',
              width: '70%',
            }}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, {width: `${progress}%`}]} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                {progress}%
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 4,
                }}>
                <Image source={require('../../assets/Icon/time-icon.png')} />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: 'Poppins-Regular',
                  }}>
                  4 min
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
      <Text style={styles.bookName}>{name}</Text>
      <View style={styles.tagParentContainer}>
        <Tag
          icon={require('../../assets/Icon/Gorin-app-audio-icon.png')}
          label="Audio"
        />
        <Tag
          icon={require('../../assets/Icon/Gorin-app-video-icon.png')}
          label="Video"
        />
      </View>
    </TouchableOpacity>
  );
};
