import { Facebook, Instagram  } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="h-[100px] flex items-center justify-center gap-4">
      <Link className="p-3 bg-white flex gap-3 items-center border rounded-xl " href="https://www.instagram.com/30mwacademy">
        <Instagram strokeWidth={2} size={28} className="text-3xl" />
        30mwacademy
      </Link>
      <Link className="p-3 bg-white  flex gap-3 items-center border rounded-xl " href="https://www.facebook.com/30mwacademy">
        <Facebook strokeWidth={2} size={28} className="text-3xl" />
        30mwacademy
      </Link>
      <Link className="p-3 bg-white flex gap-3 items-center border rounded-xl " href="https://wa.me/212642680949">
        <FaWhatsapp strokeWidth={1} size={28} className="text-3xl" />
        0642680949
      </Link>
    </footer>
  );
};

export default Footer;
