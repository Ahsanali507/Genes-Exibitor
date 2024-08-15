import React from "react";

const invitations = [
  {
    name: "Physician 1",
    email: "physician1@gmail.com",
    status: "Pending",
  },
  {
    name: "Physician 2",
    email: "physician2@gmail.com",
    status: "Accepted",
  },
];

const InvitationTable = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm">
      <div className="grid grid-cols-10 gap-4 p-4 bg-gray-100 text-gray-600 font-semibold">
        <div className="col-span-2">Invitation</div>
        <div className="col-span-6">Email ID</div>
        <div className="col-span-2">Status</div>
      </div>
      {invitations.map((invitation, index) => (
        <div key={index} className="grid grid-cols-10 gap-4 p-4 border-b last:border-none">
          <div className="text-gray-800 font-semibold col-span-2">{invitation.name}</div>
          <div className="text-gray-600 col-span-6">{invitation.email}</div>
          <div>
            <span
              className={`px-4 py-1 rounded-full text-white text-sm col-span-2 ${
                invitation.status === "Accepted" ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              {invitation.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvitationTable;
