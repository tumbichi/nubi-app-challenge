import {useCallback, useState} from 'react';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {createStyleSheet, useStyles} from '@/Base/theme';
import {Button, Text} from '@/Base/components';
import {EyeIcon, EyeOffIcon, VisaIcon} from '@/Base/assets/icons';
import formatPrice from '@/Base/utils/formatters/formatPrice';

import {CardData} from '@/Auth/data/AuthRepository';

interface BankCardProps {
  card: CardData;
}

const cardColors = {
  VIRTUAL: {
    main: '#182A4C',
    light: '#233E6E',
    dark: '#0E1829',
  },
  PHYSICAL: {
    main: '#371748',
    light: '#4E2265',
    dark: '#4E2265',
  },
};

const BankCard = ({card}: BankCardProps) => {
  const {t} = useTranslation('home');
  const [secureBalance, setSecureBalance] = useState(false);
  const {styles} = useStyles(stylesheet);

  const toogleSecureBalance = useCallback(() => {
    setSecureBalance(prev => !prev);
  }, []);

  return (
    <View
      style={[styles.container, {backgroundColor: cardColors[card.kind].main}]}>
      <View
        style={[
          styles.bgCircleRight,
          {backgroundColor: cardColors[card.kind].light},
        ]}
      />
      <View
        style={[
          styles.bgCircleLeft,
          {backgroundColor: cardColors[card.kind].dark},
        ]}
      />
      <View>
        <Text style={styles.balanceLabel}>{t('cards.label.balance')}</Text>
        <View style={styles.balanceValueContainer}>
          <Text style={styles.balanceValue}>
            {secureBalance
              ? '$ ***'
              : formatPrice(
                  parseFloat((parseInt(card.balance, 10) / 100).toFixed(2)),
                )}
          </Text>
          <Button
            variant="unstyled"
            style={styles.secureBalanceContainer}
            onPress={toogleSecureBalance}>
            {secureBalance ? (
              <EyeOffIcon color="white" height={20} width={20} />
            ) : (
              <EyeIcon color="white" height={20} width={20} />
            )}
          </Button>
        </View>
        <Text style={styles.name}>
          {card.first_name} {card.last_name}
        </Text>
        <View style={styles.cardNumberContainer}>
          <View style={styles.digitsContainer}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <View style={styles.digitsContainer}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <View style={styles.digitsContainer}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <Text style={styles.digits}>{card.last_four_digits}</Text>
        </View>
      </View>
      <View style={styles.cardBrandContainer}>
        <View>
          <VisaIcon height={24} width={72} color="white" />
          <Text style={styles.cardKind}>{t(`cards.kind.${card.kind}`)}</Text>
        </View>
        <View style={styles.expirationDateContainer}>
          <Text style={styles.expirationDate}>{card.expiration_date}</Text>
        </View>
      </View>
    </View>
  );
};

export default BankCard;

const stylesheet = createStyleSheet(theme => ({
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
    borderRadius: theme.borderRadius.base,
    position: 'relative',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bgCircleRight: {
    height: 128,
    width: 128,
    position: 'absolute',
    right: -(128 / 12),
    top: -(128 / 1.8),
    borderBottomLeftRadius: 64,
    borderBottomRightRadius: 36,
  },
  bgCircleLeft: {
    height: 128,
    width: 256,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 128,
    top: '65%',
    position: 'absolute',
  },
  balanceLabel: {
    color: 'white',
    fontWeight: '300',
  },
  balanceValueContainer: {flexDirection: 'row', alignItems: 'center'},
  balanceValue: {
    color: 'white',
    fontSize: theme.fontSizes['2xl'],
    fontWeight: '700',
  },
  secureBalanceContainer: {
    marginLeft: theme.spacing.sm,
  },
  name: {
    color: 'white',
    fontSize: theme.fontSizes.lg,
    fontWeight: '300',
    marginTop: theme.spacing.md,
  },
  digits: {
    color: 'white',
    fontWeight: '300',
    fontSize: theme.fontSizes.sm,
  },
  cardNumberContainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.sm,
    gap: theme.spacing.sm,
  },
  digitsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 3,
    marginRight: 4,
    backgroundColor: 'white',
  },
  cardBrandContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  cardKind: {
    color: 'white',
    alignSelf: 'flex-end',
    textAlign: 'right',
    fontSize: theme.fontSizes.xs,
  },
  expirationDateContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  expirationDate: {
    color: 'white',
    fontWeight: '300',
    fontSize: theme.fontSizes.lg,
  },
}));
