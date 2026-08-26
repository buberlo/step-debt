import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { StepDebtProvider } from './src/state/StepDebtContext';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <StepDebtProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0B1220' }}>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </SafeAreaView>
    </StepDebtProvider>
  );
};

export default App;