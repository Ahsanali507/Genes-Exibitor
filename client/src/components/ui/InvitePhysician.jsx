import React from "react";

const InvitePhysician = () => {
    return (
        <div className="bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-2xl font-bold text-[#222B45] mb-2">Physician 1</h2>
            <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                    <label className="block text-sm text-gray-500 mb-2" htmlFor="physician2-email">
                        Physician 1 Email
                    </label>
                    <input
                        type="email"
                        id="physician1-email"
                        placeholder="Enter Physician 1 Email"
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 mb-6"
                    />
                </div>
                <div>
                    <h2 className="text-sm text-[#757575] mb-2">Description</h2>
                    <label className="block text-sm text-gray-500 mb-1" htmlFor="physician1-description">
                    </label>
                    <input
                        type="text"
                        id="physician2-description"
                        placeholder="Write your Message Here"
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 mb-6"
                    />
                </div>
            </div>
            <h2 className="text-2xl font-bold text-[#222B45] mb-2">Physician 2</h2>
            <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                    <label className="block text-sm text-gray-500 mb-2" htmlFor="physician2-email">
                        Physician 2 Email
                    </label>
                    <input
                        type="email"
                        id="physician2-email"
                        placeholder="Enter Physician 2 Email"
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 mb-6"
                    />
                </div>
                <div>
                    <h2 className="text-sm text-[#757575] mb-2">Description</h2>
                    <label className="block text-sm text-gray-500 mb-1" htmlFor="physician2-description">
                    </label>
                    <input
                        type="text"
                        id="physician2-description"
                        placeholder="Write your Message Here"
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none py-2 mb-6"
                    />
                </div>
            </div>

            <button className="bg-red-600 text-white py-2 px-6 hover:bg-red-700 transition duration-200 w-32">
                Invite
            </button>
        </div>
    );
};

export default InvitePhysician;
