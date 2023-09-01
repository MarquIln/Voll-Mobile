const section = [
    {
        id: 1,
        title: 'Enter your basic information',
        entryText: [
            {
                id: 1,
                label: 'Name',
                placeholder: 'Enter your name'
            },
            {
                id: 2,
                label: 'Email',
                placeholder: 'Enter your email'
            },
            {
                id: 3,
                label: 'Create a password',
                placeholder: 'Enter your password',
                secureTextEntry: true,
            },
            {
                id: 4,
                label: 'Confirm your password',
                placeholder: 'Confirm your password',
                secureTextEntry: true,
            }
        ],
        checkbox: []
    },
    {
        id: 2,
        title: 'Enter more information about you',
        entryText: [
            {
                id: 1,
                label: 'ZIP Code',
                placeholder: 'Enter your ZIP Code'
            },
            {
                id: 2,
                label: 'Address',
                placeholder: 'Enter your address'
            },
            {
                id: 3,
                label: 'Number',
                placeholder: 'Enter your number'
            },
            {
                id: 4,
                label: 'Complement',
                placeholder: 'Enter your complement'
            },
            {
                id: 5,
                label: 'Cell Phone',
                placeholder: '(00) 00000-0000'
            }
        ],
        checkbox: []
    },
    {            
        id: 3,
        title: 'Which are your health plans?',
        entryText: [],
        checkbox: [
            {
                id: 1,
                value: 'Unimed' 
            },
            {
                id: 2,
                value: 'IPE Saude'
            },
            {
                id: 3,
                value: 'Bradesco'
            },
            {
                id: 4,
                value: 'Amil'
            },
            {
                id: 5,
                value: 'Sul America'
            },
            {
                id: 6,
                value: 'Bio Vida'
            },
            {
                id: 7,
                value: 'Outros'
            },
            {
                id: 8,
                value: 'SUS'
            }
        ]
    }
]
export { section }