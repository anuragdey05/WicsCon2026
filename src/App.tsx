import { useState } from "react";

interface Speaker {
  id: number;
  name: string;
  role: string;
  topic: string;
  image: string;
  description: string;
}

interface speakersData {
  [key: string]: Speaker[];
}

const speakersData = {
  Speakers: [
    {
      id: 1,
      name: "Vrinda Kapoor",
      role: "CEO, 3rdiTech - Aerospace Technology Innovator",
      topic: "The Future of Aerospace Technology",
      description:
        "Revolutionizing Indian Enterprises with Deep Tech AI: Opportunities, Challenges, and the Path Ahead",
      image: "/vrinda.jpeg",
    },
    {
      id: 2,
      name: "Sumita Arora",
      role: "Renowned CS Textbook Author",
      topic: "Empowering the Next Generation of Coders",
      description:
        "Empowering Future Innovators: Making Computer Science Education Accessible for High School Students in India",
      image: "/sumita.jpeg",
    },
    {
      id: 3,
      name: "Aashna Jha",
      role: "Product Manager, Microsoft & Co-Founder, Girls Grow",
      topic: "Women in Tech and Leadership",
      description:
        "Climbing the Ladder vs Building Your Own: Exploring Leadership in Corporate and Entrepreneurship",
      image: "/aashna.jpeg",
    },
    {
      id: 4,
      name: "Amrita Choudhary",
      role: "Director, CCAOI & Global Leader in Internet Governance",
      topic: "Internet Governance and Digital Rights",
      description: "The AI Dilemma: Who Governs the Machines Governing Us?",
      image: "/amrita.jpeg",
    },
    {
      id: 5,
      name: "Dr. Divya Rajput",
      role: "Advisory Council, Harvard Business Review & CEO, JSS Science & Tech Entrepreneurs Park",
      topic: "Entrepreneurship and Innovation in Science & Technology",
      description:
        "Climbing the Ladder vs Building Your Own: Exploring Leadership in Corporate and Entrepreneurship",
      image: "/divya.jpeg",
    },
    {
      id: 6,
      name: "Apar Gupta",
      role: "Co-Founder, Internet Freedom Foundation",
      topic: "Digital Rights and Privacy",
      description: "The AI Dilemma: Who Governs the Machines Governing Us?",
      image: "/apar.webp",
    },
    {
      id: 7,
      name: "Nivedita Ganesh",
      role: "Author & Tech Leader with experience at Mastercard, Citi, NYU, IIT-M, and CMI",
      topic: "Tech, Leadership, and the Future of Digital Transformation",
      description:
        "Auction Action and the Art of Strategic Trading - A Gamified Workshop.",
      image: "nivedita.jpeg",
    },
    {
      id: 8,
      name: "Nidhi Singh",
      role: "Research Analyst, Carnegie Endowment for International Peace",
      topic: "Entrepreneurship and Innovation",
      description: "The AI Dilemma: Who Governs the Machines Governing Us?",
      image: "/nidhi.jpg",
    },
    {
      id: 9,
      name: "Colin Fernandez",
      role: "Vice President - Innovation, Axis Max Life Insurance",
      topic: "Journey of ML and Generative AI",
      description: "Journey of ML and Generative AI",
      image: "/colin.jpeg",
    },
    {
      id: 10,
      name: "Bhavya Bansal",
      role: "Product Manager, Google",
      topic: "Product Teardown and Management Workshop",
      description: "Product Teardown and Management Workshop",
      image: "/bhavya.jpeg",
    },
    {
      id: 11,
      name: "Anna Roy",
      role: "Director of the Data Management and Analysis Vertical at Niti Aayog",
      topic: "Keynote Talk 1",
      description: "TBA",
      image: "/anna.jpeg ",
    },
    {
      id: 12,
      name: "Romita Ghosh",
      role: "CEO, iHeal Health Tech Pvt Ltd",
      topic: "Entrepreneurship and Innovation",
      description:
        "Climbing the Ladder vs Building Your Own: Exploring Leadership in Corporate and Entrepreneurship",
      image: "/romita.jpeg",
    },
  ],
};

interface Event {
  id: number;
  time: string;
  name: string;
  location: string;
  speakers: string[];
}

