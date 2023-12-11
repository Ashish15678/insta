"use client";
import { useState } from "react";
import { Switch } from "@nextui-org/react";
export default function Home() {
  const [signup, setSignup] = useState(true);

  const handlesignup = async () => {
    
  };

  return (
    <>
      <div className="signupModal ">
        <div className="">
          {/* <Switch
            defaultSelected
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? "Login" : "Signup"
            }
            onClick={() => {
              setSignup(!signup);
              console.log(signup);
            }}
            clasName="cursor-pointer text-3xl bg-zinc-100 p-4"
          ></Switch> */}
          {signup ? (
            <>
              <div className=" text-xl mt-8">
                <label htmlFor="" className="text-3xl ">
                  SignUP
                </label>
                <br /> <br />
                <label htmlFor="email" className="text-left">
                  Email:
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <br /> <label htmlFor="username">Username : </label>
                <br />{" "}
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                />{" "}
                <label htmlFor="password">Password:</label>
                <br />{" "}
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  id="password"
                />
                <br />
                <br />
                <button type="submit" onClick={handlesignup}>
                  Submit
                </button>{" "}
                <br />
                <label
                  htmlFor=""
                  onClick={() => {
                    setSignup(false);
                  }}
                  className="cursor-pointer"
                >
                  Login
                </label>
              </div>
            </>
          ) : (
            //////////////////////////////////////////
            ////////////////////////////////////////////
            //LOGIN
            <>
              <div className=" text-xl mt-8">
                <label htmlFor="" className="text-3xl ">
                  Login
                </label>
                <br />
                {/* <label htmlFor="email" className="text-left">
                  Email:
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <br /> <label htmlFor="password">Password:</label> */}
                <br /> <label htmlFor="username">Username : </label>
                <br />{" "}
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                />{" "}
                <br />
                <label htmlFor="password">Password</label> <br />
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  id="password"
                />
                <br />
                <button type="submit">Submit</button> <br />
              </div>
              <label
                htmlFor=""
                onClick={() => {
                  setSignup(true);
                }}
                className="cursor-pointer"
              >
                Signup
              </label>
            </>
          )}
        </div>
      </div>
    </>
  );
}
