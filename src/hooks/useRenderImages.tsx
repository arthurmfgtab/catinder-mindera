import { useCallback } from 'react';
import { Animated, Image, StyleSheet } from 'react-native';
import { Cat } from '../types/commom';
import useSwipe from './useSwipe';

interface UseRenderImagesParams {
  cats: Cat[];
  currentIndex: number;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export default function useRenderImages({
  cats,
  currentIndex,
  onSwipeLeft,
  onSwipeRight,
}: UseRenderImagesParams) {
  const { panResponder, rotateAndTranslate, nextCardOpacity } = useSwipe({
    onSwipeLeft,
    onSwipeRight,
  });

  const renderImages = useCallback(() => {
    return cats
      ?.map((image, index) => {
        if (index < currentIndex) {
          return null;
        }

        const isCurrent = index === currentIndex;

        return (
          <Animated.View
            {...(isCurrent ? panResponder.panHandlers : {})}
            key={image.id}
            style={[
              styles.picture,
              isCurrent ? rotateAndTranslate : { opacity: nextCardOpacity },
            ]}>
            <Image
              source={{ uri: image.url }}
              style={styles.image}
              resizeMode="cover"
            />
          </Animated.View>
        );
      })
      .reverse();
  }, [cats, currentIndex, panResponder, rotateAndTranslate, nextCardOpacity]);

  return { renderImages };
}

const styles = StyleSheet.create({
  picture: {
    height: 446,
    width: 343,
    backgroundColor: '#DDD',
    borderRadius: 16,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});
