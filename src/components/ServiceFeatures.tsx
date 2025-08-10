import React from "react";

// ServicesSection - React + TypeScript + Tailwind CSS
// Matches the requested layout: left tall vertical card, center two stacked horizontal cards, right tall vertical card.
// - Outer "frame" is a light-gray thick border (bg-gray-100 with padding)
// - Inner content is white with spacing, serif titles, brown circular icons
// Usage: place <ServicesSection /> inside your app. Requires Tailwind CSS.

type ServiceProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const ICON_COLOR = "#7a3f1e"; // brown used in the design

const IconThumb = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12.5C2 11.1193 3.11929 10 4.5 10H7V6.5C7 5.67157 7.67157 5 8.5 5H11.5C12.3284 5 13 5.67157 13 6.5V10H17.5C18.3284 10 19 10.6716 19 11.5V13.5C19 14.3284 18.3284 15 17.5 15H13V19.5C13 20.3284 12.3284 21 11.5 21H8.5C7.11929 21 6 19.8807 6 18.5V15H4.5C3.11929 15 2 13.8807 2 12.5Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 4.18 2 2 0 0 1 4 2h3.09a1 1 0 0 1 1 .75c.12.68.36 1.32.7 1.92a1 1 0 0 1-.24 1.09L7.91 8.91a16 16 0 0 0 6 6l1.15-1.15a1 1 0 0 1 1.09-.24c.6.34 1.24.58 1.92.7a1 1 0 0 1 .75 1V20z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCard = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="1.2" />
    <path d="M2 10h20" stroke="white" strokeWidth="1.2" />
  </svg>
);

const IconRocket = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2s2 1 4 3 3 4 3 4-1 0-3 2-7 7-7 7l-3 1-1-3s6-5 7-7 2-3 2-3z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="6.5" cy="17.5" r="1.5" fill="white" />
  </svg>
);

// Vertical card used on the left and right
const ServiceVertical: React.FC<ServiceProps> = ({ title, desc, icon }) => {
  return (
    <div className="bg-gray-100 p-6"> {/* outer thick frame */}
      <div className="bg-white h-full min-h-[340px] p-8 flex flex-col items-center text-center shadow-sm">
        <div className="w-14 h-14 rounded-full" style={{ background: ICON_COLOR }}>
          <div className="w-full h-full flex items-center justify-center text-white">{icon}</div>
        </div>

        <h3 className="font-serif text-xl mt-6">{title}</h3>

        <p className="text-sm text-gray-600 mt-4 leading-relaxed px-2 max-w-xs">{desc}</p>
      </div>
    </div>
  );
};

// Horizontal card used in the middle column (two stacked)
const ServiceHorizontal: React.FC<ServiceProps> = ({ title, desc, icon }) => {
  return (
    <div className="bg-gray-100 p-4"> {/* outer frame */}
      <div className="bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: ICON_COLOR }}>
            {icon}
          </div>

          <div>
            <h4 className="font-serif text-xl">{title}</h4>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-[520px]">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.";

  return (
    <section className="max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left vertical card */}
        <div>
          <ServiceVertical title="100% Satisfaction Guaranteed" desc={lorem} icon={<IconThumb />} />
        </div>

        {/* Middle column with two horizontal stacked cards */}
        <div className="space-y-6">
          <ServiceHorizontal title="24/7 Online Service" desc={lorem} icon={<IconPhone />} />
          <ServiceHorizontal title="Fast Delivery" desc={lorem} icon={<IconRocket />} />
        </div>

        {/* Right vertical card */}
        <div>
          <ServiceVertical title="Payment With Secure System" desc={lorem} icon={<IconCard />} />
        </div>
      </div>
    </section>
  );
}