
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EnrolledStudents = () => {
	const [users, setUsers] = useState([]);

	// Fetch users on component mount
	useEffect(() => {
		fetchUsers();
	}, []);

	// Function to fetch users
	const fetchUsers = async () => {
		try {
			const response = await axios.get("api/auth/enrolledStudents");
			setUsers(response.data);
		} catch (error) {
			toast.error("Failed to fetch users");
		}
	};

	// Function to delete a user
	const deleteUser = async (id) => {
		if (confirm("Are you sure you want to delete this user?")) {
			try {
				await axios.delete(`/api/users/${id}`);
				toast.success("User deleted successfully");
				fetchUsers(); // Refresh the list
			} catch (error) {
				toast.error("Failed to delete user");
			}
		}
	};

	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-4">Enrolled Students</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{users.map((user) => (
					<div key={user._id} className="border p-4 rounded shadow">
						<h3 className="text-xl font-semibold">{user.name}</h3>
						<p>Age: {user.age}</p>
						<p>Courses: {user.courses.join(", ")}</p>
						<div className="mt-2 flex space-x-2">
							<button
								onClick={() => {
									// Implement edit functionality here
									// For example, navigate to an edit page with user ID
									// router.push(`/editUser/${user._id}`);
								}}
								className="bg-blue-500 text-white px-3 py-1 rounded"
							>
								Edit
							</button>
							<button
								onClick={() => deleteUser(user._id)}
								className="bg-red-500 text-white px-3 py-1 rounded"
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar
			/>
		</div>
	);
};

export default EnrolledStudents;
