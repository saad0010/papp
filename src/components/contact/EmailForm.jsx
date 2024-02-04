"use client";

import React, { useState } from "react";

const EmailForm = () => {
  const options = [
    "< 50",
    "50-99",
    "100-199",
    "200-500",
    "500-1000",
    "1000-9999",
    "10000+",
  ];

  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [organization, setOrganization] = useState("");
  const [quantity, setQty] = useState(options[0]);
  const [message, setMessage] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        organization,
        quantity,
        message,
      }),
    });
    const resp = await response.json();
    //console.log(resp.message);
    if (resp.message === "Form Submitted Successfully ") {
      setEmail("");
      setMessage("");
      setMobile("");
      setName("");
      setOrganization("");
      setQty("");
    }
  };
  return (
    <div>
      <div className="lg:w-[36%] lg:-mt-[35rem] lg:pb-6 lg:mb-10 bg-white">
        <div className="px-8 pt-12">
          <div className="text-center">
            <h2 className="font-bold font-mirza text-4xl">
              Get in touch with us!
            </h2>
            <p className="tracking-wider">
              You ll receive an email from a real, live human typically within
              an hour on business days. Our office hours are 9am 5pm EST
              weekdays.
            </p>
          </div>
          <div>
            <form
              action=""
              onSubmit={sendMail}
              className="flex flex-col space-y-4 mt-8"
            >
              <div>
                <label htmlFor="name" className="text-lg text-black font-mirza">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="true"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="e.g John Smith .."
                  className="ring-1 ring-gray-300 w-full  font-libre px-4 py-3 bg-gray-200   outline-none focus:ring-2 focus:ring-black "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-lg text-black font-mirza"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  required
                  autoComplete="true"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="abc@mail.com"
                  className="ring-1 ring-gray-300 w-full  font-libre  px-4 py-3  bg-gray-200 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="text-lg text-black font-mirza"
                >
                  Mobile Number
                </label>

                <input
                  type="number"
                  id="mobile"
                  autoComplete="true"
                  placeholder="123-456-7890"
                  required
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                  className="ring-1 ring-gray-300 w-full  font-libre  px-4 py-3  bg-gray-200 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="text-lg text-black font-mirza"
                >
                  Oraganization
                </label>

                <input
                  type="text"
                  id="organization"
                  autoComplete="true"
                  value={organization}
                  onChange={(e) => {
                    setOrganization(e.target.value);
                  }}
                  placeholder="Organization name (Optional)"
                  className="ring-1 ring-gray-300 w-full  font-libre  px-4 py-3  bg-gray-200 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="text-lg text-black font-mirza"
                >
                  Quantity
                </label>
                <select
                  className="outline-none focus:outline-none p-2 
                    ring-1 ring-gray-300 w-full  font-libre  px-4 py-3  bg-gray-200 focus:ring-2 focus:ring-black"
                  value={quantity}
                  onChange={(e) => setQty(e.target.value)}
                  required
                  id="quantity"
                >
                  {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                  {/* <option value="less50" key="1">
                        Less than 50
                      </option>
                      <option value="50-99" key="2">
                        50-99
                      </option>
                      <option value="100-199" key="3">
                        100-199
                      </option>
                      <option value="200-499" key="4">
                        200-499
                      </option>
                      <option value="500-999" key="5">
                        500-999
                      </option>
                      <option value="1000-9999" key="6">
                        1000-9,999
                      </option>
                      <option value="10000+" key="7">
                        10,000+
                      </option> */}
                </select>

                {/* <input
                    type="text"
                    placeholder="Less than 50"
                    className="ring-1 ring-gray-300 w-full  font-libre  px-4 py-4  bg-gray-200 outline-none focus:ring-2 focus:ring-black"
                    />*/}
              </div>

              <div className="pb-8">
                <label
                  htmlFor="message"
                  className="text-lg text-black font-mirza"
                >
                  Message
                </label>

                <textarea
                  type="text"
                  rows="4"
                  id="message"
                  autoComplete="true"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Describe your project"
                  className="ring-1 ring-gray-300 w-full font-libre  px-4 py-3  bg-gray-200  outline-none border-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                name="submitButton"
                className="inline-block self-center  font-mirza bg-yellow-400 hover:bg-black text-black hover:text-white font-bold rounded-lg px-8 pb-2 pt-4 uppercase text-lg"
              >
                GET IN TOUCH
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
