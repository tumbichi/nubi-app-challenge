import {useState} from 'react';
import {Dimensions, View} from 'react-native';

import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {createStyleSheet, useStyles} from '@/Base/theme';

import {CardData} from '@/Auth/data/AuthRepository';
import BankCard from '@/Card/components/BankCard';

import CarouselDot from './CarouselDot';

interface MyBankCardsCarouselProps {
  cards: CardData[];
}

const {width} = Dimensions.get('window');
const CARD_WIDTH = Math.round(width * 0.8);

const BankCardsCarousel = ({cards}: MyBankCardsCarouselProps) => {
  const {styles} = useStyles(stylesheet);

  const scrollXOffset = useSharedValue(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollXOffset.value = withSpring(event.contentOffset.x, {
        damping: 18,
        stiffness: 120,
      });
    },
    onMomentumEnd: event => {
      const scrollOffset = event.contentOffset.x;
      scrollXOffset.value = withSpring(scrollOffset, {
        damping: 18,
        stiffness: 120,
      });
      if (scrollOffset === 0) {
        runOnJS(setActiveCardIndex)(0);
      } else {
        runOnJS(setActiveCardIndex)(Math.ceil(scrollOffset / CARD_WIDTH));
      }
    },
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        decelerationRate={0}
        scrollEventThrottle={16}
        onScroll={scrollHandler}>
        {cards.map((card, index) => (
          <View
            key={card.all_digits}
            style={[
              styles.cardContainer,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                marginRight: index + 1 === cards.length ? 0 : 12,
              },
            ]}>
            <BankCard card={card} />
          </View>
        ))}
      </Animated.ScrollView>
      <View style={styles.dotsContainer}>
        {cards.map((card, index) => (
          <CarouselDot
            key={`${card.all_digits}-dot`}
            isActive={index === activeCardIndex}
          />
        ))}
      </View>
    </View>
  );
};

export default BankCardsCarousel;

const stylesheet = createStyleSheet(theme => ({
  container: {
    gap: theme.spacing.md,
  },
  scrollContainer: {paddingHorizontal: theme.spacing.lg},
  cardContainer: {
    width: CARD_WIDTH,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
  },
}));
