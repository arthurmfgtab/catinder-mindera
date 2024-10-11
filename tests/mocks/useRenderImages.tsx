import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Cat } from '../../src/types/commom';

export default function useRenderImages({ cats }: { cats: Cat[] }) {
  return {
    renderImages: () => (
      <View>
        {cats.map((cat, index) => (
          <Image
            key={cat.id}
            source={{ uri: cat.url }}
            testID={`cat-image-${index}`}
            style={styles.image}
          />
        ))}
      </View>
    ),
  };
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