interface eventsData {
  [key: string]: Event[];
}
const eventData: eventsData = {
  Events: [
    {
      id: 1,
      time: "9:00 - 11:00 AM",
      name: "Registration",
      location: "Atrium",
      speakers: [],
    },
    {
      id: 2,
      time: "10:00 - 10:15 AM",
      name: "Opening Ceremony",
      location: "Takshilla, AC02 007",
      speakers: [
        "Somak Raychaudhury",
        "Pramath Raj Sinha",
        "Subhashis Banerjeek",
        "Debayan Gupta",
      ],
    },
    {
      id: 3,
      time: "10:30 - 12:00 PM",
      name: "Panel 1 + Q&A - The AI Dilemma: Who Governs the Machines Governing Us?",
      location: "Takshilla, AC02 007",
      speakers: ["Apar Gupta", "Nidhi Singh", "Amrita Choudhury"],
    },
    {
      id: 4,
      time: "12:10 - 1:10 PM",
      name: "Workshop 1 - Auction Action and the Art of Strategic Trading - A Gamified Workshop",
      location: "AC02 003",
      speakers: ["Nivedita Ganesh"],
    },
    {
      id: 5,
      time: "12:10 - 1:10 PM",
      name: "Research Talk 1 - Revolutionizing Indian Enterprises with Deep Tech AI: Opportunities, Challenges, and the Path Ahead",
      location: "AC04 303",
      speakers: ["Vrinda Kapoor"],
    },
    {
      id: 6,
      time: "1:20 - 2:20 PM",
      name: "Networking Lunch",
      location: "MPH, Admin Block",
      speakers: [],
    },
    {
      id: 7,
      time: "2:30 - 3:30 PM",
      name: "Keynote Talk",
      location: "Takshilla, AC02 007",
      speakers: ["Anna Roy"],
    },
    {
      id: 8,
      time: "3:40 - 4:40 PM",
      name: "Speaker Session 1 - Empowering Future Innovators: Making Computer Science Education Accessible for High School Students in India",
      location: "AC03 003",
      speakers: ["Sumita Arora"],
    },
    {
      id: 9,
      time: "3:40 - 4:40 PM",
      name: "Speaker Session 2",
      location: "AC02 003",
      speakers: ["Colin Fernandez"],
    },
    {
      id: 10,
      time: "4:45 - 5:45 PM",
      name: "Workshop 2 - Product Teardown and Management Workshop",
      location: "AC02",
      speakers: ["Bhavya Bansal"],
    },
    {
      id: 11,
      time: "4:45 - 5:45 PM",
      name: "Research Talk 2",
      location: "AC04 303",
      speakers: ["Susmita Surkolay"],
    },
    {
      id: 12,
      time: "5:45 - 6:00 PM",
      name: "Snack Break",
      location: "Outside Takshila",
      speakers: [],
    },
    {
      id: 13,
      time: "6:00 PM - 7:00 PM",
      name: "Fireside Chat: - Climbing the Ladder vs Building Your Own: Exploring Leadership in Corporate and Entrepreneurship",
      location: "Takshilla, AC02 107",
      speakers: ["Aashna Jha", "Dr. Divya Rajput"],
    },
    {
      id: 14,
      time: "7:00 - 7:30 PM",
      name: "Closing Ceremony",
      location: "Takshilla, AC02 007",
      speakers: [""],
    },
  ],
};

const tabs = ["Speakers", "Schedule"];

const sponsorsData = [
  {
    id: 1,
    name: "Meta",
    image: "/sponsors/meta.jpg",
  },
  {
    id: 2,
    name: "Axis Max Life Insurance",
    image: "/sponsors/axis_life.svg",
  },
];

const Members = [
  {
    id: 1,
    name: "Anwesha Ghosh",
    role: "Vice President",
    image: "/team/anwesha.jpeg",
  },
  {
    id: 2,
    name: "Anushka Gautam ",
    role: "Co-President",
    image: "/team/anushka.jpg",
  },
  {
    id: 3,
    name: "Diya Tripathi",
    role: "Co-President",
    image: "/team/diya.jpeg",
  },
  {
    id: 4,
    name: "Ananya Agarwal",
    role: "Events Co-HOD",
    image: "/team/ananya.JPG",
  },
  {
    id: 5,
    name: "Mihika Grover",
    role: "Marketing Co-HOD",
    image: "/team/mihika.jpg",
  },
  {
    id: 6,
    name: "Deshana Mehta",
    role: "Marketing Co-HOD",
    image: "/team/deshana.jpeg",
  },
  {
    id: 7,
    name: "Devansh Srivastava",
    role: "Marketing Co-HOD",
    image: "/team/devansh.jpeg",
  },
  {
    id: 8,
    name: "Anam Ahamed",
    role: "Outreach Co-HOD",
    image: "/team/anam.jpeg",
  },
  {
    id: 9,
    name: "Vanshika Agarwal",
    role: "Outreach Co-HOD",
    image: "/team/vanshika.jpeg",
  },
  {
    id: 10,
    name: "Kenisha Chandak",
    role: "Policy HOD",
    image: "/team/kenisha.jpeg",
  },
  {
    id: 11,
    name: "Abhinav M Hari",
    role: "Website HOD",
    image: "/team/abhinav.jpg",
  },
];

