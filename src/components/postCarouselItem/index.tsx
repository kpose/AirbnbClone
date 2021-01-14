import React from 'react';
import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import {styles} from './styles';
import {PostProps} from '../../screens/searchresult';
import {useNavigation} from '@react-navigation/native';

const PostCarousel: React.FC<{accomodation: PostProps}> = (props) => {
  const {
    id,
    image,
    type,
    title,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice,
    coordinate,
  } = props.accomodation;

  const width = useWindowDimensions().width;

  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate('Post', {post: props.accomodation});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{uri: image}} />

        <View style={{marginHorizontal: 10, flex: 1}}>
          <Text style={styles.bedrooms}>
            {bed} Bed(s), {bedroom} Bedroom(s)
          </Text>

          <Text style={styles.description} numberOfLines={3}>
            {type}, {title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.newPrice}>${newPrice}</Text> / night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PostCarousel;
