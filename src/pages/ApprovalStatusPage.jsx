// import React from 'react'

const ApprovalStatusPage = () => {
  return (
    <div>
      <div className="bg-gray-900 flex py-[20px] my-3 text-white gap-[1000px]">
        <p className="px-100 m-2 mx-3">Booking Approval Status</p>
        <button className="bg-[#a8cf45] p-2 ">New Booking</button>
      </div>
      <div className="bg-gray-300 flex py-1 gap-[500px]">
        <p className="mx-8">User</p>
        <p>Car Model</p>
        <p>Status</p>
      </div>
      <div className="bg-gray-100 flex py-3 my-1 gap-[500px]">
        <p className="mx-8">Efe</p>
        <p>Toyota Hilux</p>
        <p className="bg-red-300 p-1 rounded-xl"> Not Approved</p>
      </div>
      <div className="bg-gray-100 flex py-3 my-1 gap-[500px]">
        <p className="mx-8">Efe</p>
        <p>Toyota Hilux</p>
        <p className="bg-green-300 p-1 rounded-xl">Approved</p>
      </div>
      <div className="bg-gray-100 flex py-3 my-1 gap-[500px]">
        <p className="mx-8">Efe</p>
        <p>Toyota Hilux</p>
        <p className="bg-green-300 p-1 rounded-xl">Approved</p>
      </div>
      <div className="bg-gray-100 flex py-3 my-1 gap-[500px]">
        <p className="mx-8">Efe</p>
        <p>Toyota Hilux</p>
        <p className="bg-red-300 p-1 rounded-xl text-center"> Not Approved</p>
      </div>

    </div>
  )
}

export default ApprovalStatusPage