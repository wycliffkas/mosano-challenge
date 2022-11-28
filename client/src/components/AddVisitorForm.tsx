import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { VisitorContext } from "../context/VisitorContext";
import { VisitorContextType, Visitor, Country } from "../constants/types";
import Legend from "./Legend";

type Countries = {
	countries: Country[];
};

const AddVisitorForm = ({ countries }: Countries) => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { addVisitor, visitors } = useContext(
		VisitorContext
	) as VisitorContextType;

	const lastAddedVisitor = visitors[visitors.length - 1];

	return (
		<div className="wrapper">
			<Formik
				initialValues={{
					name: "",
					surname: "",
					country: "",
					birthday: ""
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(3, "Must be 3 characters or more")
						.required("Required"),
					surname: Yup.string()
						.min(3, "Must be 3 characters or more")
						.required("Required"),
					country: Yup.string().required("Required"),
					birthday: Yup.string().required("Required")
				})}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(false);
					addVisitor(values);
					setIsSubmitted(true);
					resetForm();
				}}
				enableReinitialize>
				{(formik) => (
					<form onSubmit={formik.handleSubmit}>
						<div>
							<label htmlFor="name">Name:</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="name here"
								{...formik.getFieldProps("name")}
							/>
							{formik.touched.name && formik.errors.name ? (
								<div className="error">{formik.errors.name}</div>
							) : null}
						</div>

						<div>
							<label htmlFor="surname">Surname:</label>
							<input
								type="text"
								className="form-control"
								placeholder="surname here"
								id="surname"
								{...formik.getFieldProps("surname")}
							/>
							{formik.touched.surname && formik.errors.surname ? (
								<div className="error">{formik.errors.surname}</div>
							) : null}
						</div>

						<div>
							<label htmlFor="countries">Countries:</label>
							<select
								className="form-control"
								id="country"
								required
								{...formik.getFieldProps("country")}>
								<option value="" disabled selected>
									Countries
								</option>
								{countries.map((country: Country) => (
									<option value={country?.name} key={country.name}>
										{country?.name}
									</option>
								))}
							</select>
							{formik.touched.country && formik.errors.country ? (
								<div className="error">{formik.errors.country}</div>
							) : null}
						</div>

						<div>
							<label htmlFor="birthday">Birthday:</label>
							<input
								type="date"
								className="form-control"
								id="birthday"
								required
								max={new Date().toISOString().split("T")[0]}
								{...formik.getFieldProps("birthday")}
							/>
							{formik.touched.birthday && formik.errors.birthday ? (
								<div className="error">{formik.errors.birthday}</div>
							) : null}
						</div>

						<div className="button-wrapper">
							<button type="submit" disabled={formik.isSubmitting}>
								{formik.isSubmitting ? "Loading..." : "Save"}
							</button>
						</div>
					</form>
				)}
			</Formik>

			{isSubmitted && <Legend lastAddedVisitor={lastAddedVisitor} />}
		</div>
	);
};

export default AddVisitorForm;
