import React, { useState, useEffect, useCallback } from 'react'
import { Dropdown, Graphs, PageLoader } from '../../Common'
import { getRequestAsync } from '../../Store/Api'
import { parseChartData } from '../../Utils/functions.js'
import './index.scss'

const Home = () => {
  const [interval, setInterval] = useState(1)
  const [graphOptions, setgraphOptions] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const handleIntervalChange = (e) => {
    setInterval(e.target.value)
  }

  const callGraphAPI = useCallback(() => {
    setisLoading(true)
    getRequestAsync(`/historical?interval=${interval}`).then((response) => {
      setisLoading(false)
      const formatedData = parseChartData(response)
      setgraphOptions(formatedData)
    }).catch(err => {
      console.log(err)
      setisLoading(false)
    })
  }, [interval])

  useEffect(() => {
    callGraphAPI()
  }, [callGraphAPI, interval])

  return (
    <>
      {isLoading && <PageLoader />}
      {graphOptions.length
        ? <section className='home-wrapper'>
          <div className='mb20'>
            <div className='graph-title'>Historical Chart</div>
            <div className='interval-list text-right'>
              <div>Select Interval</div>
              <Dropdown className='mt5'
                onChange={handleIntervalChange}
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                selected={interval}
              />
            </div>
          </div>
          <Graphs
            type='ohlc'
            dataPoints={graphOptions}
            axisX={{
              title: 'Date',
              valueFormatString: 'DD MMM YY'
            }}
            axisY={{
              includeZero: false,
              title: 'Prices',
              prefix: '₹'
            }}
            toolTip={{
              content: `Date: {x}<hr /><b>Prices: </b><p>Start: {y[0]}&nbsp;&nbspEnd: {y[3]} </br>  High: {y[1]}&nbsp;&nbsp;Low: {y[2]}</p>`
            }}
          />
        </section>
        : ''
      }
    </>
  )
}
export default Home