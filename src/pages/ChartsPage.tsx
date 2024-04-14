import { useEffect, useState } from 'react';
import { fetchDinos } from '../utils/api.ts';
import { Dino } from '../interfaces/dino.interface.ts';
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styles from '../css-modules/Charts.module.css';
import { filterDinoCountry, filterDinoEra } from '../utils/categories.tsx';

ChartJS.register(ArcElement, ChartDataLabels, Legend, Tooltip);

export default function ChartsPage() {
  const [dietData, setDietData] = useState<(string | undefined)[]>([]);
  const [typeData, setTypeData] = useState<(string | undefined)[]>([]);
  const [dinos, setDinos] = useState<Dino[]>([]);

  // Filtering states
  const [era, setEra] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);

  const handleWhenLived = (cardData: string) => {
    setEra((prev) => {
      if (prev === cardData) return null;
      return cardData;
    });
  };
  const handleCountry = (cardData: string) => {
    setCountry((prev) => {
      if (prev === cardData) return null;
      return cardData;
    });
  };

  useEffect(() => {
    const setChartData = () => {
      setDietData(dinos.map((item: Dino) => item?.diet));
      setTypeData(dinos.map((item: Dino) => item?.typeOfDinosaur));
    };
    setChartData();

    const fetchDinosSearch = async () => {
      try {
        const dinosData = await fetchDinos();
        const searchResults = dinosData.filter((dino: Dino) => {
          return (
            // Era
            (!era || dino.whenLived?.includes(era)) &&
            // Country
            (!country || dino.foundIn?.includes(country))
          );
        });
        setDinos(searchResults);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDinosSearch();
  }, [dinos, era, country]);

  /* processing the data for the chart */
  const processData = (data: (string | undefined)[], chartType: 'diet' | 'type') => {
    const totalCount = data.length;

    const uniqueItems: Record<string, number> = {};
    data.forEach((item) => {
      if (item !== undefined) {
        uniqueItems[item] = (uniqueItems[item] || 0) + 1;
      }
    });

    const labels: string[] = [];
    const percentages: number[] = [];
    let othersPercentage = 0;

    for (const item in uniqueItems) {
      const count = uniqueItems[item];
      const percentage = (count * 100) / totalCount;
      if (percentage > 10) {
        let capitalizedItem = item.charAt(0).toUpperCase() + item.slice(1)
        labels.push(capitalizedItem);
        percentages.push(percentage);
      } else {
        othersPercentage += percentage;
      }
    }

    if (othersPercentage > 0) {
      labels.push('Others');
      percentages.push(othersPercentage);
    }


  const backgroundColors: string[] =
    chartType === 'diet' ? labels.map((label) => {
          switch (label) {
            case 'Herbivorous':
              return '#4A765C';
            case 'Carnivorous':
              return '#F17710';
            case 'Omnivorous':
              return '#5A3725';
            default:
              return '#094074';
          }
        }) : 
          ['#4A765C', '#F17710', '#5A3725',
          '#094074', '#BFAB25', '#706993',
          '#F95D6A','#A05195EE', '#0BB4FF'];
    
    return {
      labels: labels,
      datasets: [
        {
          data: percentages,

          backgroundColor: backgroundColors,
          hoverOffset: 4,
        },
      ],
    };
  };


  const processDataDiet = (data: (string | undefined)[]) => processData(data, 'diet');
  const processDataType = (data: (string | undefined)[]) => processData(data, 'type');
  
  /* the options for the chart */
  const getChartOptions = () => ({
    plugins: {
      datalabels: {
        display: true,
        color: 'white',
        /* only show two decimal places with % */
        formatter: (value: number, context: any) => {
          const datapoints = context.chart.data.datasets[0].data;
          const total = datapoints.reduce(
            (total: number, datapoint: number) => total + datapoint,
            0
          );
          const percentage = (value / total) * 100;
          return percentage.toFixed(2) + '%';
        },
      },
      legend: {
        position: 'left' as const,
        labels: {
          font: {
            size: 12,
            family: 'Montserrat',
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  });

  return (
    <div className={`${styles.chartsPage} container`}>
      {/* FILTER CHIPS */}
      <div className={styles.filter}>
        <h2>Charts</h2>

        <div className={`${styles['filter-content']} ${styles['cards']}`}>
          <span className={styles['filter-small-title']}>Era</span>
          <div className={styles['chips-container']}>
            {filterDinoEra.map((title) => {
              const isActive = era === title;
              return (
                <div
                  key={title}
                  className={`${styles['single-chip']} ${
                    isActive ? styles['single-chip-active'] : ''
                  }`}
                  onClick={() => handleWhenLived(title)}
                >
                  <span className={styles['bold-text']}>{title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`${styles['filter-content']} ${styles['cards']}`}>
          <span className={styles['filter-small-title']}>Country</span>
          <div className={styles['chips-container']}>
            {filterDinoCountry.map((title) => {
              const isActive = country === title;
              return (
                <div
                  key={title}
                  className={`${styles['single-chip']} ${
                    isActive ? styles['single-chip-active'] : ''
                  }`}
                  onClick={() => handleCountry(title)}
                >
                  <span className={styles['bold-text']}>{title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CHARTS */}
      <div className={styles.chartsContainer}>
        <div className={styles.chartDiv}>
          <h2>Diet</h2>
          <div className={styles.chart}>
            <Pie
              data={processDataDiet(dietData)}
              options={getChartOptions()}
              className={styles.chartStyle}
            />
          </div>
        </div>

        <div className={styles.chartDiv}>
          <h2>Type of Dinosaur</h2>
          <div className={styles.chart}>
            <Doughnut
              data={processDataType(typeData)}
              options={getChartOptions()}
              className={styles.chartStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
