import React, { useState } from "react";

function CandidatePage() {
  const candidates = [
    {
      candidateReg: "2020831020",
      candidatePost: "Vice President",
      candidateName: "Ridwanur Rashid Siam",
      candidateImage:
        "https://cdn.discordapp.com/attachments/1197925949824569454/1211555346930208778/2.jpg?ex=65ee9fd8&is=65dc2ad8&hm=32bb4f6d2d62bf6cd61a6bd9c63b637463f2d1a9ed5b811290650c1201a65d12&",
      candidateMarka: "Chiks",
      candidateMarkaImage:
        "https://cdn.discordapp.com/attachments/1197925949824569454/1211555490681720893/2_1.jpg?ex=65ee9ffa&is=65dc2afa&hm=9bf4d11ed92cafa3f8a6a5c50d3dc9b871f81a2804d8ba67a38aff400edd381b&",
      _id: "65dc1a4f0aa4127d72fd4f7",
      candidateId: "2020831020ags",
    },
    {
      candidateReg: "2020831020",
      candidatePost: "Publication Secretary",
      candidateName: "Nixon Deb Antu",
      candidateImage:
        "https://cdn.discordapp.com/attachments/1197925949824569454/1211549291827437598/NixonDP.jpeg?ex=65ee9a34&is=65dc2534&hm=5b18ca880fd8b02e4fbe3b4c404589ff8f792e0d787255b470cc0f5be99a506f&",
      candidateMarka: "Printer",
      candidateMarkaImage:
        "https://cdn.discordapp.com/attachments/1197925949824569454/1211549513530089472/AEYmBYRGMJQXsjo30jtoaTyLxQZONTSWBKtlIgCqtwQG6_34Pt.png?ex=65ee9a69&is=65dc2569&hm=6819e741db1fa544c94ec4823b726e40e0966621fd6d118f5c5789691f9748b9&",
      _id: "65dc1a4f0aa4127d724fd4f6",
      candidateId: "2020831020ags",
    },
    {
      candidateReg: "2020831020",
      candidatePost: "Assistant General Secretary",
      candidateName: "Arnob",
      candidateImage: "http://imageurl.com",
      candidateMarka: "bamboo",
      candidateMarkaImage: "http://imageurl.com",
      _id: "65dc1a4f0aa4127d724fd4f7",
      candidateId: "2020831020ags",
    },
  ];
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleCandidateClick = (candidateName) => {
      setSelectedCandidate(candidateName);
      console.log(selectedCandidate);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Vice President
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Vote for your desired candidate for the post of Vice President
            </p>
          </div>
          <div className="flex justify-center flex-wrap -m-4">
            {candidates.map((candidate) => (
              <div
              className={`xl:w-1/4 md:w-1/2 p-4 ${
                selectedCandidate !== null && selectedCandidate === candidate.candidateName ? 'border-4 border-blue-500' : ''
              }`}
              
                key={candidate._id}
                onClick={() => handleCandidateClick(candidate.candidateName)}
              >
              {/* <div
              className="xl:w-1/4 md:w-1/2 p-4 border border-blue-500"
                key={candidate._id}
                onClick={() => handleCandidateClick(candidate.candidateName)}
              > */}
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={candidate.candidateImage}
                    alt={candidate.candidateName}
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                    {candidate.candidatePost}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {candidate.candidateName}
                  </h2>
                  <div className="flex justify-between w-full">
                    <p className="flex items-center justify-center">
                      {candidate.candidateMarka}
                    </p>
                    <img
                      className="h-20 rounded-full w-20 object-cover object-center mb-6"
                      src={candidate.candidateMarkaImage}
                      alt={candidate.candidateMarka}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CandidatePage;
