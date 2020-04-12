import React from 'react';
import ChatBody from './components/chat-body';
import ChatIcon from './components/chat-icon';
import { IChatProps } from './interfaces/IChatProps';
import ChatContextProvider from './components/chat-context';

export default function Chat(props: IChatProps) {
	return (
		<ChatContextProvider {...props}>
			<ChatIcon />
			<ChatBody />
		</ChatContextProvider>
	);
};