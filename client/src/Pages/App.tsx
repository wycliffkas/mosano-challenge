import React from "react";
import { useQuery, gql } from "@apollo/client";

import "../styles/App.css";
import "../styles/loader.css";
import AddVisitorForm from "../components/AddVisitorForm";
import VistorTable from "../components/VisitorTable";
import VisitorProvider from "../context/VisitorContext";

const GET_VISITORS = gql`
	query GetVisitors {
		countries {
			name
			capital
			region
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(GET_VISITORS);

	if (loading) {
		return (
			<div className="pos-center">
				<div className="loader"></div>
			</div>
		);
	}
	if (error) return <p>Error occured, try refreshing </p>;

	return (
		<VisitorProvider>
			<div className="container">
				<AddVisitorForm countries={data.countries} />
				<VistorTable />
			</div>
		</VisitorProvider>
	);
}

export default App;
