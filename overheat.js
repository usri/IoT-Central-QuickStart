
function getMessage(cb) {

    var nPercent = Math.floor(Math.random() * 10) + 1;
    console.log(nPercent);

    if (nPercent < 7) {
        messageId++;
        sensor.readSensorData()
            .then(function (data) {
                cb(JSON.stringify({
                    messageId: messageId,
                    deviceId: 'Raspberry Pi Web Client',
                    temperature: data.temperature_C,
                    humidity: data.humidity
                }), data.temperature_C > 30);
            })
            .catch(function (err) {
                console.error('Failed to read out sensor data: ' + err);
            });
    }
    else {
        //Send hot
        console.log("send hot!");
        cb(JSON.stringify({
            messageId: messageId,
            deviceId: 'Raspberry Pi Web Client',
            temperature: 71,
            humidity: 50
        }));
    }
}
