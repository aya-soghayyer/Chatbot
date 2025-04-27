import Frame from "../../assets/images/Frame.svg";
import { Link } from "react-router-dom";
import FilledButton from "../ui/FilledButton";
import UnFilledButton from "../ui/UnFilledButton";
import { useTranslation } from "react-i18next";

function WelcomeHeader() {
  const { t } = useTranslation();
  return (
    <header className="py-8 z-20 flex font-Outfit text-white  md:justify-start  2xl:-mt-16">
      <div className="flex flex-col px-6 md:gap-24 md:flex-row gap-6 2xl:gap-12 items-center md:px-4 2xl:px-7 relative">
        <div className="w-full md:z-10 md:w-1/3 md:ml-7 2xl:w-3/5">
          <h2 className="text-[42px] ml-3 whitespace-break-spaces md:whitespace-break-spaces md:text-5xl 2xl:text-7xl font-bold mb-4 uppercase leading-tight">
            <span className="tracking-wider -ml-2" > {t('welcome')}</span> {t('chatbotMilo')}
          </h2>
          <p className="md:text-base px-2 md:whitespace-break-spaces md:font-extralight text-lg 2xl:text-xl font-light">
           {t('description')}
          </p>
          <div className="flex flex-col w-full md:pt-7 md:flex-row md:justify-self-center md:w-[95%] justify-between mt-6 2xl:mt-10 gap-4">
            <Link to="/Login" className="w-full hidden md:flex md:w-[48%]">
              <FilledButton
                title={t('loginButton')}
                className="px-4 h-5/6 w-full md:mt-1"
              />
            </Link>
            <Link
              to="/Signup"
              className="w-full hidden md:flex md:w-[48%] md:mt-2"
            >
              <UnFilledButton
                title={t('registerButton')}
                className="px-4 py-3"
                className2="w-full"
              />
            </Link>
          </div>

          <div className="hidden text-base md:text-lg 2xl:text-xl md:flex justify-center my-6 underline underline-offset-2">
            <Link to="/guestchat">{t('guestChatButton')}</Link>
          </div>
        </div>

        <div className="md:z-40 w-4/5 sm:h-full  2xl:w-3/4 md:w-1/2 md:h-full flex flex-col -mt-4 items-center">
          <div className="">
            <img src={Frame} alt="computer" />
          </div>
          {/* Buttons duplicated here only for phone screen, hidden on md+ */}
          <div className="flex flex-col w-full mt-6 gap-4 md:hidden">
            <div className="flex flex-row justify-center gap-5 items-center">
              <Link to="/Login" className="w-full">
                <FilledButton title="login" className="px-4 py-3 w-full" />
              </Link>
              <Link to="/Signup" className="w-full mt-2">
                <UnFilledButton
                  title="Sign up"
                  className="px-4 py-3"
                  className2="w-full"
                />
              </Link>
            </div>
            <div className="text-base flex justify-center my-6 underline underline-offset-2">
              <Link to="/guestchat">Try it as Guest</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default WelcomeHeader;
