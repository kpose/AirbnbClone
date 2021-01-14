import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './styles';
import {PostProps} from '../../screens/searchresult';
import {useNavigation} from '@react-navigation/native';

const days = 7;

const Post: React.FC<{accomodation: PostProps}> = (props) => {
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

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {post: props.accomodation});
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />

      <Text style={styles.bedrooms}>
        {bed} Bed(s), {bedroom} Bedroom(s)
      </Text>

      <Text style={styles.description} numberOfLines={3}>
        {type}, {title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice}</Text>
        <Text style={styles.newPrice}> ${newPrice}</Text> / night
      </Text>

      <Text style={styles.totalPrice}> ${newPrice * days} Total </Text>
    </Pressable>
  );
};

export default Post;
