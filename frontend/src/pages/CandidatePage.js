import React, { useEffect, useState } from "react";

function CandidatePage() {
  function formatPostName(postName) {
    // Split the post name by underscores
    const words = postName.split("_");

    // Capitalize each word and join them with a space
    const formattedName = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedName;
  }
  const reg = 2020821011;
  const year = new Date().getFullYear();
  const [selectedVP, setSelectedVP] = useState(null);
  const [selectedGS, setSelectedGS] = useState(null);
  const [selectedOS, setSelectedOS] = useState(null);
  const [selectedAGS, setSelectedAGS] = useState(null);
  const [selectedSS, setSelectedSS] = useState(null);
  const [selectedPS, setSelectedPS] = useState(null);
  const [selectedAPS, setSelectedAPS] = useState(null);
  const [vpCandidates, setVPCandidates] = useState([]);
  const [gsCandidates, setGSCandidates] = useState([]);
  const [osCandidates, setOSCandidates] = useState([]);
  const [agsCandidates, setAGSCandidates] = useState([]);
  const [ssCandidates, setSSCandidates] = useState([]);
  const [psCandidates, setPSCandidates] = useState([]);
  const [apsCandidates, setAPSCandidates] = useState([]);

  function castVote() {
    fetch("http://localhost:5000/api/votecast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        regno: reg,
        year: year,
        vice_president: selectedVP,
        general_secretary: selectedGS,
        assistant_general_secretary: selectedAGS,
        organizing_secretary: selectedOS,
        sports_secretary: selectedSS,
        publication_secretary: selectedPS,
        assistant_publication_secretary: selectedAPS,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const fetchCandidates = (post) => {
    fetch(`http://localhost:5000/api/get-candidates?post=${post}&year=${year}`)
      .then((res) => res.json())
      .then((data) => {
        if (post === "vice_president") {
          setVPCandidates(data.candidateList);
        } else if (post === "general_secretary") {
          setGSCandidates(data.candidateList);
        } else if (post === "organizing_secretary") {
          setOSCandidates(data.candidateList);
        } else if (post === "assistant_general_secretary") {
          setAGSCandidates(data.candidateList);
        } else if (post === "sports_secretary") {
          setSSCandidates(data.candidateList);
        } else if (post === "publication_secretary") {
          setPSCandidates(data.candidateList);
        } else if (post === "assistant_publication_secretary") {
          setAPSCandidates(data.candidateList);
        }
      });
  };

  useEffect(() => {
    fetchCandidates("vice_president");
    fetchCandidates("general_secretary");
    fetchCandidates("organizing_secretary");
    fetchCandidates("assistant_general_secretary");
    fetchCandidates("sports_secretary");
    fetchCandidates("publication_secretary");
    fetchCandidates("assistant_publication_secretary");
  }, []);

  const handleVPCandidateClick = (candidateID) => {
    setSelectedVP(candidateID);
    console.log(selectedVP);
  };
  const handleGSCandidateClick = (candidateID) => {
    setSelectedGS(candidateID);
    console.log(selectedGS);
  };
  const handleAGSCandidateClick = (candidateID) => {
    setSelectedAGS(candidateID);
    console.log(selectedGS);
  };
  const handleOSCandidateClick = (candidateID) => {
    setSelectedOS(candidateID);
    console.log(selectedPS);
  };
  const handleSSCandidateClick = (candidateID) => {
    setSelectedSS(candidateID);
    console.log(selectedPS);
  };
  const handlePSCandidateClick = (candidateID) => {
    setSelectedPS(candidateID);
    console.log(selectedPS);
  };
  const handleAPSCandidateClick = (candidateID) => {
    setSelectedAPS(candidateID);
    console.log(selectedPS);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* VP */}
          <div className="flex flex-wrap w-full my-9">
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
            {vpCandidates.map((candidate) => (
              <div
                className={`xl:w-1/4 md:w-1/2 p-4 ${
                  selectedVP !== null && selectedVP === candidate.candidateId
                    ? "border-4 border-green-600"
                    : ""
                }`}
                key={candidate._id}
                onClick={() => handleVPCandidateClick(candidate.candidateId)}
              >
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={candidate.candidateImage}
                    alt={candidate.candidateName}
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                    {formatPostName(candidate.candidatePost)}
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
          {/* GS */}
          <div className="flex flex-wrap w-full my-9">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                General Secretary
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Vote for your desired candidate for the post of General Secretary
            </p>
          </div>
          <div className="flex justify-center flex-wrap -m-4">
            {gsCandidates.map((candidate) => (
              <div
                className={`xl:w-1/4 md:w-1/2 p-4 ${
                  selectedGS !== null && selectedGS === candidate.candidateId
                    ? "border-4 border-green-600"
                    : ""
                }`}
                key={candidate._id}
                onClick={() => handleGSCandidateClick(candidate.candidateId)}
              >
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={candidate.candidateImage}
                    alt={candidate.candidateName}
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                    {formatPostName(candidate.candidatePost)}
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
          {/* OS */}
          <div className="flex flex-wrap w-full my-9">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Organizing Secretary
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Vote for your desired candidate for the post of Organizing
              Secretary
            </p>
          </div>
          <div className="flex justify-center flex-wrap -m-4">
            {osCandidates.map((candidate) => (
              <div
                className={`xl:w-1/4 md:w-1/2 p-4 ${
                  selectedOS !== null && selectedOS === candidate.candidateId
                    ? "border-4 border-green-600"
                    : ""
                }`}
                key={candidate._id}
                onClick={() => handleOSCandidateClick(candidate.candidateId)}
              >
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={candidate.candidateImage}
                    alt={candidate.candidateName}
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                    {formatPostName(candidate.candidatePost)}
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
          {/* AGS */}
          <div className="flex flex-wrap w-full my-9">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Assistant General Secretary
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Vote for your desired candidate for the post of Assistant General
              Secretary
            </p>
          </div>
          <div className="flex justify-center flex-wrap -m-4">
            {agsCandidates.map((candidate) => (
              <div
                className={`xl:w-1/4 md:w-1/2 p-4 ${
                  selectedAGS !== null && selectedAGS === candidate.candidateId
                    ? "border-4 border-green-600"
                    : ""
                }`}
                key={candidate._id}
                onClick={() => handleAGSCandidateClick(candidate.candidateId)}
              >
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={candidate.candidateImage}
                    alt={candidate.candidateName}
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                    {formatPostName(candidate.candidatePost)}
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
          {/* SS */}
          <div className="flex flex-wrap w-full my-9">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Sports Secretary
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Vote for your desired candidate for the post of Sports Secretary
            </p>
          </div>
          <div className="flex justify-center flex-wrap -m-4">
            {ssCandidates.map((candidate) => (
              <div
                className={`xl:w-1/4 md:w-1/2 p-4 ${
                  selectedSS !== null && selectedSS === candidate.candidateId
                    ? "border-4 border-green-600"
                    : ""
                }`}
                key={candidate._id}
                onClick={() => handleSSCandidateClick(candidate.candidateId)}
              >
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={candidate.candidateImage}
                    alt={candidate.candidateName}
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                    {formatPostName(candidate.candidatePost)}
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
          {/* PS */}
          <div className="flex flex-wrap w-full my-9">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Publication Secretary
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Vote for your desired candidate for the post of Publication
              Secretary
            </p>
          </div>
          <div className="flex justify-center flex-wrap -m-4">
            {psCandidates.map((candidate) => (
              <div
                className={`xl:w-1/4 md:w-1/2 p-4 ${
                  selectedPS !== null && selectedPS === candidate.candidateId
                    ? "border-4 border-green-600"
                    : ""
                }`}
                key={candidate._id}
                onClick={() => handlePSCandidateClick(candidate.candidateId)}
              >
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={candidate.candidateImage}
                    alt={candidate.candidateName}
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                    {formatPostName(candidate.candidatePost)}
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
          {/* APS */}
          <div className="flex flex-wrap w-full my-9">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Assistant Publication Secretary
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Vote for your desired candidate for the post of Assistant
              Publication Secretary
            </p>
          </div>
          <div className="flex justify-center flex-wrap -m-4">
            {apsCandidates.map((candidate) => (
              <div
                className={`xl:w-1/4 md:w-1/2 p-4 ${
                  selectedAPS !== null && selectedAPS === candidate.candidateId
                    ? "border-4 border-green-600"
                    : ""
                }`}
                key={candidate._id}
                onClick={() => handleAPSCandidateClick(candidate.candidateId)}
              >
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={candidate.candidateImage}
                    alt={candidate.candidateName}
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                    {formatPostName(candidate.candidatePost)}
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
          {selectedVP === null ||
          selectedGS === null ||
          selectedOS === null ||
          selectedAGS === null ||
          selectedSS === null ||
          selectedPS === null ||
          selectedAPS === null ? (
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base flex justify-center mt-16">
              Please select a candidate for each post to submit your vote
            </p>
          ) : (
            <button
                onClick={castVote}
              className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              SUBMIT VOTE
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default CandidatePage;
