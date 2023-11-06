import { BookEntry } from "./book-entry"
import { User } from "./user";

export interface Wallet {
  id?: string;
	name: string;
	status: string;
  user?: User;
  bookEntries?: BookEntry[];
}
