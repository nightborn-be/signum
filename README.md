# signum
![Banner](https://github.com/nightborn-be/signum/blob/master/lab_signum.png)

[![NPM](https://img.shields.io/npm/v/signum.svg)](https://www.npmjs.com/package/signum) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

You can try the communication tool here: https://nightborn-be.github.io/signum

## Install

```bash
npm install --save signum
yarn add signum
```

## Configuration

### Theme
![Configurator](https://github.com/nightborn-be/signum/blob/master/lab_signum_configurator.png)
For the configuration of the UI we created a little interface to generate a config.js file to customize the theme.
https://nightborn.be/lab/signum

### Options


## Usage

```jsx
import React from 'react'
import Chat from 'signum'
import 'signum/dist/index.css';

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

## License

MIT © [m-Nightly](https://github.com/m-Nightly)