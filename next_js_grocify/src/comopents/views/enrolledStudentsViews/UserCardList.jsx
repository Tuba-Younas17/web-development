"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkeletonLoader from "@/comopents/layout/SkeletonLoader";

const UserCardList = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get("/api/auth/enrolledStudents");
				setUsers(response.data);
			} catch (error) {
				toast.error("Failed to fetch users");
			} finally {
				setLoading(false);
			}
		};
		fetchUsers();
	}, []);

	const deleteUser = async (id) => {
		if (confirm("Are you sure you want to delete this user?")) {
			try {
				await axios.delete(`/api/auth/${id}`);
				toast.success("Student data deleted successfully");
				setUsers((prev) => prev.filter((user) => user._id !== id));
			} catch (error) {
				toast.error("Failed to delete user");
			}
		}
	};

	const handleEdit = (id) => {
		router.push(`/editUser/${id}`);
	};

	if (loading) return <SkeletonLoader/>;

	return (
		<>
			{users?.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{users.map((user) => (
						<div
							key={user._id}
							className="border p-4 rounded shadow"
						>
							<h3 className="text-xl font-semibold">
								{user.name}
							</h3>
							<p>Age: {user.age}</p>
							<p>Courses: {user.courses?.join(", ")}</p>
							<div className="mt-2 flex space-x-2">
								<button
									onClick={() => handleEdit(user._id)}
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
			) : (
				<p className="text-gray-500">No students enrolled yet.</p>
			)}

			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar
			/>
		</>
	);
};

export default UserCardList;
