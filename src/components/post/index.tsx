import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {PostProps} from '../../screens/searchresult';

const Post: React.FC<{accomodation: PostProps}> = (props) => {
  const {
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

  return (
    <View style={styles.container}>
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

      <Text style={styles.totalPrice}> ${totalPrice} Total </Text>
    </View>
  );
};

export default Post;
