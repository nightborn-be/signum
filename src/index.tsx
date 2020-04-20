import React from 'react';
import ChatBody from './components/chat-body';
import ChatIcon from './components/chat-icon';
import ChatContextProvider from './components/chat-context';
import { IOption, IChatConfig } from './types';

interface IChatProps {
	option: IOption,
    config: IChatConfig
}

export * from './types';

export default function Chat(props: IChatProps) {
	return (
		<ChatContextProvider {...props}>
			<ChatIcon />
			<ChatBody />
		</ChatContextProvider>
	);
};