const App = () => {
  const [activeDay, setActiveDay] = useState<string>(tabs[0]);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white bg-opacity-95 shadow-sm border-b">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <div className="text-red-700 font-bold text-2xl">WiCSCon</div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-red-600 transition-colors">
              About
            </a>
            <a
              href="#highlights"
              className="hover:text-red-600 transition-colors"
            >
              Highlights
            </a>
            <a
              href="#speakers"
              className="hover:text-red-600 transition-colors"
            >
              Speakers
            </a>
            <a
              href="#sponsors"
              className="hover:text-red-600 transition-colors"
            >
              Sponsors
            </a>
            <a href="#faqs" className="hover:text-red-600 transition-colors">
              FAQs
            </a>
          </div>
          <a href="https://unstop.com/o/oa8ONt0?lb=IzeFOU31">
            <button className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-md">
              Register Now
            </button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden bg-red-900">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/80"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empowering Innovation Through Diversity
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join us for the annual conference where women in technology connect,
            inspire, and transform the future.
          </p>
          <a href="https://unstop.com/o/oa8ONt0?lb=IzeFOU31">
            <button className="text-lg px-8 py-3 rounded-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-medium shadow-lg">
              Register Now
            </button>
          </a>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-red-700">
                About WiCS & WiCSCon
              </h2>
              <p className="text-lg mb-6">
                The Women in Computing Society (WiCS) is a global community
                dedicated to increasing gender diversity in technology. We
                empower women through mentorship, education, and networking
                opportunities.
              </p>
              <button className="text-red-700 border border-red-700 hover:bg-red-50 py-2 px-4 rounded-md flex items-center">
                Learn More About Our Mission
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-xl">
              <div className="bg-gray-100 aspect-video flex items-center justify-center">
                <img
                  src="/BannerImage.jpg"
                  alt="Women in Tech Conference"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-red-50" id="countdown">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-700">
            Conference Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="text-2xl font-semibold text-gray-600 mb-2">
                  Conference Date
                </div>
                <div className="text-4xl font-bold text-red-700">
                  March 29th, 2025
                </div>
                <div className="text-lg text-gray-500 mt-2">
                  Ashoka University, Sonipat
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="text-2xl font-semibold text-gray-600 mb-2">
                  Days Until Conference
                </div>
                <div className="text-4xl font-bold text-red-700">
                  {Math.ceil(
                    (new Date("March 29, 2025 00:00:00").getTime() -
                      new Date().getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}
                </div>
                <div className="text-lg text-gray-500 mt-2">
                  Don't miss out on this exciting event!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Preview */}
      <section className="py-16 bg-white" id="speakers">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-700">
            Speakers & Events
          </h2>

          <div className="flex mb-8 border-b">
            {tabs.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 font-medium ${
                  activeDay === day
                    ? "text-red-700 border-b-2 border-red-700"
                    : "text-gray-500"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Speakers Section */}
          {activeDay === tabs[0] && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {speakersData.Speakers.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg border rounded-lg"
                  >
                    <div className="aspect-square relative overflow-hidden bg-gray-100">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                      <p className="text-red-700 mb-3 min-h-12">
                        {speaker.role}
                      </p>
                      {/* <p className="text-sm text-gray-600 mb-4">
                        {speaker.topic}
                      </p> */}
                    </div>
                    <div className="border-t p-4">
                      <button
                        onClick={() => {
                          setSelectedSpeaker(speaker);
                          setIsModalOpen(true);
                        }}
                        className="w-full border border-gray-300 hover:bg-red-700 hover:text-white py-2 px-4 rounded-md"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Events Section */}
          {activeDay === tabs[1] && (
            <>
              <div className="space-y-6">
                {eventData.Events.map((event) => (
                  <div
                    key={event.id}
                    className="p-6 bg-gray-100 rounded-lg shadow hover:bg-red-50 hover:scale-105 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-bold mb-1">{event.name}</h3>
                    <p className="text-gray-600 mb-1">{event.time}</p>
                    <p className="text-sm text-gray-500 mb-3">
                      Location: {event.location}
                    </p>
                    {event.speakers.length > 0 && (
                      <p className="text-sm text-gray-700">
                        Speakers: {event.speakers.join(", ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Sponsors Preview */}
      <section className="py-16 bg-red-50" id="sponsors">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-700">
            Sponsors & Partners
          </h2>

          <div className="mb-12">
            {/* <h3 className="text-xl font-bold mb-6 text-center">
              Platinum Sponsors
            </h3> */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {sponsorsData.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="bg-white rounded-lg shadow-md p-6 w-36 h-36 flex items-center justify-center"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-red-700">
              Interested in Sponsoring?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Join our diverse community of sponsors and connect with the
              brightest talent and industry leaders in tech.
            </p>
            <a href="mailto:wics@ashoka.edu.in">
              <button className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-6 rounded-md">
                Contact Our Sponsorship Team
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-700">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Members.map((member) => (
              <div className="flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-xl bg-white rounded-lg p-6">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-red-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-red-800">
                  {member.name}
                </h3>
                <p className="text-red-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="w-3/4 h-1 mx-auto my-4 bg-red-100 border-0 rounded-sm md:my-10"></hr>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-700">
            FAQs
          </h2>
          <div className="space-y-6"></div>
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">
              Who can attend the conference?
            </h3>
            <p className="text-gray-700">
              The conference is open to everyone, regardless of gender, who is
              interested in supporting and promoting diversity in technology.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">
              How can I register for the event?
            </h3>
            <p className="text-gray-700">
              You can register for the event by clicking the "Register Now"
              button on our website and filling out the registration form.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">
              Are there any sponsorship opportunities?
            </h3>
            <p className="text-gray-700">
              Yes, we offer various sponsorship packages. Please contact our
              sponsorship team for more details.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">
              Where is the event located?
            </h3>
            <p className="text-gray-700">
              The event will be held at the Ashoka University on{" "}
              <b>March 29th, 2025</b>.
            </p>
          </div>
        </div>
      </section>

      {/* Speaker Details Modal */}
      {isModalOpen && selectedSpeaker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full mx-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-6">
              <div className="flex items-start space-x-6">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="text-red-700 text-lg mb-2">
                    {selectedSpeaker.role}
                  </p>
                  <p className="text-gray-600 mb-4">{selectedSpeaker.topic}</p>
                  <div className="prose max-w-none">
                    <p className="text-gray-700">
                      {selectedSpeaker.description ||
                        `Join ${selectedSpeaker.name} for an inspiring session on ${selectedSpeaker.topic}. 
                  This session will provide valuable insights and practical knowledge for attendees 
                  of all experience levels.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t px-6 py-4 bg-gray-50 rounded-b-lg">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* WICSCON Info */}
            <div className="space-y-6">
              <div className="flex md:justify-start justify-center items-center">
                <h3 className="text-2xl font-bold text-red-500">WICSCON</h3>
              </div>
              <p className="text-gray-400 leading-relaxed md:text-left text-center">
                The premier conference for women in computing and technology.
                Join us in fostering diversity, innovation, and excellence in
                the tech industry.
              </p>
              <div className="flex md:justify-start justify-center space-x-4">
                <a
                  href="https://x.com/wics_ashoka"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/wics-ashoka-university"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/wics.ashoka/"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <div className="grid grid-cols-3 md:grid-cols-2 gap-4 md:space-y-4">
                {[
                  { text: "About", url: "#about" },
                  { text: "Speakers", url: "#speakers" },
                  { text: "Schedule", url: "#schedule" },
                  { text: "Sponsors", url: "#sponsors" },
                  { text: "FAQs", url: "#faqs" },
                  { text: "Register", url: "#register" },
                ].map((link) => (
                  <a
                    key={link.text}
                    href={link.url}
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span>{link.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-red-500 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400">
                    Ashoka University, Sonipat, Haryana, India
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">wics@ashoka.edu.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">+91 94743 89147</span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                className="w-full h-[250px]"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=28.94712001384767, 77.10147015438375&amp;q=Ashoka%20University&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                frameBorder="0"
                scrolling="no"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Women in Computing Society, Ashoka
                University
              </div>
              <div className="text-gray-400 text-sm mt-4 md:mt-0">
                Designed by Abhinav M Hari and Siddhant Malik
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
