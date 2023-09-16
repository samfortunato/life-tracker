'use client';

import { FormEvent, useState } from 'react';

import { convertToHtmlTagId } from '../../utils/string';

import styles from './component-slider.module.css';

type Props = {
  parameterName: string;
};

export function ComponentSlider({ parameterName }: Props) {
  const parameterId = convertToHtmlTagId(parameterName);
  const [parameterValue, setParameterValue] = useState(0);

  function onInput(evt: FormEvent<HTMLInputElement>) {
    setParameterValue(evt.target.value);
  }

  return (
    <label className={styles.label} htmlFor={parameterId}>
      {parameterName}

      <input
        id={parameterId}
        type="range"
        name={parameterId}
        value={parameterValue}
        onInput={onInput}
      />

      <span className="parameter-value">{parameterValue}</span>
    </label>
  );
}
