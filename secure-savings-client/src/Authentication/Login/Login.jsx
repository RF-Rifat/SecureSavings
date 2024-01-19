import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import SocialLogin from "../SocialLogin";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    // <div className="flex flex-col md:flex-row justify-center items-center mt-14 mb-14 lg:h-screen">
    //   {/* Left Side: Image */}
    //   <div className="w-full md:w-1/2 mb-6 md:mb-0">
    //     <img
    //       src="https://i.ibb.co/MBhxsyT/open-banking-platform-online-banking-system-finance-digital-transformation-concept-688351-161.jpg"
    //       alt="Left Side Image"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>

    //   {/* Right Side: Login Card */}
    //   <Card className="w-full md:w-96 mb-14 mt-14 md:ml-6">
    //     <CardHeader
    //       variant="gradient"
    //       color="gray"
    //       className="mb-4 grid h-28 place-items-center"
    //     >
    //       <Typography variant="h3" color="white">
    //         Login
    //       </Typography>
    //     </CardHeader>
    //     <CardBody className="flex flex-col gap-4">
    //       <Input label="Name" size="lg" />
    //       <Input label="Email" size="lg" />
    //       <Input label="Password" size="lg" />
    //       <div className="-ml-2.5">
    //         <Checkbox label="Remember Me" />
    //       </div>
    //     </CardBody>
    //     <CardFooter className="pt-0">
    //       <Button variant="gradient" fullWidth>
    //         Login
    //       </Button>
    //       <Typography variant="small" className="mt-6 flex justify-center">
    //         Don&apos;t have an account?
    //         <Typography
    //           as="a"
    //           href="/signUp"
    //           variant="small"
    //           color="blue-gray"
    //           className="ml-1 font-bold"
    //         >
    //           Sign up
    //         </Typography>
    //       </Typography>
    //     </CardFooter>
    //     <div className="flex items-center  space-x-1">
    //       <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    //       <p className="px-3 text-sm dark:text-gray-400">
    //         Login with social accounts
    //       </p>
    //       <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
    //     </div>
    //     <SocialLogin></SocialLogin>
    //   </Card>
    // </div>
    <>
      {/* Section: Design Block */}
      <section className="background-radial-gradient mb-40 overflow-hidden">
        <style
          dangerouslySetInnerHTML={{
            __html: `
        .background-radial-gradient {
          background-color: hsl(120, 41%, 15%);
          background-image: radial-gradient(650px circle at 0% 0%,
              hsl(120, 41%, 35%) 15%,
              hsl(120, 41%, 30%) 35%,
              hsl(120, 41%, 20%) 75%,
              hsl(120, 41%, 19%) 80%,
              transparent 100%),
            radial-gradient(1250px circle at 100% 100%,
              hsl(120, 41%, 45%) 15%,
              hsl(120, 41%, 30%) 35%,
              hsl(120, 41%, 20%) 75%,
              hsl(120, 41%, 19%) 80%,
              transparent 100%);
        }
        #radius-shape-1 {
          height: 220px;
          width: 220px;
          top: -60px;
          left: -130px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }
        #radius-shape-2 {
          border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
          bottom: -60px;
          right: -110px;
          width: 300px;
          height: 300px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }
      `,
          }}
        />

        {/* Jumbotron */}
        <div className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
          <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0" style={{ zIndex: 10 }}>
                <h1 className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                  Secure Banking <br />
                  <span className="text-[hsl(156,26%,58%)]">
                    Solutions for You
                  </span>
                </h1>
                <p className="opacity-70 text-[hsl(218,81%,85%)]">
                  Discover peace of mind with our secure savings banking
                  solutions tailored just for you, ensuring the utmost
                  protection and confidence in every financial transaction
                </p>
              </div>
              <div className="relative mb-12 lg:mb-0">
                <div
                  id="radius-shape-1"
                  className="absolute rounded-full shadow-lg"
                />
                <div id="radius-shape-2" className="absolute shadow-lg" />
                <div className="relative bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.9)] dark:shadow-black/20 md:px-12">
                  <form>
                    <div className=" mb-6" data-te-input-wrapper-init="">
                      <Input
                        label="Name"
                        size="lg"
                        {...register("name")}
                        required
                      />
                    </div>
                    <div className=" mb-6" data-te-input-wrapper-init="">
                      <Input
                        label="Email"
                        size="lg"
                        {...register("email")}
                        required
                      />
                    </div>
                    <div className=" mb-6" data-te-input-wrapper-init="">
                      <Input
                        label="Password"
                        size="lg"
                        {...register("password")}
                        required
                      />
                    </div>
                    <Typography
                      variant="small"
                      className="mt-6 mb-4 flex justify-center"
                    >
                      Don&apos;t have an account?
                      <Typography
                        as="a"
                        href="/signUp"
                        variant="small"
                        color="blue-gray"
                        className="ml-1 font-bold"
                      >
                        Sign up
                      </Typography>
                    </Typography>
                    <button
                      type="button"
                      data-te-ripple-init=""
                      data-te-ripple-color="light"
                      className="mb-6 inline-block w-full rounded bg-green-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Login
                    </button>
                    <div className="text-center">
                      <p className="mb-6 dark:text-neutral-50">
                        or login with:
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <a
                        href="#!"
                        role="button"
                        className="action:text-primary-700 dark:action:text-primary-600 text-primary transition duration-200 ease-in-out hover:text-primary-600 focus:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500"
                      >
                        {/* Facebook */}
                        <span className="[&>svg]:mx-4 [&>svg]:h-4 [&>svg]:w-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        href="#!"
                        role="button"
                        className="action:text-primary-700 dark:action:text-primary-600 text-primary transition duration-200 ease-in-out hover:text-primary-600 focus:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500"
                      >
                        {/* Google */}
                        <span className="[&>svg]:mx-4 [&>svg]:h-4 [&>svg]:w-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 488 512"
                          >
                            {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                            <path
                              fill="currentColor"
                              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        href="#!"
                        role="button"
                        className="action:text-primary-700 dark:action:text-primary-600 text-primary transition duration-200 ease-in-out hover:text-primary-600 focus:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500"
                      >
                        {/* Twitter */}
                        <span className="[&>svg]:mx-4 [&>svg]:h-4 [&>svg]:w-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </span>
                      </a>
                      <a
                        href="#!"
                        role="button"
                        className="action:text-primary-700 dark:action:text-primary-600 text-primary transition duration-200 ease-in-out hover:text-primary-600 focus:text-primary-600 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500"
                      >
                        {/* Github */}
                        <span className="[&>svg]:mx-4 [&>svg]:h-4 [&>svg]:w-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>
  );
};

export default Login;
