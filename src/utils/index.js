import dayjs from 'dayjs';

export const getEndDate = (startDate, serviceType = 'custom') => {
  /**
   * @description 단축 전 복무만료일자
   */
  let originalEndDate;

  /**
   * @description 단축 후 복무만료일자
   */
  let updatedEndDate;

  /**
   * @param {Number} originalMonth 단축 전 복무 개월 수
   */
  const calculateNormalEndDate = (originalMonth = 21) => {
    originalEndDate = dayjs(startDate)
      .add(originalMonth, 'month')
      .subtract(1, 'day');
    updatedEndDate = originalEndDate;
  };

  switch (serviceType) {
    // 18
    case 'army':
    case 'marine':
    case 'police':
    case 'katusa':
      calculateNormalEndDate(21, 3);
      break;

    // 20
    case 'navy':
    case 'coast':
    case 'fire':
      calculateNormalEndDate(23, 3);
      break;

    // 21
    case 'social':
    case 'airForce':
      calculateNormalEndDate(21);

      break;

    // 23
    case 'industrialReserve':
      calculateNormalEndDate(23);
      break;

    // 34
    case 'industrialActive':
      calculateNormalEndDate(34);
      break;

    // 36
    case 'researcher':
      calculateNormalEndDate(36);
      break;

    case 'custom':
      break;

    default:
      break;
  }

  return updatedEndDate.format('YYYY-MM-DD');
};

export const CONSTANT = {};

export const SERVICES = [
  {
    type: 'active',
    length: 18,
    value: 'army',
    label: '육군'
  },
  {
    type: 'active',
    length: 20,
    value: 'navy',
    label: '해군'
  },
  {
    type: 'active',
    length: 22,
    value: 'airForce',
    label: '공군'
  },
  {
    type: 'active',
    length: 18,
    value: 'marine',
    label: '해병'
  },
  {
    type: 'active',
    length: 18,
    value: 'police',
    label: '의무경찰'
  },
  {
    type: 'active',
    length: 20,
    value: 'coast',
    label: '해양의무경찰'
  },
  {
    type: 'active',
    length: 20,
    value: 'fire',
    label: '의무소방'
  },
  {
    type: 'active',
    length: 18,
    value: 'katusa',
    label: '카투사'
  },
  {
    type: 'reserve',
    length: 21,
    value: 'social',
    label: '사회복무요원'
  },
  {
    type: 'reserve',
    length: 23,
    value: 'industrialReserve',
    label: '산업기능요원(보충역)'
  },
  {
    type: 'reserve',
    length: 34,
    value: 'industrialActive',
    label: '산업기능요원(현역)'
  },
  {
    type: 'reserve',
    length: 36,
    value: 'researcher',
    label: '전문연구요원'
  }
];

export const getServiceLabelByValue = value => {
  const result = SERVICES.find(service => service.value === value);
  if (result) {
    return result.label;
  }
  return undefined;
};

export const SERVICE_TYPES = [
  {
    label: '현역',
    options: SERVICES.filter(service => service.type === 'active')
  },

  {
    label: '보충역',
    options: SERVICES.filter(service => service.type === 'reserve')
  }
];

export const BADGE_TYPE = [
  {
    value: 'percent',
    label: '퍼센트'
  },
  {
    value: 'date',
    label: '디데이'
  }
];
