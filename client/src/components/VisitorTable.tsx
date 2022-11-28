import React, { useContext } from "react";

import { VisitorContext } from "../context/VisitorContext";
import { VisitorContextType, Visitor } from "../constants/types";

const VisitorTable = () => {
	const { visitors } = useContext(VisitorContext) as VisitorContextType;

	return (
		<div className="wrapper">
			<div className="table-wrapper">
				<table style={{ width: "100%" }}>
					<col style={{ width: "50%" }} />
					<col style={{ width: "25%" }} />
					<col style={{ width: "25%" }} />
					<thead>
						<tr>
							<th>name</th>
							<th>country</th>
							<th>birthday</th>
						</tr>
					</thead>
					<tbody>
						{visitors.map((visitor: Visitor, index) => (
							<tr key={index}>
								<td>{`${visitor.name} ${visitor.surname}`}</td>
								<td>{visitor.country}</td>
								<td>{visitor.birthday}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="second-legend">Your Name and LastName</div>
		</div>
	);
};

export default VisitorTable;
