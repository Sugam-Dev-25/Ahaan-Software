import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaUserTie,
    FaHeadset,
    FaSearchDollar,
    FaUserShield
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { jobs } from './jobsData'; // Move your JSON to a separate file
import './Careers.css';

const Careers = () => {
    const navigate = useNavigate();

    const getJobIcon = (id) => {
        switch (id) {
            case 'hr-executive':
                return <FaUserTie />;
            case 'web-sales-agent':
                return <FaHeadset />;
            case 'on-call-supervisor':
                return <FaUserShield />;
            case 'seo-digital-marketing':
                return <FaSearchDollar />;
            default:
                return <FaUserTie />;
        }
    };

    return (
        <div className="container">
            <header className="careers-header">
                <span className="badge">We're Hiring!</span>
                <h1>Career Opportunities</h1>
                <p>Join Ahaan Software and help us build scalable enterprise solutions.</p>
            </header>

            <div className="jobs-grid">
                {jobs.map((job) => (
                    <div className="job-card-v2" key={job.id}>
                        <div className="card-top">
                            {/* Dynamic Icon based on Job ID */}
                            <div className={`icon-box icon-${job.id}`}>
                                {getJobIcon(job.id)}
                            </div>
                            <span className="openings">
                                {job.open_positions} {job.open_positions > 1 ? 'Open Positions' : 'Open Position'}
                            </span>
                        </div>

                        <h3>{job.designation}</h3>

                        <div className="job-tags">
                            <span><MdLocationOn /> {job.location}</span>
                            <span className="shift-tag">{job.shift}</span>
                        </div>

                        <p className="job-excerpt">{job.summary.substring(0, 100)}...</p>

                        <button
                            className="view-details-link"
                            onClick={() => navigate(`/careers/${job.id}`)}
                        >
                            See Details <HiOutlineArrowNarrowRight />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Careers;