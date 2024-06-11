// CustomNavbar.js

import React from 'react';
import { View, Text, Image } from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import ReactSlider from '@react-native-community/slider';
import tinycolor from 'tinycolor2';


export const Navbar = () => {
  return (
    <>
      <View className="h-[10%] flex flex-row items-center gap-x-4 bg-white px-4">
        <View className="w-8 h-8 p-1 border-gray-400 border rounded border-opacity-5 ">
          <Image source={require('./assets/logo.png')} className="w-full h-full" />
        </View>
        <Text className="text-gray-600 text-3xl mt-3" style={ { fontFamily: 'Satisfy-Regular' } }>Bloom</Text>
      </View>
    </> 
  );
};

export const Banner = () => {
  return (
    <>
      <View className="p-4">
        <Text className="text-gray-500 text-6xl pt-4 px-4 mt-2" style={ { fontFamily: 'Satisfy-Regular' } }>Bloom</Text>
        <Text className="text-gray-400 px-4">
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard" 
        </Text>
      </View>
    </> 
  );
}

export const Controls = ({ color, setColor }) => {
  const handleColor = (color) => {
    const hex = fromHsv(color);
    const rgb = tinycolor(hex).toRgb();
    setColor({red: rgb.r, green: rgb.g, blue: rgb.b});
  }
  return (
    <>
      <View className="w-full h-[25%] flex flex-row p-4 mt-6">
        <View className="w-1/2 h-full">
          <TriangleColorPicker
            onColorChange={handleColor}
            style={{ width: '100%', height: "100%"}}
            hideSliders
            hideControls
            sliderComponent={ReactSlider}
          />
        </View>
        <View className="w-1/2 h-full flex justify-center items-center">
          <View className="my-1 flex flex-row justify-center items-center border rounded-full border-[#b8b8d896] overflow-hidden bg-[#e5e5f796]">
            <View className="w-6 h-6 rounded-full flex justify-center items-center bg-white">
              <Text className="font-bold text-xs">R</Text>
            </View>
            <Text className="px-4 text-[#626288c9] font-semibold min-w-[60px] text-center">{color.red}</Text>
          </View>
          <View className="my-1 flex flex-row justify-center items-center border rounded-full border-[#b8b8d896] overflow-hidden bg-[#e5e5f796]">
            <View className="w-6 h-6 rounded-full flex justify-center items-center bg-white">
              <Text className="font-bold text-xs">G</Text>
            </View>
            <Text className="px-4 text-[#626288c9] font-semibold min-w-[60px] text-center">{color.green}</Text>
          </View>
          <View className="my-1 flex flex-row justify-center items-center border rounded-full border-[#b8b8d896] overflow-hidden bg-[#e5e5f796]">
            <View className="w-6 h-6 rounded-full flex justify-center items-center bg-white">
              <Text className="font-bold text-xs">B</Text>
            </View>
            <Text className="px-4 text-[#626288c9] font-semibold min-w-[60px] text-center">{color.blue}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

export const SliderBrightness = ({brightness, setBrightness}) => {
  return (
    <>
      <View className="p-4 mt-4">
        <View className="my-1 ml-3 w-1/2 flex flex-row  items-center border rounded border-[#b8b8d896] overflow-hidden bg-[#e5e5f796]">
          <View className="px-3 h-6 rounded flex justify-center items-center bg-white">
            <Text className="font-bold text-xs">Brightness</Text>
          </View>
          <Text className="px-4 text-[#626288c9] font-semibold w-1/2 text-center">{brightness }</Text>
        </View>
        <ReactSlider
          style={{ width: '100%', height: 40  }}
          value={brightness}
          onValueChange={value => setBrightness(value)}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor='rgba(67,67,233,0.9)'
          maximumTrackTintColor='#626288c9'
          minimumTrackTintColor='rgba(67,67,233,0.59)'
          step={1}
        />
      </View>
    </>
  );
}