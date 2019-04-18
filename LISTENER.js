const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/ttyACM0', { baudRate: 57600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

port.on("open", () => {
  console.log('Serial Port Open');  
});

parser.on('data', data =>{
  console.log(data)
});
