
import UserCardList from "@/comopents/views/enrolledStudentsViews/UserCardList";
import React from "react";


const EnrolledStudents = () => {
	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-4">Enrolled Students</h2>
			<UserCardList />
		</div>
	);
};

export default EnrolledStudents;
