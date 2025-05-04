// File: app/editUser/[id]/page.jsx
import EditUserForm from "@/comopents/views/editUser/EditUserForm";
import React from "react";


const EditUserPage = ({ params }) => {
	return <EditUserForm id={params.id} />;
};

export default EditUserPage;
