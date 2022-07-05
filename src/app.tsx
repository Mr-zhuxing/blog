
import React from 'react'
import BasicLayout from '@/layouts/BasicLayout'
import './app.less'
import styles from './app.module.less'


export default function App() {
  return (
    <div className={`app ${styles.app}`}   >
      <BasicLayout />
    </div>
  )
}
