import notFound from "../../assets/images/notFound.svg";

function NotFoundHeader() {
  return (
    <>
      <div className="w-full md:w-[50%] mt-[50%] md:mb-[0] md:mt-[5%] px-6">
        <img
          className="mt-[10%] md:mt-[5%] md:mb-[10%]"
          src={notFound}
          alt="Not Found Photo"
        />
      </div>
    </>
  );
}

export default NotFoundHeader;
