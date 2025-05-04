"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkeletonLoader from "@/comopents/layout/SkeletonLoader";
import { courseOptions } from "@/constants/courseOptions";

const EditUserForm = ({ id }) => {
	const router = useRouter();
	const [initialValues, setInitialValues] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(`/api/auth/${id}`);
				setInitialValues({
					name: response.data.name,
					age: response.data.age,
					courses: response.data.courses || [],
				});
			} catch (error) {
				console.error("Error fetching user data:", error);
				toast.error("Failed to fetch user data");
			}
		};
		fetchUser();
	}, [id]);

	const validationSchema = Yup.object({
		name: Yup.string().required("Name is required"),
		age: Yup.number()
			.required("Age is required")
			.min(10, "Minimum age is 10"),
		courses: Yup.array()
			.min(1, "Select at least one course")
			.required("Courses are required"),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: initialValues || {
			name: "",
			age: "",
			courses: [],
		},
		validationSchema,
		onSubmit: async (values) => {
			try {
				await axios.put(`/api/auth/${id}`, values);
				toast.success("Student data updated successfully");
				setTimeout(() => router.push("/enrolledStudents"), 2000);
			} catch (err) {
				console.error("Update Error:", err);
				toast.error("Failed to update user");
			}
		},
	});

	if (!initialValues) return <SkeletonLoader />;

	return (
		<div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md mt-6">
			<h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
				Edit User
			</h2>

			<form className="space-y-5" onSubmit={formik.handleSubmit}>
				<div>
					<label className="block text-gray-700 mb-1">Name</label>
					<input
						type="text"
						name="name"
						className="w-full border border-gray-300 p-3 rounded-lg"
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.name && formik.errors.name && (
						<p className="text-sm text-red-600">
							{formik.errors.name}
						</p>
					)}
				</div>

				<div>
					<label className="block text-gray-700 mb-1">Age</label>
					<input
						type="number"
						name="age"
						className="w-full border border-gray-300 p-3 rounded-lg"
						value={formik.values.age}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.age && formik.errors.age && (
						<p className="text-sm text-red-600">
							{formik.errors.age}
						</p>
					)}
				</div>

				<div>
					<label className="block text-gray-700 mb-1">Courses</label>
					<select
						name="courses"
						multiple
						className="w-full border border-gray-300 p-3 rounded-lg h-32"
						value={formik.values.courses}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					>
						{courseOptions.map((course) => (
							<option key={course.value} value={course.value}>
								{course.label}
							</option>
						))}
					</select>
					{formik.touched.courses && formik.errors.courses && (
						<p className="text-sm text-red-600">
							{formik.errors.courses}
						</p>
					)}
				</div>

				<button
					type="submit"
					className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-200"
				>
					Update
				</button>
			</form>

			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar
			/>
		</div>
	);
};

export default EditUserForm;
