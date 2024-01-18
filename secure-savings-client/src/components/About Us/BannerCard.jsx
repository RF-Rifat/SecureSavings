import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const BannerCard = () => {
  return (
    <section className="pb-20 bg-blue-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-200 w-full mb-8 shadow-xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"></div>
                <h6 className="text-xl font-semibold">Awarded Agency</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Divide details about your product or agency work into parts. A
                  paragraph describing a feature will be enough.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-amber-400"></div>
                <h6 className="text-xl font-semibold">Free Revisions</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Keep you user engaged by providing meaningful information.
                  Remember that by this time, the user is curious.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lime-700"></div>
                <h6 className="text-xl font-semibold">Verified Company</h6>
                <p className="mt-2 mb-4 text-blueGray-500">
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough. Keep you user engaged!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-user-friends text-xl" />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Working with us is a pleasure
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Don&apos;t let your uses guess by attaching tooltips and popoves
              to any element. Just make sure you enable them first via
              JavaScript.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you&apos;re good to
              go. Just make sure you enable them first via JavaScript.
            </p>
            <a className="font-bold text-blueGray-700 mt-8" href="#/">
              Check Notus React!
            </a>
          </div>
          {/* <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-lightBlue-500 fill-current"
                  />
                </svg>
                <h4 className="text-xl font-bold text-white">
                  Top Notch Services
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </blockquote>
            </div>
          </div> */}
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Our Journey: Crafting Exceptional Experiences
              </Typography>
              <Typography>
                At Secure-Saving, we pride ourselves on a journey that
                revolves around delivering exceptional financial experiences.
                From the very beginning, our commitment has been to provide a
                seamless and secure banking environment for our customers.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Discover Our Story</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
