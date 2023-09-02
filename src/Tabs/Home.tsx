import { VStack, Text, Image, Box, ScrollView, Divider } from 'native-base';
import Logo from '../assets/Logo.png';
import { TitleComponent } from '../components/TitleComponent';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { depoiments } from '../utils/mocks';

export default function Home() {
    return (
        <ScrollView flex={1} bgColor='white'>
            <VStack flex={1} alignItems='flex-start' justifyContent='flex-start' p={5} mt={10}>
                <Image source={Logo} alt='Logo' mt={10} />
                <TitleComponent color='blue.500'>Welcome</TitleComponent>
                <Box
                    w='100%' borderRadius='lg' 
                    p={3} mt={10} 
                    shadow='1' borderBottomRightRadius='md'>
                    <InputComponent 
                        placeholder='choose an specialty' 
                    />
                    <InputComponent 
                        placeholder='choose your location'
                    />
                    <ButtonComponent mt={3} mb={3}>
                        Search
                    </ButtonComponent>
                </Box>

                <TitleComponent color='blue.500' alignSelf={'center'}>Depoiments</TitleComponent>
                <VStack w='100%' space={3} divider={<Divider/>}>
                    {
                        depoiments.map(depoiment => (
                            <Box
                                key={depoiment.id} w='100%' 
                                borderRadius='lg' 
                                p={3} mt={3} 
                                shadow='1' borderBottomRightRadius='md'>
                                <TitleComponent fontSize='lg' mb={1}>{depoiment.name}</TitleComponent>
                                <Text>{depoiment.text}</Text>
                            </Box>
                        ))
                    }
                </VStack>
            </VStack>
        </ScrollView>
    )
}