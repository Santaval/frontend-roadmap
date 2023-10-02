import { Divider, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import { HiEyeSlash } from "react-icons/hi2";
import { IoEyeSharp } from "react-icons/io5";
import Google from "../components/Google";
import Github from "../components/Github";
import { Link } from "react-router-dom";

function Login() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [login, setLogin] = useState({});

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="pt-8">
      <div className="p-8 md:m-auto md:w-1/4 ">
        <img src="./logo.png" alt="" />

        <form
          className="w-full   flex flex-col justify-center gap-8 items-center"
          action=""
        >
          <Input
            name="email"
            onChange={handleChange}
            variant="bordered"
            type="email"
            label="Email"
            placeholder="you@savaldev.com"
            labelPlacement="inside"
            endContent={
              <FiMail lassName="text-2xl text-default-400 pointer-events-none" />
            }
          />

          <Input
            name="password"
            onChange={handleChange}
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <IoEyeSharp className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <HiEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
          />
        </form>

        {login.email || login.password ? (
          <div>
            <button className="w-full mt-8 bg-default-500 text-white py-2 rounded-md">
              Login
            </button>
            <span>
              <Link to={"/recovery"} className="text-center text-xs mt-4 text-primary">
                ¿Olvidaste la contraseña?
              </Link>
            </span>
          </div>
        ) : (
          <>
            <Divider className="mt-8" />
            <span>
              <p className="text-center mt-4">O ingresa con</p>
            </span>
            <div className="flex justify-around mt-8">
              <Google />
              <Github />
            </div>
          </>
        )}

        <div>
          <p className="text-center text-sm mt-8">
            ¿No tienes una cuenta?{" "}
            <Link className="text-primary " to="/register">
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
