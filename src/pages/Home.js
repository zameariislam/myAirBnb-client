import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ExpCard from '../components/Card/ExpCard'
import HomeCard from '../components/Card/HomeCard'
import SearchForm from '../components/Form/SearchForm'
import Spinner from '../components/Spinner/Spinner'
const Home = () => {

  const [loading, setLoading] = useState(false)
  
  const [allExp, setAllExp] = useState([])


  useEffect(() => {
    setLoading(true)
    fetch('expdata.json')
      .then(res => res.json())
      .then(data => {

        setAllExp(data)
        setLoading(false)

      })
  }, [])
  return (
    <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
      <div className='mt-4'>Search Form
        <SearchForm />
      </div>
      <div className='flex-1'>
        <div className='flex'>
        <div>
          <div className='flex justify-between px-4'>
            <p className='text-xl font-bold'>Homes</p>
            <Link to={'/coming-soon'}  > See all</Link>

          </div>

           <div className='container pb-8 pt-2 mx-auto'>
            <div className='flex flex-wrap'>
              {
                [...Array(3)].map((exp,index)=><HomeCard key={index} />)
              }

            </div>

           </div>
        </div>

        </div>
        <div>
          <div className='flex justify-between px-4'>
            <p className='text-xl font-bold'>Experiences</p>
            <Link to={'/coming-soon'}  > See all</Link>

          </div>

           <div className='container pb-8 pt-2 mx-auto'>
            <div className='flex flex-wrap'>
              {
                allExp.slice(0,4).map((exp,index)=><ExpCard key={index} exp={exp} />)
              }

            </div>

           </div>
        </div>
       

      </div>


    </div>
  )
}

export default Home