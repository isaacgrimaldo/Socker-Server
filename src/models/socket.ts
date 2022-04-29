import { Server } from "socket.io";

import events from "../events";

import { MessageData } from "../interfaces";

const {connection ,  messagesSent ,  sendMessage } = events;

class Client {
	private io:Server;

	constructor(io:Server){
		this.io = io;
		this.events();
	}

	private events(){
		this.io.on(connection, (client) => {
			client.on(sendMessage, (data:MessageData) => {
				this.io.emit(messagesSent,{	data });
			});
		});
	}
}

export default Client;