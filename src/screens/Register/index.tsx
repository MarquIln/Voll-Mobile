import { Image, Text, Box, Checkbox, ScrollView } from 'native-base';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { useState } from 'react';

import Logo from '../../assets/Logo.png';

import { TitleComponent } from '../../components/TitleComponent';
import { InputComponent } from '../../components/InputComponent';
import { ButtonComponent } from '../../components/ButtonComponent';
import { section } from '../../utils/RegistryEntryText';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigator = useNavigation();
    const [numSection, setNumSection] = useState(0);

    function advanceSection() {
        if (numSection < section.length - 1) {
            setNumSection(numSection + 1);
        }
    }

    function backSection() {
        if (numSection > 0) {
            setNumSection(numSection - 1);
        }
    }

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <ScrollView flex={1} p={5} mt={10}>
                <Image source={Logo} alt="Logo Voll" alignSelf={'center'} />
                <TitleComponent>{section[numSection]?.title}</TitleComponent>
                <Box>
                    {section[numSection]?.entryText?.map((entry) => {
                        return (
                            <InputComponent
                                label={entry.label}
                                placeholder={entry.placeholder}
                                key={entry.id}
                            />
                        );
                    })}
                </Box>
                <Box>
                    {numSection == 2 && (
                        <Text
                            color="blue.800"
                            fontWeight="bold"
                            fontSize="lg"
                            mt={2}
                            mb={2}
                        >
                            Select your health plan:
                        </Text>
                    )}
                    {section[numSection]?.checkbox?.map((checkbox) => {
                        return (
                            <Checkbox key={checkbox.id} value={checkbox.value}>
                                {checkbox.value}
                            </Checkbox>
                        );
                    })}
                </Box>
                {numSection > 0 && (
                    <ButtonComponent
                        onPress={() => backSection()}
                        bgColor="gray.400"
                    >
                        Go Back
                    </ButtonComponent>
                )}
                <ButtonComponent onPress={() => advanceSection()} mt={4} mb={2}>
                    Progress
                </ButtonComponent>
                {numSection == 0 && (
                    <ButtonComponent
                        onPress={() => navigator.navigate('Home')}
                        mt={4}
                        mb={2}
                        bgColor={'blue.500'}
                    >
                        Have Account? Login
                    </ButtonComponent>
                )}
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
