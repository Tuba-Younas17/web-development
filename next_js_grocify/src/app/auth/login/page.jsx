
import LoginForm from "@/comopents/views/loginViews/LoginForm";
import Link from "next/link";


const LoginPage = () => (
	<>
		<h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
			Login
		</h2>
		<LoginForm />
		<p className="mt-6 text-gray-600 text-sm text-center">
			Don’t have an account?{" "}
			<Link
				href="/auth/register"
				className="text-indigo-600 hover:underline"
			>
				Sign Up
			</Link>
		</p>
	</>
);

export default LoginPage;
