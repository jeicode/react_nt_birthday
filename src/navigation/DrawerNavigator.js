
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeIcon from 'src/shared/components/icons/HomeIcon';
import BottomTabsNavigator from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator 
            initialRouteName='homeDrawer'
            screenOptions={{
                headerShown: false
            }} >
            <Drawer.Screen  
                name="homeDrawer" 
                component={BottomTabsNavigator} 
                options={{
                    title:'Home',
                    drawerIcon: ({size, color}) => <HomeIcon color={color} size={size} />
                }} />
        </Drawer.Navigator>
    );
}
