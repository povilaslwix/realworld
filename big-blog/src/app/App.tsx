import React from 'react';

import {observer} from 'remx';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "../navigation";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Navigation/>
      </NavigationContainer>
    </SafeAreaProvider>
    // <ArticlesList feedType={FeedType.GLOBAL} />
  )
};

export default observer(App);