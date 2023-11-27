interface FormatPriceOptions {
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

const formatPrice = (value: number, options?: FormatPriceOptions) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    ...options,
  });
  return formatter.format(value);
};

export default formatPrice;
