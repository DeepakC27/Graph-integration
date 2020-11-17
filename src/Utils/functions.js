import io from 'socket.io-client'

const parseChartData = (data) => {
  let dataFormat = []
  data.forEach(item => {
      const itemArray = item.split(',')
      const date = new Date(parseFloat(itemArray[0]))
      dataFormat.push(
        { x: date, y: itemArray.slice(1, 5).map(val => parseFloat(val)) }
      )
  })
  // {x: new Date(2014,05,2 ), y:[184.76, 186.28, 184.67, 185.69]}

  return dataFormat
}

const connectSocket = (callBack) => {
  window.socketRef = io(`http://kaboom.rksv.net/watch`)
  if (window.socketRef) {
    window.socketRef.on('connect', () => {
      window.socketRef.emit('sub', { state: true })
      window.socketRef.on('data', (data, ackCallback) => {
          if (data) {
              callBack && callBack(data)
              ackCallback(1)
          }
      })
      window.socketRef.on('error', (err) => {
          console.error(err)
          disconnectSocket()
      })
    })
  }
}

const disconnectSocket = () => {
  if (window.socketRef) {
    window.socketRef.emit('unsub', { state: false })
    window.socketRef = null
  }
}


export {
  parseChartData,
  connectSocket,
  disconnectSocket
}