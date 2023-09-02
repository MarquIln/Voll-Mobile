import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home'
import Consults from './Consults'
import Explorer from './Explorer'
import Profile from './Profile'

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarStyle: {
        backgroundColor: '#002851'
    },
    tabBarActiveTintColor: '#339CFF',
    tabBarInactiveTintColor: '#FFF',
}

const tabs = [
    {
        name: 'Home',
        component: Home,
        icon: 'home'
    },
    {
        name: 'Consults',
        component: Consults,
        icon: 'calendar'
    },
    {
        name: 'Explorer',
        component: Explorer,
        icon: 'search'
    },
    {
        name: 'Profile',
        component: Profile,
        icon: 'person'
    }
]

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {tabs.map((tab) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color, size}) => (
                            <Ionicons 
                                name={tab.icon} 
                                color={color} 
                                size={size}/>
                        )
                    }}/>
            ))}
        </Tab.Navigator>
    )
}