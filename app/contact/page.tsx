import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-12">
      <h1 className="text-2xl font-bold">Contact</h1>
      <div className="flex gap-4">
        <span>
          <Phone />
        </span>
        <span>04 123 234 234</span>
      </div>
    </div>
  );
};

export default Contact;
