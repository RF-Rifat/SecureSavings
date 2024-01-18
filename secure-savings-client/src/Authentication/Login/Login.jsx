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

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-14 mb-14 lg:h-screen">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://i.ibb.co/MBhxsyT/open-banking-platform-online-banking-system-finance-digital-transformation-concept-688351-161.jpg"
          alt="Left Side Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Login Card */}
      <Card className="w-full md:w-96 mb-14 mt-14 md:ml-6">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Login
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Name" size="lg" />
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Login
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
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
        </CardFooter>
        <div className="flex items-center  space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <SocialLogin></SocialLogin>
      </Card>
    </div>
  );
};

export default Login;
