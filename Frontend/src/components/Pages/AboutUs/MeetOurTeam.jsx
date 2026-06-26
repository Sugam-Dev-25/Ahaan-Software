import React, { useState, useEffect } from "react";
// Removed Modal import from react-bootstrap
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./Team.css";
import { getTeams } from "../../../Api/api"; 

const MeetOurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      const data = await getTeams();
      setTeamMembers(Array.isArray(data) ? data : []);
    };
    fetchTeam();
  }, []);

  // Modal manual toggle logic
  const handleShow = (member) => {
    setSelectedMember(member);
    setShow(true);
    document.body.classList.add("modal-open"); // Bootstrap class to prevent body scroll
  };

  const handleClose = () => {
    setShow(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="container py-5 team-carousel-section section-header-tech">
      <h6 className="subtitle">
        Teams
      </h6>
      <h2 className=" title">Meet Our Team</h2>
      <p className="image-carousel-content">
        Driven to be future-ready, and push beyond the building blocks of
        technology, digital, and marketing, Ahaan Software Consulting proudly
        participated in The Asia Business Show 2024 in Singapore—the powerhouse
        of innovation and enterprise!
      </p>

      {teamMembers.length === 0 ? (
        <p className="text-center text-muted">Loading team members...</p>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          slidesPerGroup={1}
          loop={true}
          speed={1000}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          {teamMembers.map((member, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="team-carousel-card text-center"
                onClick={() => handleShow(member)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-carousel-img"
                />
                <h5 className="mt-3">{member.name}</h5>
                <p className="designation">{member.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Manual Bootstrap Modal */}
      {show && (
        <>
          <div 
            className="modal fade show d-block about-modal" 
            tabIndex="-1" 
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={handleClose} // Close on backdrop click
          >
            <div 
              className="modal-dialog modal-dialog-centered" 
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <div className="modal-content">
                {selectedMember && (
                  <>
                    <div className="modal-header border-0">
                      <button 
                        type="button" 
                        className="custom-close-btn" 
                        onClick={handleClose}
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body text-center">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="rounded-circle mb-3 shadow"
                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                      />
                      <h4 className="modal-title fw-bold">{selectedMember.name}</h4>
                      <h5 className="text-warning">{selectedMember.position}</h5>
                      <p className="text-dark mt-3 px-3">
                        {selectedMember.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
};

export default MeetOurTeam;