var mqtt=require('mqtt');
    
    const MQTT_SERVER="localhost";
    const MQTT_PORT="1883";
    //if your server don't have username and password leave it blank
    const MQTT_USER="may";
    const MQTT_PASSWORD="123456";

    var client=mqtt.connect({
        host: MQTT_SERVER,
        port: MQTT_PORT,
        username: MQTT_USER,
        password: MQTT_PASSWORD
    });

    client.on('connect',()=>{
        console.log("MQTT Connected");
        client.subscribe('test',(err)=>{ //subscribe to 'test' topic
            if(err)console.log(err);
        });
    });

    client.on('message',(topic,message)=>{
        console.log(topic.toString()+" : "+message.toString());
    });

    setInterval(()=>{
        client.publish('test','hello from NodeJS'); //publish "hello from NodeJS" to "test" topic every 5 second
    },5000);