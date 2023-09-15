import React, { useState, useEffect } from 'react';
import '../styles/Home.css'
import Card from '../components/Card'
import axios from 'axios'
import env from '../env'

const Home = ({ query }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
   (
    async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${env.BASE_URL}/course/all-courses`)
        setData(response?.data?.allCourses)
        console.log(response?.data?.allCourses)
      } catch (error) {
        setError(error.response.data.message)
      } finally{
        setLoading(false)
      }
    }
   )()
  }, [query]) // add searchQuery as a dependency
  
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )
  
  return (
    <>
      <div className='home_body'>
        <h2>See all courses</h2>
          {
            loading ? (
              <><p>Loading</p></>
            ) : error ? (
              <><p>{error}</p></>
            ) : (
              <>
                <div className='home_div'>
                  {
                    filteredData.map((item) => (
                      <>
                        <Card courses={item} key={item.id}/>
                      </>
                    ))
                  }
                </div>
              </>
            )
          }
      </div>
    </>
  )
}

export default Home;
