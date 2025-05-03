import LoginForm from "@/comopents/views/loginViews/LoginForm";
import Link from "next/link";


const RegisterPage = () => (
	<>
		<h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
			Register
		</h2>
		<LoginForm />

		<p className="mt-6 text-gray-600 text-sm text-center">
			Already have an account?{" "}
			<Link
				href="/auth/login"
				className="text-indigo-600 hover:underline"
			>
				Login
			</Link>
		</p>
	</>
);

export default RegisterPage;
