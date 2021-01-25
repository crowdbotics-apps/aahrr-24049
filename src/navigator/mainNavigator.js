import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfMaps196349Navigator from '../features/CopyOfMaps196349/navigator';
import CopyOfUserProfile196347Navigator from '../features/CopyOfUserProfile196347/navigator';
import CopyOfUserProfile196346Navigator from '../features/CopyOfUserProfile196346/navigator';
import Maps196304Navigator from '../features/Maps196304/navigator';
import Additem196303Navigator from '../features/Additem196303/navigator';
import Maps196299Navigator from '../features/Maps196299/navigator';
import UserProfile196295Navigator from '../features/UserProfile196295/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfMaps196349: { screen: CopyOfMaps196349Navigator },
CopyOfUserProfile196347: { screen: CopyOfUserProfile196347Navigator },
CopyOfUserProfile196346: { screen: CopyOfUserProfile196346Navigator },
Maps196304: { screen: Maps196304Navigator },
Additem196303: { screen: Additem196303Navigator },
Maps196299: { screen: Maps196299Navigator },
UserProfile196295: { screen: UserProfile196295Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
