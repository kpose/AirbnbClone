import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
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
    description,
  } = props.accomodation;

  console.log('imafffge');
  console.log(image);

  return (
    <ScrollView>
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
        <Text style={styles.longDescription}>{description}</Text>
      </View>
    </ScrollView>
  );
};

export default Post;
