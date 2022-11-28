import React from "react";
import moment from "moment";

import { Visitor } from "../constants/types";

type LegendProps = {
	lastAddedVisitor: Visitor;
};

const Legend = ({ lastAddedVisitor }: LegendProps) => {
	return (
		<div className="legend-wrapper">
			{`Hello ${lastAddedVisitor?.name} from ${
				lastAddedVisitor?.country
			} on ${moment(lastAddedVisitor?.birthday, "YYYY/MM/DD").format(
				"DD"
			)} of ${moment(lastAddedVisitor?.birthday, "YYYY/MM/DD").format(
				"MMMM"
			)} you will have ${moment().diff(
				lastAddedVisitor?.birthday,
				"years"
			)} old!`}
		</div>
	);
};

export default Legend;
