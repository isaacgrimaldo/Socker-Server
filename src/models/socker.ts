import { Server } from "socket.io";

class Client {
	private io:Server;

	constructor(io:Server){
		this.io = io;
		this.welcome();
	}

	private welcome(){
		this.io.on("connection", (client) => {
			client.on("send-message", (data) => {
				this.io.emit("messgges-sent",{
					data
				});
			});
		});
	}
}

export default Client;