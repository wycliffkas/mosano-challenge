import * as React from "react";

import { VisitorContextType, Visitor } from "../constants/types";

export const VisitorContext = React.createContext<VisitorContextType | null>(
	null
);

interface Props {
	children: React.ReactNode;
}

const VisitorProvider: React.FC<Props> = ({ children }) => {
	const [visitors, setVisitors] = React.useState<Visitor[]>([]);

	const addVisitor = (visitor: Visitor) => {
		setVisitors([...visitors, visitor]);
	};

	return (
		<VisitorContext.Provider value={{ visitors, addVisitor }}>
			{children}
		</VisitorContext.Provider>
	);
};

export default VisitorProvider;
