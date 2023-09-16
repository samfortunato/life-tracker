import { ComponentCounter } from '../components/component-counter/component-counter';
import { ComponentSlider } from '../components/component-slider/component-slider';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Life Tracker</h1>

      <section>
        <h2>skills</h2>

        <ComponentSlider parameterName="sleep quality" />
        <ComponentSlider parameterName="ideal body fat" />
        <ComponentCounter parameterName="sleep quality" />
      </section>

      <h2>health</h2>

      <h2>money</h2>

      <h2>romance</h2>
    </main>
  )
}
