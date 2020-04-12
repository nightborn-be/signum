# Signum
![Banner](https://github.com/nightborn-be/signum/blob/master/lab_signum.png)

[![NPM](https://img.shields.io/npm/v/signum.svg)](https://www.npmjs.com/package/signum) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

- You can try the communication tool here: https://nightborn-be.github.io/signum
- Or on our website for a production-version: https://nightborn.be

## Install

```bash
npm install --save @nightborn/signum
yarn add @nightborn/signum
```

## Configuration

### Theme
![Configurator](https://github.com/nightborn-be/signum/blob/master/lab_signum_configurator.png)
For the configuration of the UI we created a little interface to generate a config.js file to customize the theme.
https://nightborn.be/lab/signum

### Options
For the options it's a pretty straightforward structure.

1. First create the container object:

```jsx
option: {
    title: 'Hello there !',
    subTitle: 'How can I help you?',
    message: 'How can I help you?',
    name: 'Hello there'
}
```

2. Add the array of options (If you want options)
```jsx
option: {
    title: 'Hello there !',
    subTitle: 'How can I help you?',
    message: 'How can I help you?',
    name: 'Hello there',
    options: [
        {
            title: 'Hello there !',
            message: 'You chose option A?',
            name: 'Option A',
            options: [
                {
                    title: 'Hello there !',
                    message: 'You chose option AA?',
                    name: 'Option AA',
                },
                {
                    title: 'Hello there !',
                    message: 'You chose option AB?',
                    name: 'Option AB',
                }
            ]
        },
        {
            title: 'Hello there !',
            message: 'You chose option B?',
            name: 'Option B',
        }
    ]
}
```


### Important information

1. In order for the back-button to appear, you should leave blanc the subTitle attribute of the object.
2. If you're at a leaf of your option-tree, please leave empty the options attribute and the messaging body of Signum will appear.


## Usage

```jsx
import React from 'react'
import Chat from '@nightborn/signum'
import '@nightborn/signum/dist/index.css';

const defaultProps = {
    option: {
        title: 'Hello there !',
        subTitle: 'How can I help you?',
        message: 'How can I help you?',
        name: 'Hello there',
        options: [
            {
                title: 'Hello there !',
                message: 'You chose option A?',
                name: 'Option A',
                options: [
                    {
                        title: 'Hello there !',
                        message: 'You chose option AA?',
                        name: 'Option AA',
                    },
                    {
                        title: 'Hello there !',
                        message: 'You chose option AB?',
                        name: 'Option AB',
                    }
                ]
            },
            {
                title: 'Hello there !',
                message: 'You chose option B?',
                name: 'Option B',
            }
        ]
    },
    config: {
        openByDefault: false,
        avatarIcon: require('./assets/chat_avatar.png'),
        mainColor: 'linear-gradient(90deg, #406321 0%, #283E15 100%)',
        secondaryColor: 'linear-gradient(90deg, #406321 0%, #283E15 100%)',
        sendButtonColor: '#0074CE',
        finalButtonColor: "linear-gradient(90deg, #406321 0%, #283E15 100%)",
        emailPlaceholder: 'Please fill in your e-mail',
        messagePlaceholder: 'Please provide us some information',
        finalTitle: 'Thank you.',
        finalSubTitle: "We'll be in touch!",
        finalButtonText: "Continue",
        handleFinalButtonClicked: () => { },
        handleSendClicked: (information) => console.log(information),
    }
}

const App = () => {
    return (
        <Chat {...defaultProps} />
    )
}

export default App;
```

## Result

In the handleSendClicked function you'll receive following structure 
```jsx
interface IChatBodyInformation {
    email: string,
    message: string,
    steps: IOption[],
    option: IOption
}
```
You can then use the received information to send it to EMAILJS, your backend, ... any solution in which you want to track the information given by your website visitors.

## License

MIT © [m-Nightly](https://github.com/m-Nightly)
