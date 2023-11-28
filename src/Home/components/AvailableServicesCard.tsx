import {View} from 'react-native';

import {createStyleSheet, useStyles} from '@/Base/theme';
import {Text} from '@/Base/components';
import {useTranslation} from 'react-i18next';
import {useMemo} from 'react';
import BusIcon from '@/Base/assets/icons/BusIcon';
import PhoneIcon from '@/Base/assets/icons/PhoneIcon';
import InvoiceIcon from '@/Base/assets/icons/InvoiceIcon';
import ChartIcon from '@/Base/assets/icons/ChartIcon';
import ServiceItem from './ServiceItem';
import useColorModeValue from '@/Base/theme/hooks/useColorSchemeValue';

const SERVICES = {
  chargeSube: 'Cargar la SUBE',
  rechargeCellphoneCredit: 'Recargar un celular',
  payServices: 'Pagar tus servicios',
  investMyMoney: 'Invertir mi plata',
};

interface AvailableServicesCardProps {
  availableServices: string[];
}

const AvailableServicesCard = ({
  availableServices = [],
}: AvailableServicesCardProps) => {
  const {t} = useTranslation('home');
  const {styles} = useStyles(stylesheet);

  const services = useMemo(
    () =>
      [
        {
          name: SERVICES.chargeSube,
          icon: BusIcon,
          onPress: () => {},
        },
        {
          name: SERVICES.rechargeCellphoneCredit,
          icon: PhoneIcon,
          onPress: () => {},
        },
        {
          name: SERVICES.payServices,
          icon: InvoiceIcon,
          onPress: () => {},
        },
        {
          name: SERVICES.investMyMoney,
          icon: ChartIcon,
          onPress: () => {},
        },
      ].filter(service => availableServices.includes(service.name)),
    [availableServices],
  );

  if (services.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('services.title')}</Text>
      <View style={styles.servicesCardContainer}>
        {services.map(service => (
          <ServiceItem
            key={service.name}
            title={service.name}
            icon={service.icon}
            onPress={service.onPress}
          />
        ))}
      </View>
    </View>
  );
};

export default AvailableServicesCard;

const stylesheet = createStyleSheet(theme => ({
  container: {
    paddingHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.md,
  },
  title: {
    ...theme.components.typography.heading,
    color: theme.colors.foreground,
    marginBottom: theme.spacing.xs,
  },
  servicesCardContainer: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.base,
    justifyContent: 'space-around',
    gap: theme.spacing.sm,
    flexDirection: 'row',
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    width: '100%',
  },
}));
