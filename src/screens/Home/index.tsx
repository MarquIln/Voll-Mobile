import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
} from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from "../../assets/Logo.png";
import { TitleComponent } from "../../components/TitleComponent";
import { InputComponent } from "../../components/InputComponent";
import { ButtonComponent } from "../../components/ButtonComponent";
import { useNavigation } from '@react-navigation/native';

export default function Home({ navigation }) {

    return (
        <VStack 
            flex={1} 
            alignItems="center" 
            p={5}
            justifyContent={'center'}
            >
            <Image source={Logo} alt="Logo" />
            <TitleComponent>
                Login your account
            </TitleComponent>
            <Box>
                <InputComponent 
                    placeholder="Enter your email"
                    label="Email"
                    leftIcon={<Text>@</Text>}
                />
                <InputComponent
                    placeholder="Enter your password"
                    label="Password"
                    secureTextEntry={true}
                    leftIcon={<Text>#</Text>}
                />
            </Box>
            <ButtonComponent>Entrar</ButtonComponent>

            <Link href= 'https://www.github.com/MarquIln' mt={4}>
                Forgot your password?
            </Link>

            <Box 
                w="100%"
                flexDirection='row'
                justifyContent={'center'}
                mt={8}
            >
                <Text>Dont have account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text color='blue.500'> Create yout account!</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
    }
