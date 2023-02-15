
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabsNavigator from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName='homeDrawer'>
            <Drawer.Screen name="homeDrawer" component={BottomTabsNavigator} />
        </Drawer.Navigator>
    );
}
