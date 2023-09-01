import { NativeBaseProvider, StatusBar } from 'native-base';
import { Themes } from './src/styles/themes';
import Routes from './src/routes/routes';

export default function App() {
    return (
        <NativeBaseProvider theme={Themes}>
            <StatusBar backgroundColor={Themes.colors.blue[800]} />
            <Routes />
        </NativeBaseProvider>
    );
}
``;
