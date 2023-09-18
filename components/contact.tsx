"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { useRef } from 'react';

interface Ref {
  current: HTMLInputElement | null;
}

interface InputRef {
  current: HTMLInputElement | null;
}

interface TextareaRef {
  current: HTMLTextAreaElement | null;
}

export default function Contact({ contact }: { contact: PortableTextBlock[]}) {
  const { ref } = useSectionInView("Contact");
  const emailRef: InputRef = useRef(null);
  const textareaRef: TextareaRef = useRef(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="text-gray-700 -mt-6 dark:text-white/80">
        <PortableText value={contact} />
      </div>

      <form 
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");

          if (emailRef.current) {
            emailRef.current.value = '';
          }
          
          if (textareaRef.current) {
            textareaRef.current.value = ''; 
          }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          ref={emailRef}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          ref={textareaRef}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}