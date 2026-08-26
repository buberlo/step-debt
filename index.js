// Entry point for the Step Debt Expo app.
//
// Registers App.tsx as the root component so Expo can mount the
// StepDebtProvider + RootNavigator tree on all platforms.
import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);