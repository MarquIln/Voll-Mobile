import Home from "./src/screens/Home";
import { NativeBaseProvider, StatusBar } from "native-base";
import { Themes } from "./src/styles/themes";

export default function App() {
  return (
    <NativeBaseProvider theme={Themes}>
      <StatusBar backgroundColor={Themes.colors.blue[800]} />
      <Home />
    </NativeBaseProvider>
  );
}
