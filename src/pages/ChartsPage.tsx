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

  /* removing duplicates for the chart labels */
  const removeDuplicates = (
    Data: (string | undefined)[]
  ): (string | undefined)[] => {
    const uniqueData: (string | undefined)[] = [];

    for (const item of Data) {
      if (!uniqueData.includes(item)) {
        uniqueData.push(item);
      }
    }
    return uniqueData;
  };
  /* processing the data for the chart */
  const processData = (data: (string | undefined)[]) => {
    const filteredData = removeDuplicates(data);
    const totalCount = data.length;

    return {
      labels: filteredData,
      /* displaying the filtered Data as chart labels */
      datasets: [
        {
          /* calculates the percentage of occurrence of each unique item in the dataset */
          data: filteredData.map((item) => {
            const count = data.filter((entry) => entry === item).length;
            const percentage = (count * 100) / totalCount;
            return percentage;
          }),
          backgroundColor: ['#4A765C', '#F17710', '#5A3725'],
          hoverOffset: 4,
        },
      ],
    };
  };
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
    <div className={styles.chartPageConatiner}>
      <div className={styles.chartsContainer}>
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

        <div className={styles.chartDiv}>
          <h2>Diet</h2>
          <div className={styles.chart}>
            <Pie
              data={processData(dietData)}
              options={getChartOptions()}
              className={styles.chartStyle}
            />
          </div>
        </div>

        <div className={styles.chartDiv}>
          <h2>Type of Dinosaur</h2>
          <div className={styles.chart}>
            <Doughnut
              data={processData(typeData)}
              options={getChartOptions()}
              className={styles.chartStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
