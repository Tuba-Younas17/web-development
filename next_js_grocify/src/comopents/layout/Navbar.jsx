"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userId, setUserId] = useState(null);
	const router = useRouter();

	useEffect(() => {
		const checkLoginStatus = async () => {
			try {
				const res = await axios.get("/api/auth/me", {
					withCredentials: true,
				});
				setIsLoggedIn(true);
				setUserId(res.data.userId);
			} catch (error) {
				setIsLoggedIn(false);
			}
		};

		checkLoginStatus();
	}, []);

	const handleLogout = async () => {
		try {
			await axios.delete("/api/auth/logout", {
				withCredentials: true,
			});
			setIsLoggedIn(false);
			router.push("/auth/login");
		} catch (error) {
			console.error("Logout failed:", error);
			alert("Failed to logout");
		}
	};

	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
				<div className="text-2xl font-bold text-indigo-600">
					SkillForge
				</div>
				<div className="flex space-x-6">
					<Link href="/">
						<p className="text-gray-700 hover:text-indigo-500">
							Home
						</p>
					</Link>
					<Link href="/courses">
						<p className="text-gray-700 hover:text-indigo-500">
							Courses
						</p>
					</Link>
					<Link href="/about">
						<p className="text-gray-700 hover:text-indigo-500">
							About
						</p>
					</Link>
					<Link href="/dashBoard">
						<p className="text-gray-700 hover:text-indigo-500">
							Dashboard
						</p>
					</Link>
					<Link href="/enrolledStudents">
						<p className="text-gray-700 hover:text-indigo-500">
							Enrolled Students
						</p>
					</Link>
					{isLoggedIn ? (
						<button
							onClick={handleLogout}
							className="text-red-500 hover:underline"
						>
							Logout
						</button>
					) : (
						<Link href="/auth/login">
							<p className="text-gray-700 hover:text-indigo-500">
								Login
							</p>
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
