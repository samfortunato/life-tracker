'use client';

import { FormEvent, useState } from 'react';

import { convertToHtmlTagId } from '../../utils/string';

import styles from './component-counter.module.css';

type Props = {
  parameterName: string;
};

export function ComponentCounter({ parameterName }: Props) {
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
        type="number"
        name={parameterId}
        value={parameterValue}
        onInput={onInput}
      />
    </label>
  );
}
