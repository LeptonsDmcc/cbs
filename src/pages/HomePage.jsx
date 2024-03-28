// import React from 'react'
import peugeot from "../assets/images/peugeot.png"


const HomePage = () => {
    return (<>
        <div className="flex justify-center gap-8 px-5 my-24 text-bold">
            <ul>
                <li className="min-w-[255px] bg-[#a8cf45] p-4 cursor-pointer
            hover:bg-gray-200 border py-4 text-center">
                    Peugeot
                </li>
                <li className="min-w-[255px] bg-gray-200 p-4 cursor-pointer
            hover:bg-[#a8cf45] my-1 py-4 text-center">
                    Toyota Corolla
                </li>
                <li className="min-w-[255px] bg-gray-200 p-4 cursor-pointer
            hover:bg-[#a8cf45] my-1 py-4 text-center">
                    Toyota Hilux
                </li>
                <li className="min-w-[255px] bg-gray-200 p-4 cursor-pointer
            hover:bg-[#a8cf45] my-1 py-4 text-center">
                    White Mini-Bus
                </li>
                <li className="min-w-[255px] bg-gray-200 p-4 cursor-pointer
            hover:bg-[#a8cf45] my-1 py-4 text-center">
                    Black Mini-Bus
                </li>
                <li className="min-w-[255px] bg-gray-200 p-4 cursor-pointer
            hover:bg-[#a8cf45] my-1 py-4 text-center">
                    Hijet 339
                </li>
                <li className="min-w-[255px] bg-gray-200 p-4 cursor-pointer
            hover:bg-[#a8cf45] my-1 py-4 text-center">
                    Hijet 340
                </li>
            </ul>

            <div className="w-1/3">

                <img src={peugeot} alt="" className=" w-full " />
            </div>


            <ul>
                <li className="min-w-[255px] bg-[#a8cf45] p-4 text-center">
                    Car Details
                </li>

                <table className="border w-full justify-between py-2 text-center">
                    <tbody>
                        <tr>
                            <td className="border border-gray-500 py-2">NAME</td>
                            <td className="border border-gray-500 py-2">PEUGEOT</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-500 py-2">TYPE</td>
                            <td className="border border-gray-500 py-2">206</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-500 py-2">PLATE</td>
                            <td className="border border-gray-500 py-2">Value</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-500 py-2">COLOR</td>
                            <td className="border border-gray-500 py-2">BLUE</td>
                        </tr>
                    </tbody>
                </table>
            </ul>

        </div>
        <form className="flex flex-col justify-center items-center m-20">
            <section className="flex justify-center gap-12 my-10">
            <div>
                <label htmlFor="" className="block">Date & Time</label>
                <input className="min-w-[225px] py-2 px-2 border shadow-lg my-2"
                    type="datetime-local" id="date-time" />
            </div>
            <div>
                <h2>Dropoff Location:</h2>
                <select className="min-w-[225px] py-2 px-2 border shadow-lg my-2">
                    <option value="">Select Location</option>
                    <option value="option1">Wuse</option>
                    <option value="option2">CBD</option>
                    <option value="option3">Garki</option>
                </select>
            </div>

            </section>
            <button className=" w-max py-2 px-4 rounded-2xl bg-gray-900 text-white">Request Booking</button>
        </form>


    </>
    )
}

export default HomePage