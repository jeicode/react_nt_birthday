import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../modules/home/HomeStack';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import globalStyles from 'src/shared/styles';
import BirthdayFormStack from '../modules/birthday/stacks/BirthdayFormStack';
import NotificationStack from 'src/modules/notification/NotificationStack';
import { StyleSheet } from 'react-native';
import ConfigurationStack from 'src/modules/configurations/ConfigurationStack';
import HomeIcon from 'src/shared/components/icons/HomeIcon';
import NotificationIcon from 'src/shared/components/icons/NotificationIcon';


const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='homeTab'
            screenOptions={{
                headerShown: false,
                tabBarStyle: [styles.tabBarStyle],
            }}>

            <Tab.Screen
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) =>  <HomeIcon color={color} size={size}/>,
                }}
                name="homeTab"
                component={HomeStack}
            />

            <Tab.Screen
                options={{
                    title: 'Create Birthday',
                    tabBarIcon: ({ color, size }) => <Ionicons name="md-create" size={size} color={color} />
                }}
                name="createBirthdayTab"
                component={BirthdayFormStack}

            />


            <Tab.Screen
                options={{
                    title: 'Notifications',
                    tabBarIcon: ({ color, size }) => <NotificationIcon color={color} size={size}/>,
                    tabBarBadge: 3
                }}
                name="notificationsTab"
                component={NotificationStack}
            />

            <Tab.Screen
                options={{
                    title: 'Configurations',
                    tabBarIcon: ({ color, size }) => <EvilIcons name="gear" size={size} color={color} />
                }}
                name="configurationsTab"
                component={ConfigurationStack}
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: globalStyles.backgroundColor.backgroundColor,
        paddingBottom: 12,
        height: 60,
        borderTopWidth: 0
    }
})