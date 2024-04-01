import { Facebook, Instagram, YoutubeIcon  } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="min-h-[100px] py-8 flex items-center justify-center  flex-col md:flex-row gap-4">
      <Link  className="p-3  flex gap-3 items-center md:border rounded-xl " target="_blank" href="https://www.instagram.com/30mwacademy">
        <Instagram strokeWidth={2} size={28} className="text-3xl" />
        30mwacademy
      </Link>
      <Link className="p-3   flex gap-3 items-center md:border rounded-xl " target="_blank" href="https://www.facebook.com/30mwacademy">
        <Facebook strokeWidth={2} size={28} className="text-3xl" />
        30mwacademy
      </Link>
      <Link className="p-3  flex gap-3 items-center md:border rounded-xl " target="_blank" href="https://wa.me/212610092651">
        <FaWhatsapp strokeWidth={1} size={28} className="text-3xl" />
        0610092651
      </Link>
      <Link className="p-3  flex gap-3 items-center md:border rounded-xl " target="_blank" href="https://youtube.com/@abdeoqba">
        <YoutubeIcon
          strokeWidth={2} size={28} className="text-3xl" />
        30mwacademy
      </Link>
    </footer>
  );
};

export default Footer;
