
import Link from "next/link";

const Navbar = () => {
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
					<Link href="enrolledStudents">
						<p className="text-gray-700 hover:text-indigo-500">
							Enrolled Students
						</p>
					</Link>
					<Link href="/auth/login">
						<p className="text-gray-700 hover:text-indigo-500">
							Login
						</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
