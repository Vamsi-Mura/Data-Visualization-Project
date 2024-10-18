
export const prepareChartData = (data, key) => {
    // console.log(key,'data')
  const counts = data.reduce((acc, item) => {
    const value = item[key] || 'Unknown';
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  
  return {
    labels: Object.keys(counts),
    datasets: [
      {
        label: `Distribution of ${key}`,
        data: Object.values(counts),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
};

export const prepareYearlyRelevanceData = (data) => {
    const relevanceByYear = data.reduce((acc, item) => {
      const year = item.start_year || 'Unknown';
      acc[year] = (acc[year] || 0) + item.relevance;
      return acc;
    }, {});
  
    return {
      labels: Object.keys(relevanceByYear),
      datasets: [
        {
          label: 'Relevance over Years',
          data: Object.values(relevanceByYear),
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: false,
        },
      ],
    };
  };
  

  export const aggregateByKey = (data,key) => {
    // console.log(data,'data');
    return data.reduce((acc, item) => {
      const value = item[key] || 'Unknown';
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  };