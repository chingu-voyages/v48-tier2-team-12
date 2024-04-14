import { useContext } from 'react';
import ReactSlider from 'react-slider';

import sliderStyles from '../../css-modules/Slider.module.css';
import styles from '../../css-modules/FilterContent.module.css';
import { FilterContext } from './FilterContext';

const FilterDinoLength = () => {
  const minValue = 0;
  const maxValue = 38;
  const { minLength, maxLength, handleLength, resetLength } =
    useContext(FilterContext);

  return (
    <div className={`${styles['filter-content']}  ${styles.sliders} `}>
      <div className={sliderStyles.labels}>
        <span className={styles['filter-small-title']}>Length</span>
        <button className={sliderStyles.resetButton} onClick={resetLength}>
          Reset
        </button>
      </div>
      <ReactSlider
        className={sliderStyles['horizontal-slider']}
        thumbClassName={sliderStyles['slider-thumb']}
        trackClassName={sliderStyles['slider-track']}
        value={[minLength || minValue, maxLength || maxValue]}
        min={minValue}
        max={maxValue}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value) => {
          handleLength(value);
        }}
      />
    </div>
  );
};
export default FilterDinoLength;
