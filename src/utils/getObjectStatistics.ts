// give statistics of values and properties in a given object.
const getObjectStatistics = (object: object) => {
  const statistic: { valueCount: number; totalProperties: number } = {
    valueCount: 0,
    totalProperties: 0
  };

  for (const key in object) {
    statistic.totalProperties++;
    const value = object[key];

    if (Array.isArray(value)) {
      if (value.length) {
        statistic.valueCount++;
      }
      continue;
    }
    if (typeof value === 'object') {
      if (getObjectStatistics(value)) statistic.valueCount++;
    }
    if (value) statistic.valueCount++;
  }

  return statistic;
};

export default getObjectStatistics;
