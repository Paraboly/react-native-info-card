import React from 'react';
import {SafeAreaView, View} from 'react-native';
import InfoCard from './lib/src/InfoCard';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <InfoCard
          title="info card"
          height={85}
          statusColor="purple"
          borderColor="blue"
          statusText="Suspended"></InfoCard>
      </SafeAreaView>
    </View>
  );
};

export default App;
