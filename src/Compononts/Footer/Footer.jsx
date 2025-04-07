import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const togglePrivacy = () => setShowPrivacy(!showPrivacy);

  return (
    <>
      <div className="grid justify-center gap-1 p-3 items-center md:flex md:justify-between md:items-center md:h-14 md:px-16  ">
        <span className="justify-self-center">© 2025 – MiLo Chatbot</span>
        <div className="underline underline-offset-1 justify-self-center">
          <a href="https://portal.hebron.edu/Default.aspx">
            Hebron University Portal
          </a>
        </div>
        <div className="underline underline-offset-1 justify-self-center">
          <button
            className="underline underline-offset-1 justify-self-center"
            onClick={togglePrivacy}
          >
            Privacy Policy
          </button>
        </div>
        {showPrivacy && (
          <>
            <div className="fixed inset-0 md:z-50  bg-black/85 flex items-center justify-center p-4 md:p-6 2xl:p-8">
              <div className="bg-sky-700 w-full overflow-y-auto max-h-full custom-scrollbar z-50 text-white p-6 md:p-8 2xl:p-10 rounded-xl shadow-md md:w-full 2xl:max-w-2xl overflow-hidden relative">
                <div className="top-4 md:top-8 2xl:top-10 right-4 md:right-12 2xl:right-16">
                  <button
                    onClick={togglePrivacy}
                    className="text-2xl md:text-3xl 2xl:text-4xl fixed top-3 right-3 md:top-8 md:right-10"
                  >
                    <FontAwesomeIcon icon={faXmark} shake size="md" />
                  </button>
                  <div className="text-base">
                    <p>
                      Welcome to the MiLo Chatbot website. This Privacy Policy
                      explains how we collect, use, and protect your information
                      when you interact with our chatbot. By using the chatbot,
                      you agree to the terms outlined in this policy.
                    </p>

                    <h2 className="text-lg font-semibold mt-6">
                      1. Information We Collect
                    </h2>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Personal Information:</strong> (e.g., name,
                        email, phone number) when you voluntarily provide it.
                      </li>
                      <li>
                        <strong>Order Information:</strong> (e.g., food orders,
                        preferences, special requests).
                      </li>
                      <li>
                        <strong>Chat Logs & Messages:</strong> to improve
                        customer service and chatbot responses.
                      </li>
                      <li>
                        <strong>Device & Usage Data:</strong> (e.g., IP address,
                        browser type, interaction data) for analytics and
                        troubleshooting.
                      </li>
                    </ul>

                    <h2 className="text-lg font-semibold mt-6">
                      2. How We Use Your Information
                    </h2>
                    <ul className="list-disc list-inside">
                      <li>Process food orders and reservations.</li>
                      <li>
                        Provide customer support and respond to inquiries.
                      </li>
                      <li>Improve chatbot performance and user experience.</li>
                      <li>Analyze trends and optimize restaurant services.</li>
                      <li>
                        Send promotions, updates, or offers (only if you
                        opt-in).
                      </li>
                    </ul>
                    <h2 className="text-lg font-semibold mt-6">
                      3. Data Sharing & Disclosure
                    </h2>
                    <p>
                      We do <strong>not</strong> sell or rent your personal
                      information. However, we may share data with:
                    </p>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Service Providers:</strong> (e.g., food delivery
                        partners, payment processors) to fulfill your orders.
                      </li>
                      <li>
                        <strong>Legal Authorities:</strong> if required by law
                        or to protect against fraud and security threats.
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> in case of a
                        merger, acquisition, or restructuring.
                      </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                      4. Data Security
                    </h2>
                    <p>
                      We take appropriate security measures to protect your data
                      from unauthorized access, disclosure, or misuse. However,
                      no system is 100% secure, so we cannot guarantee absolute
                      security.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                      5. Your Rights & Choices
                    </h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Request access to or deletion of your personal data.
                      </li>
                      <li>Opt-out of marketing communications.</li>
                      <li>Restrict certain types of data processing.</li>
                    </ul>
                    <p>
                      To exercise your rights, please contact us at{" "}
                      <strong>[Insert Contact Email]</strong>.
                    </p>

                    <h2 className="text-lg font-semibold mt-6">
                      6. Cookies & Tracking Technologies
                    </h2>
                    <p>
                      We may use cookies and tracking technologies to enhance
                      chatbot functionality and analytics. You can control
                      cookie settings through your browser.
                    </p>

                    <h2 className="text-lg font-semibold mt-6">
                      7. Third-Party Links
                    </h2>
                    <p>
                      Our chatbot may link to third-party services (e.g.,
                      payment processors, reservation systems). We are not
                      responsible for their privacy practices, and we encourage
                      you to review their policies.
                    </p>

                    <h2 className="text-lg font-semibold mt-6">
                      8. Changes to This Policy
                    </h2>
                    <p>
                      We may update this Privacy Policy periodically. The latest
                      version will always be available through the chatbot or on
                      our website.
                    </p>

                    <h2 className="text-lg font-semibold mt-6">
                      9. Contact Us
                    </h2>
                    <p>
                      For questions or concerns regarding this Privacy Policy,
                      please contact us at:
                    </p>
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Email:</strong> [Insert Contact Email]
                      </li>
                      <li>
                        <strong>Phone:</strong> [Insert Contact Number]
                      </li>
                      <li>
                        <strong>Address:</strong> [Insert Business Address]
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Footer;
