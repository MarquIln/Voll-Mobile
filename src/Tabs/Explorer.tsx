import { VStack, Text, Box, ScrollView } from 'native-base'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { TitleComponent } from '../components/TitleComponent'
import { CardComponent } from '../components/CardComponent'

export default function Explorer() {
    return (
        <ScrollView flex={1} bgColor={'white'}>
            <VStack flex={1} alignItems={'flex-start'} justifyContent={'flex-start'} p={5}>
                <Box
                    w='100%' borderRadius='lg' 
                    p={3} mt={5} 
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
                <TitleComponent color={'blue.500'} alignSelf={'center'}>
                    Results
                </TitleComponent>
                {[1, 2, 3].map((_, index) => (
                    <VStack flex={1} w={'100%'} alignItems={'flex-start'}
                    bgColor={'white'} key={index}> 
                        <CardComponent
                            specialty='Geral'
                            photo='https://github.com/marquiln.png'
                            name='Dr. Marquinho'
                            />
                    </VStack>
                ))}
            </VStack>
        </ScrollView>
    )
}