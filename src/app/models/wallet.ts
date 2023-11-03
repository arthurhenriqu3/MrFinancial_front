import { BookEntry } from "./book-entry"

export interface Wallet {
  id?: string;
	name: string;
	status: string;
  bookEntries?: BookEntry[];
}
