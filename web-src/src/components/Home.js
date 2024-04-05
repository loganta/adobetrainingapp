/*
* <license header>
*/

import React from 'react'
import { Button, defaultTheme, Provider, Heading, View } from '@adobe/react-spectrum';

export function Home() {
  return (
    <Provider theme={defaultTheme}>
      <View width='size-6000'>
        <Heading level={1}>Let's do it with ReactSpectrum!</Heading>
      </View>
      <Button
        variant="accent"
        onPress={() => alert('Hey there!')}
      >
        Hello React Spectrum!
      </Button>
    </Provider>
  );
}