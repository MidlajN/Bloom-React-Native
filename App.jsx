
import React, {useState, useEffect} from 'react';
import {Text, View, Pressable} from 'react-native';
import { ref, update, onValue } from 'firebase/database';
import { Navbar, Banner, Controls, SliderBrightness } from './Components';
import { database } from './firebaseConfig';

const BloomApp = () => {
  const [brightness, setBrightness] = useState(0);
  const [color, setColor] = useState({red: 0, green: 0, blue: 0});
  const [status, setStatus] = useState(false);

  const handleSubmit = () => {
    const dbRef = ref(database);
    const data = {
      neoLight: {
        red: color.red,
        green: color.green,
        blue: color.blue,
        brightnessLevel: brightness,
        status: status
      }
    }
    update(dbRef, data);
  }

  const turnOffLed = () => {
    const dbRef = ref(database);
    const data = {
      neoLight: {
        red: color.red,
        green: color.green,
        blue: color.blue,
        brightnessLevel: brightness,
        status: !status
      }
    }
    update(dbRef, { neoLight: { red: color.red, green: color.green, blue: color.blue, brightnessLevel: brightness, status: !status }} );
  }

  useEffect(() => {
    const dbRef = ref(database);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log('data', data)
      setColor({red: data.neoLight.red, green: data.neoLight.green, blue: data.neoLight.blue});
      setBrightness(data.neoLight.brightnessLevel);
      setStatus(data.neoLight.status);
    });
  }, []);

  return (
    <View className="w-full h-full ">
      <Navbar />
      <View className="flex-1">
        <Banner />
        <Controls color={color} setColor={setColor}/>
        <SliderBrightness brightness={brightness} setBrightness={setBrightness} />
      </View>

      <View className=" py-4 px-6 flex flex-row justify-between bg-white w-full rounded-t-xl">
        <Pressable className={`w-6/12 flex items-center justify-center px-3 py-2 rounded-lg border ${status ? 'border-red-300' : 'border-green-600'} bg-white`} onPress={turnOffLed}>
          <Text className={`${status ? 'text-red-500' : 'text-green-600'} font-semibold`}>{status ? 'Turn off LED' : 'Turn on LED'}</Text>
        </Pressable>
        <Pressable className="w-5/12 flex items-center justify-center px-3 py-2 rounded-lg bg-indigo-600 " onPress={handleSubmit}>
          <Text className="text-white font-semibold ">Update Changes</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BloomApp;