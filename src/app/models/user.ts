import { Wallet } from "./wallet"

export interface User {
  id?: string;
	name: string;
	email: string;
	phone?: string;
	birthDate?: string;
	password: string;
	status: string;
  wallets ?: Wallet[];
}
