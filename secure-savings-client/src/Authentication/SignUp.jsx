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
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data, "form submitted");
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: "User created successfully",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center lg:h-screen mb-14 mt-14">
      {/* Left Side: SignUp Card */}
      <Card className="w-full md:w-96 mb-6 md:mb-0 mx-4">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="flex flex-col gap-4">
            <Input label="Name" size="lg" {...register("name")} required />
            <Input label="Image" size="lg" {...register("image")} required />
            <Input label="Email" size="lg" {...register("email")} required />
            <Input
              label="Password"
              size="lg"
              {...register("password", {
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              required
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth type="submit">
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Typography
                as="a"
                href="/login"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Login
              </Typography>
            </Typography>
          </CardFooter>
          <div className="flex items-center  space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Signup with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <SocialLogin></SocialLogin>
        </form>
      </Card>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://i.ibb.co/QJWk2dd/money-transfer-663-256.gif"
          alt="Right Side Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignUp;
