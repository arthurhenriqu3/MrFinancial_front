import { Category } from "./category"
import { Wallet } from "./wallet"

export interface BookEntry {
  id?: string;
	name: string;
	value: number;
	date: string | null;
	category?: Category;
	status: string;
  wallet?: Wallet;
}
