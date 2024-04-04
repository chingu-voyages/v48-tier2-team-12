import { useEffect, useState } from 'react';
import CategoryTiles from '../components/CategoryTiles.tsx';
import NavBar from '../components/NavBar.tsx';
import BottomNavBar from '../components/BottomNavBar.tsx';
import { fetchDinos } from '../utils/api.ts';
import { Dino } from '../interfaces/dino.interface.ts';
import { Chart as ChartJS, ArcElement, Legend, Tooltip} from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styles from '../css-modules/Charts.module.css';
import tRexSkull from '../assets/t-rex-skull.svg'

ChartJS.register(ArcElement, ChartDataLabels, Legend, Tooltip);

export default function ChartsPage() {
  const [dinos, setDinos] = useState<Dino[]>([]);
  const [originalDinos, setOriginalDinos] = useState<Dino[]>([]);
  const [dietData, setDietData] = useState<(string | undefined)[]>([]);
  const [typeData, setTypeData] = useState<(string | undefined)[]>([]);

  const filterDinos = (filterFunction: (dino: Dino) => boolean) => {
    setDinos(originalDinos.filter((dino) => filterFunction(dino)));
  };

  useEffect(() => {
    fetchDinos()
      .then((data) => {
        setOriginalDinos(data);
        setDinos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

 useEffect(() => {
    setDietData(dinos.map((item: Dino) => item?.diet));
    setTypeData(dinos.map((item: Dino) => item?.typeOfDinosaur));
  }, [dinos]);
  
 /* removing duplicates for the chart labels */ 
  const removeDuplicates = (Data: (string | undefined)[]): (string | undefined)[] => {
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
      labels: filteredData,  /* displaying the filtered Data as chart labels */  
      datasets: [{
        /* calculates the percentage of occurrence of each unique item in the dataset */
        data: filteredData.map((item => {
            const count = data.filter((entry) => entry === item).length;
            const percentage = (count * 100) / totalCount;
            return percentage;
        })),
        backgroundColor: [
          'rgba(160, 174, 144, 1)',
          'rgba(229, 107, 107, 1)',
          'rgba(137, 170, 220, 1)',
        ],
        hoverOffset: 4
      }]
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
          const total = datapoints.reduce((total: number, datapoint: number) => total + datapoint, 0);
          const percentage = value / total * 100;
          return percentage.toFixed(2) + "%";
        }
      },
      legend: {
        position: 'left' as const,
        labels: {
           font: {
              size: 12,
              family: 'Montserrat',
           }
        },
     },
    },
    responsive: true,
    maintainAspectRatio: false,
  });

  return (
    <div className={styles.chartPageConatiner}>
      <NavBar />
      <div className={styles.ChartsTitleContainer}>
        <img src={tRexSkull} className='home-title--image' />
        <h2 className="home-title">Did you know that Stegosaurus had a brain the size of a walnut?</h2>
      </div>
      <CategoryTiles filterDinos={filterDinos} />

      <div className={styles.chartsContainer}>
        <div className={styles.chartDiv}>
            <h2>Diet</h2>
            <div className={styles.chart}>
                <div></div>
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
      <BottomNavBar />
    </div>
  );
}
