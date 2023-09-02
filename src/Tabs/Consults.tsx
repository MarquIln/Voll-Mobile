import { VStack, Divider, ScrollView } from 'native-base'
import { TitleComponent } from '../components/TitleComponent'
import { CardComponent } from '../components/CardComponent'
import { ButtonComponent } from '../components/ButtonComponent'

export default function Consults() {
    return (
        <ScrollView flex={1} p={5}>
            <VStack p={5}>
                <TitleComponent color={'blue.500'}>My Consults</TitleComponent>
                <ButtonComponent mt={5} mb={5}>Book new consult</ButtonComponent>
                <TitleComponent color={'blue.500'} fontSize='lg' alignSelf={'flex-start'} mb={2}>Next Consults</TitleComponent>
                <CardComponent 
                    name='Dr. Marquinho'
                    specialty='Geral'
                    photo='https://github.com/marquiln.png'
                    date='20/10/2023'
                    alreadyBooked
                />
                <Divider mt={5} />
                
            <TitleComponent color={'blue.500'} fontSize='lg' alignSelf={'flex-start'} mb={2}>Past Consults</TitleComponent>
                <CardComponent 
                    name='Dr. Marquinho'
                    specialty='Geral'
                    photo='https://github.com/marquiln.png'
                    date='20/10/2023'
                    alreadyDone
                />
                <CardComponent 
                    name='Dr. Marquinho'
                    specialty='Geral'
                    photo='https://github.com/marquiln.png'
                    date='20/10/2023'
                    alreadyDone
                />
                <CardComponent 
                    name='Dr. Marquinho'
                    specialty='Geral'
                    photo='https://github.com/marquiln.png'
                    date='20/10/2023'
                    alreadyDone
                />
            </VStack>
        </ScrollView>
    )
}