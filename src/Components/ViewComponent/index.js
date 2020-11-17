import React, { useEffect, useCallback } from 'react'
import { Graphs } from '../../Common'
import { useSelector, useDispatch } from 'react-redux'
import { setLiveChartData, resetLiveChartData } from '../../Store/Reducer/reducer'
import { parseChartData, connectSocket, disconnectSocket } from '../../Utils/functions.js'
import './index.scss'

const ViewComponent = () => {
    const liveChart = useSelector(state => state.liveChart)
    const dispatch = useDispatch()
    
    const updateGraphData = useCallback((newData) => {
        dispatch(setLiveChartData(newData))
    },[dispatch])

    useEffect(() => {
        dispatch(resetLiveChartData())
        connectSocket(updateGraphData)
        return () => {
            disconnectSocket()
            dispatch(resetLiveChartData())
        }
    }, [dispatch, updateGraphData])

    return (
        <>
        <section className='view-comp-wrapper'>
            <div className='graph-title mb20'>Live Chart</div>
            <Graphs
                type='ohlc'
                dataPoints={parseChartData(liveChart)}
                axisX={{
                title: 'Date & Time',
                valueFormatString: 'DD MMM YY hh:mm TT'
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
        </>
    )
}
export default ViewComponent