import React, {useState, useEffect} from 'react'
import styles from './Dashboard.module.css';
import Form from '../../Components/Form/Form';
import Header from '../../Components/Layout/Header/Header';
import Sidebar from '../../Components/Layout/Sidebar/Sidebar';

import fakedata from '../../data/fakedata';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fakedata);
  }, [])

  return (
      <section className={styles.Dashboard}>
      <Header />
        <main>
          <Form />

          {data.map((user) => (
            <h3>{user.name}</h3>
          ))}
        </main>

        
      </section>
  )
}

export default Dashboard
