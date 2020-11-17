import React from 'react'
import CanvasJSReact from './Library/canvasjs.react'
// import theme from '../../Styles/Variables.scss'
import './index.scss'

const CanvasJSChart = CanvasJSReact.CanvasJSChart
const graphStyles = {
  title: {
    fontColor: 'black',
    fontSize: 50,
    padding: 0,
    margin: 15,
    backgroundColor: 'white',
    fontWeight: 'medium'
  },
  axis: {
    lineColor: 'grey',
    titleFontColor: 'grey',
    titleFontSize: 20,
    lineThickness: 2
  }
}

const Graphs = ({ title, dataPoints, type, axisX, axisY, toolTip }) => {
  const options = {
    theme: '',
    zoomEnabled: true, 
    animationEnabled: true,
    title: {
      text: ''
    },
    axisX: {
      ...axisX,
      ...graphStyles.axis
    },
    axisY: {
      ...axisY,
      ...graphStyles.axis
    },
    toolTip: {
      ...toolTip
    },
    data: [
      {
        type,
        color: 'red',
        dataPoints
      }
    ]
  }

  return (
    <div className='graph-wrapper' style={{ height: 370, maxWidth: 920 }}>
      <CanvasJSChart options = {options}
        /* onRef = {ref => this.chart = ref} */
      />
    </div>
  );
}

export default React.memo(Graphs)