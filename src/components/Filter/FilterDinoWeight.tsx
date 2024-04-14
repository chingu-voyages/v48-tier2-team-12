import { useContext } from 'react';
import ReactSlider from 'react-slider';

import sliderStyles from '../../css-modules/Slider.module.css';
import styles from '../../css-modules/FilterContent.module.css';
import { FilterContext } from './FilterContext';

const FilterDinoWeight = () => {
  const minValue = 0;
  const maxValue = 20000;
  const { minWeight, maxWeight, handleWeight, resetWeight } =
    useContext(FilterContext);

  return (
    <div className={`${styles['filter-content']}  ${styles.sliders}`}>
      <div className={sliderStyles.labels}>
        <span className={styles['filter-small-title']}>Weight</span>
        <button className={sliderStyles.resetButton} onClick={resetWeight}>
          Reset
        </button>
      </div>
      <ReactSlider
        className={sliderStyles['horizontal-slider']}
        thumbClassName={sliderStyles['slider-thumb']}
        trackClassName={sliderStyles['slider-track']}
        value={[minWeight || minValue, maxWeight || maxValue]}
        min={minValue}
        max={maxValue}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value) => {
          handleWeight(value);
        }}
      />
    </div>
  );
};
export default FilterDinoWeight;
