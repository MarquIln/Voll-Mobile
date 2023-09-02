import { Text, Avatar, VStack} from 'native-base';
import { ButtonComponent } from '../ButtonComponent';

interface CardComponentProps {
    name: string;
    photo: string;
    specialty: string;
    date?: string;
    alreadyBooked?: boolean;
    alreadyDone?: boolean;
}

export function CardComponent({
    name,
    photo,
    specialty,
    date,
    alreadyBooked,
    alreadyDone
}: CardComponentProps) {
    return (
        <VStack w='100%' bg={alreadyDone ? 'blue.100' : 'white'} p={5} borderRadius='lg' shadow={2} mb={5}>
            <VStack flexDir={'row'}>
                <Avatar size='lg' source={{uri: photo}} />
                <VStack pl={4}>
                    <Text fontSize={'md'} bold>{name}</Text>
                    <Text>{specialty}</Text>
                    <Text>{date}</Text>
                </VStack>
            </VStack>
            <ButtonComponent mt={4}>
                {alreadyBooked ? 'Cancel' : 'Book your consult'}
            </ButtonComponent>
        </VStack>
    )
}
