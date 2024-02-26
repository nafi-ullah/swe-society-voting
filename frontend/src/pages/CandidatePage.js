import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CandidatePage() {
  const userData = useLocation().state;
  const navigate = useNavigate();
  const badClick = () => {
    navigate("/vote-complete");
  };
  const goodClick = () => {
    navigate("/vote-success");
  };

  function formatPostName(postName) {
    // Split the post name by underscores
    const words = postName.split("_");

    // Capitalize each word and join them with a space
    const formattedName = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return formattedName;
  }
  const reg = userData.regno;
  const year = new Date().getFullYear();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
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
        if(data.error === "This voter already voted"){
          toast('😠 You have already casted vote', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          setTimeout(() => {
            badClick();
          }, 5000);
        }
        else{
          toast('😊 Thank you for your valuable vote!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
          setTimeout(() => {
            goodClick();
          }, 5000);
        }
        
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
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 500);
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
      {loading ? (
        <div className="flex justify-center items-center flex-col	">
          <img
            src={require("../assets/loading.gif")}
            alt="loading"
            className="w-80 mx-auto flex items-center"
          />
          <p>Please wait The ballot paper is being generated. </p>
        </div>
      ) : (
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
                Vote for your desired candidate for the post of General
                Secretary
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
                Vote for your desired candidate for the post of Assistant
                General Secretary
              </p>
            </div>
            <div className="flex justify-center flex-wrap -m-4">
              {agsCandidates.map((candidate) => (
                <div
                  className={`xl:w-1/4 md:w-1/2 p-4 ${
                    selectedAGS !== null &&
                    selectedAGS === candidate.candidateId
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
                    selectedAPS !== null &&
                    selectedAPS === candidate.candidateId
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
              // <button
              //     onClick={castVote}
              //   className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              // >
              <button
                onClick={() => setShowModal(true)}
                className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                SUBMIT VOTE
              </button>
            )}
          </div>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Confirm Vote</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        You are about to submit your vote for the following
                        candidates:
                      </p>
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Vice President:{" "}
                        {
                          vpCandidates.find(
                            (candidate) => candidate.candidateId === selectedVP
                          ).candidateName
                        }{" "}
                        <br />
                        General Secretary:{" "}
                        {
                          gsCandidates.find(
                            (candidate) => candidate.candidateId === selectedGS
                          ).candidateName
                        }{" "}
                        <br />
                        Organizing Secretary:{" "}
                        {
                          osCandidates.find(
                            (candidate) => candidate.candidateId === selectedOS
                          ).candidateName
                        }{" "}
                        <br />
                        Assistant General Secretary:{" "}
                        {
                          agsCandidates.find(
                            (candidate) => candidate.candidateId === selectedAGS
                          ).candidateName
                        }{" "}
                        <br />
                        Sports Secretary:{" "}
                        {
                          ssCandidates.find(
                            (candidate) => candidate.candidateId === selectedSS
                          ).candidateName
                        }{" "}
                        <br />
                        Publication Secretary:{" "}
                        {
                          psCandidates.find(
                            (candidate) => candidate.candidateId === selectedPS
                          ).candidateName
                        }{" "}
                        <br />
                        Assistant Publication Secretary:{" "}
                        {
                          apsCandidates.find(
                            (candidate) => candidate.candidateId === selectedAPS
                          ).candidateName
                        }{" "}
                        <br />
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={castVote}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </section>
      )}
      <ToastContainer />
    </div>
  );
}

export default CandidatePage;
