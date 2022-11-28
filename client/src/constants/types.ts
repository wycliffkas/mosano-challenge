export interface Visitor {
	name: string;
	surname: string;
	country: string;
	birthday: string;
}

export type VisitorContextType = {
	visitors: Visitor[];
	addVisitor: (visitor: Visitor) => void;
};

export type Country = {
	name: string;
	capital: string;
	region: string;
};
