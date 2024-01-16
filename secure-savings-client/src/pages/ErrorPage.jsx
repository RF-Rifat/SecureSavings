import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <>
            <div className="flex justify-center max-w-screen-xl mx-auto">
                <img className="h-[90vh] object-cover w-full" src="https://img.freepik.com/free-vector/phishing-account-concept_23-2148530847.jpg?1&w=740&t=st=1705410161~exp=1705410761~hmac=00267cee20e918ba2f0c75ac06f2275189565921e0ed408ef5341dc7528c7488" alt="Error" />
            </div>
            <div className="text-center my-5">
                <Link to={'/'}><button className="btn bg-deep-purple-700 py-2 px-3 text-white rounded-md">Back To Home</button></Link>
            </div>
        </>
    );
};

export default ErrorPage;