import SignupHeader from "../Compononts/Header/user/SignupHeader";
import Circle from "../Compononts/Circle/Circle";

function SignUp() {
  return (
    <>
      <div className="bg-primary items-center md:h-1vh  md:flex md:justify-center md:items-center 2xl:h-screen 2xl:flex 2xl:justify-center 2xl:items-center relative">
        <div className="absolute right-3 -top-12  md:-mt-28 md:right-[63rem] 2xl:-left-64 2xl:-top-24">
          <Circle />
        </div>
        <div className="2xl:flex 2xl:justify-center md:my-7 md:flex md:justify-center  md:w-11/12 2xl:w-11/12 2xl:-mt-16 ">
          <SignupHeader />
        </div>
        <div className="absolute hidden md:inline-flex md:top-16 md:right-32 2xl:top-40 2xl:right-11">
          <Circle />
        </div>
      </div>
    </>
  );
}

export default SignUp;
  