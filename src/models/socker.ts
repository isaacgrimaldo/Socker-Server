import { Server } from "socket.io";

import events from "../events";

import { MessageData } from "../interfaces";

const {connection ,  messggesSent ,  sendMessage } = events;

class Client {
	private io:Server;

	constructor(io:Server){
		this.io = io;
		this.events();
	}

	private events(){
		this.io.on(connection, (client) => {
			client.on(sendMessage, (data:MessageData) => {
				this.io.emit(messggesSent,{	data });
			});
		});
	}
}

export default Client;