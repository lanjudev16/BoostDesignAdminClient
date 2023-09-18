import { useForm } from "react-hook-form"
import { FaBeer, FaFacebook, FaGoogle } from "react-icons/fa";
const AddItem = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
      console.log(watch("example"))
    return (
<div >
      <section className="text-[#FEF9FA] body-font relative text-base">
        <div className="container px-5 py-10  mx-auto border-2xl ">
          <div className="lg:w-1/2 md:w-2/3 mx-auto ">
            <div className=" border-[1px] border-[#a15999] px-10 py-10 rounded-md">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-[#a15999]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="Phone"
                      required
                      placeholder="Enter your Email"
                      name="Phone"
                      className="w-full bg-white rounded border border-[#a15999] focus:border-[#a15999]  outline-none text-[#a15999] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-[#a15999]"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-[#a15999]"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your password"
                      id="Purpose of visit"
                      name="Purpose of visit"
                      className="w-full bg-white rounded border border-[#a15999] focus:border-[#a15999]  outline-none text-[#a15999] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-[#a15999]"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-[#a15999]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="Phone"
                      required
                      placeholder="Enter your Email"
                      name="Phone"
                      className="w-full bg-white rounded border border-[#a15999] focus:border-[#a15999]  outline-none text-[#a15999] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-[#a15999]"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="email"
                      className="leading-7 text-sm text-[#a15999]"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your password"
                      id="Purpose of visit"
                      name="Purpose of visit"
                      className="w-full bg-white rounded border border-[#a15999] focus:border-[#a15999]  outline-none text-[#a15999] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-[#a15999]"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className=" w-full text-center text-[#fff] bg-[#a15999] border-0 py-2 px-8 focus:outline-none hover:bg-[#a8599f] rounded text-lg">
                    Add Item
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
    );
};

export default AddItem;