import React from 'react';
import { Image } from 'react-native';
import { AppLoading as ExpoAppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

type FontType = { [name: string]: Font.FontSource };

export default function AppLoading({ setIsAppReady }) {
  const cacheImages = (images: number[]) => {
    return images.map(image => {
      return typeof image === 'string'
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync();
    });
  };

  const cacheFonts = (fonts: FontType[]) => {
    return fonts.map(font => Font.loadAsync(font));
  };

  const loadAllAppAssets = async () => {
    const imageAssets = cacheImages([require('../../../assets/icon.png')]);

    const fontAssets = cacheFonts([
      {
        HelveticaNeue: require('../../../assets/fonts/HelveticaNeue.ttf'),
        'HelveticaNeue-Bold': require('../../../assets/fonts/HelveticaNeue-Bold.ttf'),
        'Gilroy-ExtraBold': require('../../../assets/fonts/Gilroy-ExtraBold.ttf')
      }
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return (
    <ExpoAppLoading
      startAsync={loadAllAppAssets}
      onFinish={() => setIsAppReady(true)}
      onError={console.warn}
    />
  );
}
