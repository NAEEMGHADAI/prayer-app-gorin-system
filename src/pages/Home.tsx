import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {IconButton} from '../components/IconButton';
import {BookComponent} from '../components/BookComponent';
import AudioComponent from '../components/AudioComponent';

const {width} = Dimensions.get('window');

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const images = [
    {id: '1', src: require('../../assets/Images/Gorin-app-image-1.png')},
    {id: '2', src: require('../../assets/Images/Gorin-app-image-1.png')},
    {id: '3', src: require('../../assets/Images/Gorin-app-image-1.png')},
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Icon/Gorin-app-logo.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/Icon/Gorin-app-nav-image.png')}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Image source={item.src} style={styles.image} />
            )}
            onScroll={handleScroll}
          />

          <View style={styles.indicatorContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentIndex === index
                    ? styles.activeIndicator
                    : styles.inactiveIndicator,
                ]}
              />
            ))}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          <IconButton
            name="Download"
            isSelected={true}
            source={require('../../assets/Icon/Gorin-app-download-icon.png')}
          />
          <IconButton
            name="Routine"
            isSelected={false}
            source={require('../../assets/Icon/Gorin-app-routine-icon.png')}
          />
          <IconButton
            name="Favorites"
            isSelected={false}
            source={require('../../assets/Icon/Gorin-app-favorites-icon.png')}
          />
          <IconButton
            name="Recents"
            isSelected={false}
            source={require('../../assets/Icon/Gorin-app-recents-icon.png')}
          />
        </View>
        <View>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: '600',
                  fontSize: 20,
                  fontFamily: 'Poppins-Bold',
                }}>
                Shiurim
              </Text>
              <Text
                style={{
                  color: '#F15223',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                (+50 Learn today)
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#5E626C',
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                }}>
                View more
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.bookContainer}>
              <BookComponent
                name="Jumash"
                topImage={require('../../assets/Images/Gorin-app-book-1.png')}
                bottomImage={require('../../assets/Images/Gorin-app-book-background-1.png')}
                progress={8}
                isComplete={false}
              />
              <BookComponent
                name="Tania"
                topImage={require('../../assets/Images/Gorin-app-book-2.png')}
                bottomImage={require('../../assets/Images/Gorin-app-book-background-2.png')}
                progress={25}
                isComplete={false}
              />
            </View>
            <View style={styles.bookContainer}>
              <BookComponent
                name="Rambam"
                topImage={require('../../assets/Images/Gorin-app-book-3.png')}
                bottomImage={require('../../assets/Images/Gorin-app-book-background-3.png')}
                progress={23}
                isComplete={true}
              />
              <BookComponent
                name="Hayom Iom"
                topImage={require('../../assets/Images/Gorin-app-book-4.png')}
                bottomImage={require('../../assets/Images/Gorin-app-book-background-4.png')}
                progress={100}
                isComplete={false}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#EBF0F1',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 50,
          }}>
          <View
            style={{
              width: '80%',
              backgroundColor: '#fff',
              borderRadius: 20,
            }}>
            <View
              style={{
                padding: 20,
              }}>
              <Image
                source={require('../../assets/Icon/Gorin-app-quote-img.png')}
                style={{
                  marginVertical: 10,
                  width: 30,
                  height: 30,
                  resizeMode: 'cover',
                }}
              />
              <Text
                style={{
                  color: '#000000B2',
                  fontSize: 14,
                  fontWeight: '400',
                  lineHeight: 26,
                  fontFamily: 'Prata-Regular',
                }}>
                In that era, there will be neither famine or war, envy or
                competition, for good will flow in abundance and all the
                delightswill be freely available as dust. The occupation of the
                entire world will be solerly to know G-d.
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: '400',
                  lineHeight: 24,
                  marginVertical: 10,
                  fontFamily: 'Prata-Regular',
                }}>
                - Mishneh Tarah
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              margin: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#000000',
                fontWeight: '600',
                fontSize: 20,
                fontFamily: 'Poppins-Bold',
              }}>
              Nigunim
            </Text>
            <Text
              style={{
                color: '#5E626C',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Regular',
              }}>
              View more
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              // marginVertical: 10,
              marginTop: 100,
              marginBottom: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <AudioComponent
              topImage={require('../../assets/Images/Gorin-app-audio-track-1.png')}
              name="Calm Jewish"
              category="to relax"
              bookmark="43 session"
            />
            <AudioComponent
              topImage={require('../../assets/Images/Gorin-app-audio-track-2.png')}
              name="Chabod Ni..."
              category="chabad music"
              bookmark="43 session"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../../assets/Icon/Gorin-app-logo.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../../assets/Icon/Gorin-app-Closses.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.navText2}>Closses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../../assets/Icon/Gorin-app-Giving.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.navText2}>Giving</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={require('../../assets/Icon/Gorin-app-Profile.png')}
            style={styles.iconStyle}
          />
          <Text style={styles.navText2}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselWrapper: {
    width: width, // Ensure FlatList spans full screen width
    alignSelf: 'center', // Center the FlatList within the container
  },
  image: {
    width: width,
    height: 250,
    resizeMode: 'contain',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#F15223',
  },
  inactiveIndicator: {
    backgroundColor: '#D9D9D9',
  },
  bookContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  bottomNav: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 80,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: -2},
    shadowRadius: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  navText2: {
    color: '#BDBDBD',
    fontSize: 14,
    fontWeight: '500',
  },
  iconStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginBottom: 5,
  },
});
