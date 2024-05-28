import React from 'react'
import styles from './QuzeLink.module.css'

function QuzeLink({quizLink}) {
  return (
      <div className={styles.parent}>
        <h1>Congrats Your Quiz is Published</h1>
        <button className={styles.link}>{quizLink}</button>
        <button className={styles.button}>share</button>
      </div>
  )
}

export default QuzeLink