import NotificationIcon from "./components/icons/NotificationIcon";
import OpenDrawerIcon from "./components/icons/OpenDrawerIcon";
import globalStyles from "./styles";

const screenOptionsStack = {
    headerShown: true,
    headerStyle: globalStyles.backgroundColor,
    headerTitleStyle: globalStyles.textLigth,
    headerTitleAlign: 'center',
    contentStyle: globalStyles.backgroundColor,
    headerLeft: () => <OpenDrawerIcon style={{ marginHorizontal: 12 }} />,
    headerRight: () =>
        <NotificationIcon onPress={() => navigation.navigate('notificationsTab')}
            style={{ marginHorizontal: 12 }} />
}

export default screenOptionsStack;