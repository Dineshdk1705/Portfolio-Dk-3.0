import React from "react";
import { BsFillTelephoneFill, BsEnvelope } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type InputsType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = (formData) =>
    (window.location.href = `mailto:dineshdk555g@gmail.com?subject=${formData?.subject}&body=Hi, my name is ${formData?.name} ${formData?.email}. ${formData?.message}`);
  return (
    <div className="relative flex h-screen overflow-hidden flex-col text-left space-y-10  max-w-full mx-auto px-10 justify-end pb-10 items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">{`Let's Talk`}</span>
        </h4>
      </div>
      <div className="space-y-10">
        <div className="flex items-center justify-center space-x-5">
          <BsFillTelephoneFill className="fill-[#F7AB0A] w-6 h-6" />
          <p>+91-7909093015</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <BsEnvelope className="fill-[#F7AB0A] w-6 h-6" />
          <p>dineshdk555g@gmail.com</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <input
            {...register("name")}
            className="contactInput"
            type="text"
            placeholder="Name"
          />
          <input
            {...register("email")}
            className="contactInput"
            type="text"
            placeholder="Email"
          />
        </div>
        <input
          {...register("subject")}
          className="contactInput"
          placeholder="Subject"
        />
        <textarea
          {...register("message")}
          className="contactInput resize-none"
          placeholder="Message"
        />
        <button
          type="submit"
          className="bg-[#F7AB0A] py-4 px-10 rounded-md text-black font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
