import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./Team.css";
import { getTeams } from "../../../Api/api"; // <-- API IMPORT

const MeetOurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      const data = await getTeams();

      // Always force array
      setTeamMembers(Array.isArray(data) ? data : []);
    };

    fetchTeam();
  }, []);

  const handleShow = (member) => {
    setSelectedMember(member);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="container py-5 team-carousel-section section-header-tech">
      <h6 className="subtitle">
        Teams <span className="divider"></span>
      </h6>
      <h2 className="text-center title">Meet Our Team</h2>
      <p className="image-carousel-content">
        Driven to be future-ready, and push beyond the building blocks of
        technology, digital, and marketing, Ahaan Software Consulting proudly
        participated in The Asia Business Show 2024 in Singapore—the powerhouse
        of innovation and enterprise!
      </p>

      {/* Handle API not ready */}
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
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-carousel-img"
                />
                <h5 className="mt-3">{member.name}</h5>
                <p className="text-muted">{member.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Modal */}
      <Modal className="about-modal" show={show} onHide={handleClose} centered>
        {selectedMember && (
          <>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="rounded-circle mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <Modal.Title>{selectedMember.name}</Modal.Title>
              <h5 className="fw-bold">{selectedMember.position}</h5>
              <p className="text-muted mt-3">{selectedMember.description}</p>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
};

export default MeetOurTeam;
