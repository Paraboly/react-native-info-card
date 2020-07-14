import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import InfoCard from './lib/src/InfoCard';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <InfoCard
          height={85}
          descriptionDisable
          statusColor="purple"
          borderColor="blue"
          statusText="Suspended"></InfoCard>
      </SafeAreaView>
    </View>
  );
};

export default App;
