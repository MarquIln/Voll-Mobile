import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { TitleComponent } from '../components/TitleComponent'

export default function Profile() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems='center' mt={5} p={5}>
                <TitleComponent color='blue.500'>Profile</TitleComponent>
                <Avatar size='xl' source={{uri:"https://github.com/marquIln.png"}} mt={5}/>
                <TitleComponent color='blue.500'>Personal Informations</TitleComponent>
                <TitleComponent fontSize='lg' mb={1}>Marquinho</TitleComponent>
                <Text>17/01/2000</Text>
                <Text>Porto Alegre</Text>

                <Divider mt={5}/>

                <TitleComponent color='blue.500' mb={1}>Medical History</TitleComponent>
                <Text>Asma</Text>
                <Text>Bronquite</Text>
            </VStack>
        </ScrollView>
    )
}