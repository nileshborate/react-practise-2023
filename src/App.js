import React, { useEffect, useState } from 'react'

const App = () => {

  const [data,setData] = useState([]);

  const getCovidData = async() => {
    const res = await fetch("https://data.covid19india.org/data.json")
    const actualData = await res.json()
    console.log("actual data = ",actualData);
    setData(actualData.statewise)
  }

  useEffect(()=>{
    getCovidData();
  },[])

  return (
    <>
       <h1 className='text-center'>India Covid - 19 Dashborad 2021</h1>
       <table class="table table-striped">
        <thead className='table-primary'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">State Code</th>
            <th scope="col">Active</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
            <th scope="col">Last Update Time</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((obj,index)=>{
            return(
            <tr>
            <th scope="row">{index+1}</th>
            <td>{obj.statecode}</td>
            <td>{obj.active}</td>
            <td>{obj.confirmed}</td>
            <td>{obj.recovered}</td>
            <td>{obj.deaths}</td>
            <td>{obj.lastupdatedtime}</td>
          </tr>
            )
          })
        }
          
        </tbody>
      </table>
    </>
  )
}

export default App