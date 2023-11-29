import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {createStyleSheet, useStyles} from '@/Base/theme';
import {Switch, Text} from '@/Base/components';
import {EyeIcon} from '@/Base/assets/icons';

interface ControlVisualitationCardDataProps {
  value: boolean;
  handlePress: (value: boolean) => void;
}

const ControlVisualitationCardData = ({
  value,
  handlePress,
}: ControlVisualitationCardDataProps) => {
  const {t} = useTranslation('card');
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <EyeIcon color={theme.colors.foreground} />
        </View>
        <Text>{t('cardData.title')}</Text>
      </View>
      <Switch value={value} handlePress={handlePress} />
    </View>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    marginVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.base,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: theme.colors.foreground,
    borderRadius: 24,
    padding: theme.spacing.xs,
    marginRight: theme.spacing.xs,
  },
}));

export default ControlVisualitationCardData;
