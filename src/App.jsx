import carPro from "./assets/images/carpro.png"

function App() {

  return (
    <div className='w-full relative bg-white h-721px text-center text-30px text-white font-roboto'>
      <div className='absolute w-full top-0px right-0% left-0% shadow-0px_4px_4px_rgba(0,_0,_0,_0.25) h-721px'>
        <button className='cursor-pointer [border:none] p-0 bg-blue-900 absolute top-[493px] left-[228px] rounded-xl w-[322px] h-[72px]'>Log In </button>
        <input
          className="[border:none] [outline:none] font-semibold font-roboto text-xl bg-whitesmoke absolute top-[251px] left-[139px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[492px] h-[72px] pt-[29px] px-[27px] pb-[7px] box-border text-black"
          id="Email"
          placeholder="Enter your Email"
          type="email"
        />
        <input
          className="[border:none] [outline:none] font-semibold font-roboto text-xl bg-whitesmoke absolute top-[361px] left-[139px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[492px] h-[72px] pt-6 px-[27px] pb-3 box-border text-black"
          id="Password"
          placeholder="Password"
          type="password"
        />
        <img
          className="absolute top-[135px] left-[859px] w-[430px] h-[364px] object-cover"
          alt=""
          src={carPro}
          />
          <div className="absolute top-[-2px] left-[762px] box-border w-1 h-[725px] border-r-[2px] border-solid border-black" />
      </div>
    </div>
  )
}

export default App
