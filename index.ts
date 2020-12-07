interface IGetCardBrandDTO {
  cardNumber: string;
}

interface IBrand {
  brand: string;
  regex: RegExp;
}

const brands: IBrand[] = [
  {
    brand: 'Mastercard',
    regex: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{14}$/,
  },
  { brand: 'Visa', regex: /^4[0-9]{12}(?:[0-9]{3})/ },
  { brand: 'American Express', regex: /^3[47][0-9]{13}/ },
  { brand: 'Aura', regex: /^507860/ },
  { brand: 'Hipercard', regex: /^606282|^637095|^637599|^637568/ },
  { brand: 'Discover', regex: /^6(?:011|5[0-9]{2})[0-9]{12}/ },
  {
    brand: 'Diners',
    regex: /(36[0-8][0-9]{3}|369[0-8][0-9]{2}|3699[0-8][0-9]|36999[0-9])/,
  },
  {
    brand: 'Elo',
    regex: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^504175|^627780|^63(6297|6368|6369)|(65003[5-9]|65004[0-9]|65005[01])|(65040[5-9]|6504[1-3][0-9])|(65048[5-9]|65049[0-9]|6505[0-2][0-9]|65053[0-8])|(65054[1-9]|6505[5-8][0-9]|65059[0-8])|(65070[0-9]|65071[0-8])|(65072[0-7])|(65090[1-9]|6509[1-6][0-9]|65097[0-8])|(65165[2-9]|6516[67][0-9])|(65500[0-9]|65501[0-9])|(65502[1-9]|6550[34][0-9]|65505[0-8])|^(506699|5067[0-6][0-9]|50677[0-8])|^(509[0-8][0-9]{2}|5099[0-8][0-9]|50999[0-9])|^65003[1-3]|^(65003[5-9]|65004\d|65005[0-1])|^(65040[5-9]|6504[1-3]\d)|^(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|^(65054[1-9]|6505[5-8]\d|65059[0-8])|^(65070\d|65071[0-8])|^65072[0-7]|^(65090[1-9]|65091\d|650920)|^(65165[2-9]|6516[6-7]\d)|^(65500\d|65501\d)|^(65502[1-9]|6550[3-4]\d|65505[0-8])/,
  },
];

export default function ({ cardNumber }: IGetCardBrandDTO): string {
  let brand = '';
  brands.forEach((currentBrand) => {
    if (currentBrand.regex.test(cardNumber)) {
      brand = currentBrand.brand;
    }
  });
  return brand;
}
