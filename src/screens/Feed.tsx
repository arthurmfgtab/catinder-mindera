import { ActivityIndicator, StyleSheet, View } from 'react-native';
import globalStyles from '../contants/globalStyles';
import PremiumAreaToggle from '../components/PremiumAreaToggle';
import { FeedViewType } from '../types/commom';
import { useState } from 'react';
import Touchable from '../components/Touchable';
import { HeartIcon, XIcon } from '../assets/svg';
import useFetchCats from '../hooks/useFetchCats';
import colors from '../contants/colors';
import useRenderImages from '../hooks/useRenderImages';
import CustomText from '../components/CustomText';
import useVoteForCat from '../hooks/useVoteForCat';

export default function Feed() {
  const [viewType, setViewType] = useState<FeedViewType>('fire');
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: cats, isLoading, error } = useFetchCats();
  const { mutate: voteForCat } = useVoteForCat();

  const { renderImages } = useRenderImages({
    cats: cats || [],
    currentIndex,
    onSwipeLeft,
    onSwipeRight,
  });

  function onSwipeLeft() {
    if (cats && cats[currentIndex]) {
      voteForCat({ imageId: cats[currentIndex].id, value: -1 });
    }
    setCurrentIndex(prev => prev + 1);
  }

  function onSwipeRight() {
    if (cats && cats[currentIndex]) {
      voteForCat({ imageId: cats[currentIndex].id, value: 1 });
    }
    setCurrentIndex(prev => prev + 1);
  }

  if (isLoading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View style={globalStyles.container}>
        <CustomText>
          Error fetching cats:{' '}
          {error instanceof Error ? error.message : 'Unknown error'}
        </CustomText>
      </View>
    );
  }

  return (
    <>
      <PremiumAreaToggle
        selectedItem={viewType}
        containerStyle={styles.premiumAreaToggle}
        onSelect={setViewType}
      />

      <View style={styles.content}>
        {viewType === 'star' ? (
          <CustomText>Premium area (?)</CustomText>
        ) : (
          <>
            <View style={styles.swiperContainer}>{renderImages()}</View>
            <View style={styles.ctaContainer}>
              <Touchable
                style={styles.cta}
                onPress={onSwipeLeft}
                testID="discard-button">
                <XIcon />
              </Touchable>
              <Touchable
                style={styles.cta}
                onPress={onSwipeRight}
                testID="like-button">
                <HeartIcon />
              </Touchable>
            </View>
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  premiumAreaToggle: {
    marginVertical: 30,
  },
  content: {
    alignItems: 'center',
  },
  swiperContainer: {
    height: 446,
    width: 343,
    marginBottom: 50,
  },
  ctaContainer: {
    flexDirection: 'row',
    gap: 40,
  },
  cta: {
    ...globalStyles.shadow,
    borderRadius: 100,
    aspectRatio: 1,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    height: 446,
    width: 343,
    backgroundColor: colors.darkGrey,
    borderRadius: 16,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});
