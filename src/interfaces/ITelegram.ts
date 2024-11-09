export interface ITelegram {
	sendMessage(message: string): Promise<void>
}
