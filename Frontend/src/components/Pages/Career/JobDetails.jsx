import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IoMdArrowBack } from 'react-icons/io';
import { jobs } from './jobsData';
import './Careers.css';

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === jobId);
  
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { role: job?.designation }
  });

  if (!job) return <div>Job not found</div>;

  const onSubmit = (data) => {
    console.log(data);
    alert("Application submitted!");
    reset();
  };

  return (
    <div className="details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <IoMdArrowBack /> Back to Careers
      </button>

      <div className="details-layout">
        <section className="content-side">
          <div className="title-area">
            <h1>{job.designation}</h1>
            <div className="meta-row">
              <span><strong>Location:</strong> {job.location}</span>
              <span><strong>Shift:</strong> {job.shift}</span>
            </div>
          </div>

          <div className="description-block">
            <h3>Job Summary</h3>
            <p>{job.summary}</p>

            <h3>Responsibilities</h3>
            <ul>
              {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
            </ul>

            <h3>Qualifications</h3>
            <ul>
              {job.requirements.qualifications.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </div>
        </section>

        <section className="sticky-form-side">
          <div className="apply-card">
            <h3>Apply for this position</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("name", { required: true })} placeholder="Full Name" />
              <input {...register("email", { required: true })} placeholder="Email" />
              <input {...register("phone", { required: true })} placeholder="Phone" />
              <input type="number" {...register("exp", { required: true })} placeholder="Experience (Years)" />
              <div className="file-input">
                <label>Upload CV (PDF/DOC)</label>
                <input type="file" {...register("cv", { required: true })} />
              </div>
              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;