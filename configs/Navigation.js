import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from "../screens/ManageExpense";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";
import globalStyles from "../constants/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../components/UI/IconButton";

const Navigation = () => {
  const BottomTabs = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function ExpensesList() {
    return (
      <BottomTabs.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: globalStyles.colors.primary500,
          },
          headerRight: ({tintColor}) =><IconButton size={24} color={tintColor} icon={"add"} onPress={() => {}} />,
          headerTintColor: "white",
          tabBarActiveTintColor: globalStyles.colors.accent500,
          tabBarStyle: {
            backgroundColor: globalStyles.colors.primary500,
          },
        }}
      >
        <BottomTabs.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: "Recent Expenses",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" size={size} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: "All Expenses",
            tabBarLabel: "My Expenses",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
          }}
        />
      </BottomTabs.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExpensesListC">
        <Stack.Screen name="ManageExpense" component={ManageExpense} />
        <Stack.Screen
          name="ExpensesListC"
          component={ExpensesList}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
