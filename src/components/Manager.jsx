import React, { useEffect, useState,  } from "react";

const Manager = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if(passwords){
      setpasswordArray (JSON.parse(passwords))
    }
  }, [])

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const savePassword = () => {
    setpasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log(...passwordArray, form);

  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center ">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own password Manager
        </p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                id=""
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={showPassword}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/dicvhxpz.json"
                  trigger="hover"
                  colors="primary:#242424,secondary:#000000"
                ></lord-icon>
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-4 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
              colors="primary:#242424,secondary:#000000"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;