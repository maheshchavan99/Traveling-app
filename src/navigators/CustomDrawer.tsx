import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screen/homescreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
const Drawer = createDrawerNavigator();
function CustomDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="bottomtab" component={BottomTabNavigator} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default CustomDrawer