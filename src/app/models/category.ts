export interface Category {
  id?: string;
	name: string;
	description?: string;
	image?: string;
	parent?: Category;
	type: string;
	status: string;
  children?: Category[];
}
