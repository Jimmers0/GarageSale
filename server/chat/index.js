function init(io) {
  io.on('connection', function (socket) {
    console.log(socket.id)

    socket.on('name', name => {
      console.log(name)

      io.emit('new person', name)
    })
  })
}

module.exports = init