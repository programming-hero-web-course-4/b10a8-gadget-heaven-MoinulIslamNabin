

const TermsHome = () => {
  const date = new Date().getFullYear();
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center -translate-y-[3%] md:-translate-y-[5%]">
        <div className="hero justify-start bg-white w-3/4 outline outline-offset-[16px] outline-white ring-[16px] ring-white/30  rounded-2xl">
          <div className="hero-content text-start md:p-8 w-11/12">
            <div className="flex flex-col gap-4">

              <h1 className="text-3xl text-black/80 font-bold">Terms and Conditions</h1>
              <h3 className="text-xl text-black/70 font-semibold">Last Updated: {date}</h3>
              <p className="text-base text-black/50 font-normal mb-4">
              Welcome to Gadget Heaven, operated by Gadget Heaven Corp. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully. If you do not agree to these terms, you should not use our website.
              </p>

              <hr />

              <h3 className="text-xl text-black/70 font-semibold mt-4"> Acceptance of Terms</h3>
              <p className="text-base text-black/50 font-normal mb-4">
              By using this website, you affirm that you are at least 18 years old and are fully able and competent to enter into and comply with these terms and conditions.
              </p>

              <hr />

              <h3 className="text-xl text-black/70 font-semibold mt-4">Product Information</h3>
              <p className="text-base text-black/50 font-normal mb-4">
              Gadget Heaven strives to ensure that all product information is accurate and up to date. However, we cannot guarantee that all descriptions, prices, and other details are complete, reliable, or error-free. Prices are listed in Bangladeshi Taka <span className="font-black">(BDT)</span> and are subject to change without notice.
              </p>

              <hr />

              <h3 className="text-xl text-black/70 font-semibold mt-4">Ordering and Payment</h3>
              <p className="text-base text-black/50 font-normal mb-4">
              When you place an order on our website, you agree to provide accurate and complete information. Payment for all orders must be made at the time of purchase. We accept various payment methods as specified on the website.
              </p>

              <hr />

              <h3 className="text-xl text-black/70 font-semibold mt-4">Return Policy</h3>
              <p className="text-base text-black/50 font-normal mb-4">
              At Gadget Heaven, we offer a standard return policy. If you are not satisfied with your purchase, you may return it within 30 days of receiving the product for a full refund or exchange. To be eligible for a return, the item must be unused and in its original packaging. Please contact our customer service for instructions on how to process your return.
              </p>

              <hr />

              <h3 className="text-xl text-black/70 font-semibold mt-4">Limitation of Liability</h3>
              <p className="text-base text-black/50 font-normal mb-4">
              Gadget Heaven Corp shall not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our products or services. Our liability is limited to the maximum extent permitted by law.
              </p>

              <hr />

              <h3 className="text-xl text-black/70 font-semibold mt-4">Intellectual Property</h3>
              <p className="text-base text-black/50 font-normal mb-4">
              All content, trademarks, and other intellectual property on the Gadget Heaven website are owned by or licensed to Gadget Heaven Corp. You may not reproduce, distribute, or otherwise use any content from our site without our express written permission.
              </p>

              <hr />

              <h3 className="text-xl text-black/70 font-semibold mt-4">Changes to Terms</h3>
              <p className="text-base text-black/50 font-normal mb-4">
              Gadget Heaven Corp reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on this website. Your continued use of the site after any changes indicates your acceptance of the new terms.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsHome;
