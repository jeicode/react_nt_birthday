import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import globalStyles from 'src/shared/styles';
import BirthdayFormStack from './BirthdayFormStack';
import NotificationStack from 'src/modules/notification/NotificationStack';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName='home'
            screenOptions={{
                tabBarStyle: [globalStyles.backgroundColor, {
                    paddingBottom: 12,
                    height: 60
                }],
            }}>
            <Tab.Screen
                options={{
                    headerShown: false,
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
                }}
                name="homeTab"
                component={HomeStack} />

            <Tab.Screen
                options={{
                    headerShown: false,
                    title: 'Create Birthday',
                    tabBarIcon: ({ color, size }) => <Ionicons name="md-create" size={size} color={color} />
                }}
                name="createBirthdayTab"
                component={BirthdayFormStack}

            />


            <Tab.Screen
                options={{
                    headerShown: false,
                    title: 'Notifications',
                    tabBarIcon: ({ color, size }) => <Ionicons name="notifications" size={size} color={color} />,
                    tabBarBadge: 3
                }}
                name="notificationsTab"
                component={NotificationStack}

            />
        </Tab.Navigator>
    );
}