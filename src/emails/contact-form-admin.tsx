/** This is a email to the user for the contact form
 * Type — invoice email
 */

import * as React from "react";
import {
  Html,
  Tailwind,
  Body,
  Container,
  Heading,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import Logo from "./components/logo";

type Props = Readonly<{
  invoiceId: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  generatedOn: string;
}>;

const ContactFormAdminEmail: React.FC<Props> = ({
  invoiceId = "VK4Y70Y4T4264730RVYT",
  firstName = "John",
  lastName = "Doe",
  email = "doe.john@mail.com",
  subject = "Test",
  message = "This is a test message!",
  generatedOn = "2025-07-03",
}) => {
  const name = firstName + " " + lastName;

  return (
    <Html lang="en">
      <Tailwind>
        <Body className="w-full h-full box-border m-0 p-0 font-sans leading-normal antialiased">
          <Container className="w-full box-border p-1">
            <Section className="w-full mx-auto my-4 p-4 border border-solid border-gray-300 bg-gray-100">
              <Heading className="m-0 text-sm text-left leading-normal font-bold antialiased">
                Invoice Number
              </Heading>

              <Text className="m-0 text-base text-left leading-normal font-medium text-gray-600 antialiased">
                {invoiceId}
              </Text>
            </Section>

            <Section className="w-full my-10 mx-auto">
              <div className="flex items-center justify-center">
                <Logo />
              </div>
            </Section>

            <Section className="w-full mx-0 my-10 mb-0">
              <Text className="text-sm font-normal leading-normal antialiased text-left mt-10 mx-0 mb-6">
                <strong>{name}</strong> wants to connect with you. Please find
                below the invoice generated regarding the same as on{" "}
                {generatedOn}
              </Text>
            </Section>

            <Section className="w-full box-border mb-5 rounded-2xl bg-[#fb7a00]/10 bg-[radial-gradient(circle_at_bottom_right,#fb7a00_0%,transparent_60%)] p-4">
              <Heading className="m-0 text-lg text-left font-semibold antialiased text-[#964f4b]">
                Invoice Details
              </Heading>

              <Hr className="mt-2" style={{ borderColor: "#fb7a00" }} />

              <Container className="my-6 text-sm text-left font-bold leading-none text-gray-900">
                <strong className="font-bold antialiased">Name : </strong>
                <span className="font-normal antialiased">{name}</span>
              </Container>

              <Container className="my-6 text-sm text-left font-bold leading-none text-gray-900">
                <strong className="font-bold antialiased">Email : </strong>
                <span className="font-normal antialiased">{email}</span>
              </Container>

              <Container className="my-6 text-sm text-left font-bold leading-none text-gray-900">
                <strong className="font-bold antialiased">Subject : </strong>
                <span className="font-normal antialiased">{subject}</span>
              </Container>

              <Container className="my-6 text-sm text-left font-bold leading-none text-gray-900">
                <strong className="font-bold antialiased">Message : </strong>
                <div className="font-normal antialiased mt-2.5">{message}</div>
              </Container>
            </Section>

            <Section className="w-full mt-10 mx-0 mb-0 box-border">
              <Text className="text-xs font-normal leading-normal text-gray-600 antialiased">
                Note: This is a system generated email. Please do not reply.
              </Text>
            </Section>

            <Section className="w-full mt-10 box-border text-center">
              <Text className="text-xs font-normal text-gray-600 antialiased m-0 box-border">
                Copyright &copy; 2025 &nbsp; | &nbsp; The Daily Blogs
              </Text>
              <Text className="text-xs font-normal text-blue-600 antialiased mt-4 mx-0 mb-8 box-border">
                All rights reserved
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormAdminEmail;
