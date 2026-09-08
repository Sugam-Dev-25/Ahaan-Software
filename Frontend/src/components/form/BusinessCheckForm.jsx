import React, { useState } from "react";
import { toast } from "react-toastify";
import { createBusinessCheck, spinBusinessCheck } from "../../Api/formApi";
import "./BusinessCheckForm.css";

const WHEEL_PRIZES = [
    "🎁 FREE WEBSITE AUDIT",
    "☕ COFFEE WITH VISHAL",
    "🎨 FREE LOGO REFRESH",
    "📞 FREE 15-MIN CONSULTATION",
    "💡 FREE BUSINESS WEBSITE TIP",
    "🎁 MYSTERY AHAAN GIFT",
];

const IMPROVEMENT_OPTIONS = [
    "Make my business look more professional",
    "Clearly explain my products/services",
    "Build more trust with potential customers",
    "Showcase my company/products better",
    "Make it easier for customers to contact me",
    "Create a completely new website",
    "I'm not sure — I need professional advice",
];

const WEBSITE_STATUS_OPTIONS = [
    "We don't have a website yet",
    "We have a basic website but want something better",
    "Our website is outdated",
    "Our website is good, but needs improvement",
    "We are happy with our website",
];

const INTEREST_OPTIONS = [
    "A professional business website",
    "A new/improved website",
    "E-commerce website",
    "Custom web application",
    "Mobile application",
    "Custom business software",
    "Not sure — I'd like to discuss my requirement",
];

const TIMELINE_OPTIONS = [
    "Immediately / Within 30 days",
    "1–3 months",
    "3–6 months",
    "Just exploring for now",
];

const DISCUSSION_OPTIONS = [
    "Yes — I'd like to discuss my requirement",
    "Yes — please send me some information first",
    "Not right now",
];

const REFERRAL_OPTIONS = ["Yes, I can introduce someone", "Maybe", "Not currently"];

const initialForm = {
    name: "",
    business: "",
    mobile: "",
    email: "",
    websiteStatus: "",
    improvements: [],
    interest: "",
    timeline: "",
    discussion: "",
    referral: "",
    referralDetails: "",
};

const BusinessCheckForm = () => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [showCongrats, setShowCongrats] = useState(false);
    const [showSpin, setShowSpin] = useState(false);
    const [wheelRotation, setWheelRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const [prizeWon, setPrizeWon] = useState(null);
    const [alreadySpun, setAlreadySpun] = useState(false);
    const [spinError, setSpinError] = useState("");

    const totalSteps = 4;

    function update(field, value) {
        setForm((f) => ({ ...f, [field]: value }));
        setErrors((e) => ({ ...e, [field]: undefined }));
    }

    function toggleImprovement(option) {
        setForm((f) => {
            const has = f.improvements.includes(option);
            if (has) return { ...f, improvements: f.improvements.filter((o) => o !== option) };
            if (f.improvements.length >= 2) return f; // max 2
            return { ...f, improvements: [...f.improvements, option] };
        });
    }

    function validateStep(current) {
        const e = {};
        if (current === 1) {
            if (!form.name.trim()) e.name = "Please enter your name";
            if (!form.business.trim()) e.business = "Please enter your business name";
            if (!form.mobile.trim()) e.mobile = "Please enter your WhatsApp/mobile number";
            if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email";
        }
        if (current === 2) {
            if (!form.websiteStatus) e.websiteStatus = "Please choose one option";
            if (!form.interest) e.interest = "Please choose one option";
        }
        if (current === 3) {
            if (!form.timeline) e.timeline = "Please choose one option";
            if (!form.discussion) e.discussion = "Please choose one option";
        }
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    function goNext() {
        if (validateStep(step)) setStep((s) => Math.min(s + 1, totalSteps));
    }
    function goBack() {
        setStep((s) => Math.max(s - 1, 1));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!validateStep(3)) {
            setStep(3);
            return;
        }
        setSubmitting(true);
        setSubmitError("");

        const payload = {
            name: form.name,
            business: form.business,
            mobile: form.mobile,
            email: form.email,
            websiteStatus: form.websiteStatus,
            improvements: form.improvements,
            interest: form.interest,
            timeline: form.timeline,
            discussion: form.discussion,
            referral: form.referral || null,
            referralDetails: form.referralDetails || null,
        };

        try {
            await createBusinessCheck(payload);
            toast.success("Your business check was submitted!");
            setShowCongrats(true);
        } catch (err) {
            console.error(err);
            setSubmitError("Something went wrong sending your details. Please try again, or WhatsApp us directly.");
            toast.error("Something went wrong!");
        } finally {
            setSubmitting(false);
        }
    }

    function openSpin() {
        setShowCongrats(false);
        setShowSpin(true);
        setSpinError("");
    }


    async function spinWheel() {
        if (spinning || alreadySpun) return;
        setSpinning(true);
        setSpinError("");

        try {
            // Ask the backend for a prize FIRST — it's the source of truth on
            // whether this email has already spun, and it picks the prize.
            const { prize } = await spinBusinessCheck(form.email);

            const randomStop = 360 * 5 + Math.random() * 360;
            setWheelRotation(randomStop);

            setTimeout(() => {
                setPrizeWon({ label: prize });
                setSpinning(false);
                setAlreadySpun(true);
                toast.success(`You won: ${prize}! Check your email 🎉`);
            }, 4200);
        } catch (err) {
            setSpinning(false);
            if (err?.response?.status === 409) {
                setAlreadySpun(true);
                setSpinError("This email has already used its free spin.");
            } else {
                setSpinError("Couldn't spin right now — please try again in a moment.");
            }
        }
    }



    function resetAll() {
        setForm(initialForm);
        setErrors({});
        setStep(1);
        setShowCongrats(false);
        setShowSpin(false);
        setPrizeWon(null);
        setWheelRotation(0);
        setSubmitError("");
        setSpinError("");
    }

    return (
        <section className="abc-wrap">
            <div className="abc-card">
                <header className="abc-header">
                    <p className="abc-kicker">Ahaan Software</p>
                    <h1>Is your business ready for its next customer?</h1>
                    <p className="abc-sub">
                        Your business may already be excellent — but does your online presence reflect it?
                        Answer a few quick questions and see where Ahaan can help.
                    </p>
                </header>

                <div className="abc-progress">
                    {[1, 2, 3, 4].map((n) => (
                        <div key={n} className={`abc-dot ${n <= step ? "is-active" : ""}`} />
                    ))}
                </div>

                <form onSubmit={handleSubmit} noValidate>
                    {step === 1 && (
                        <div className="abc-step">
                            <label className="abc-field">
                                <span>Your name *</span>
                                <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Vishal Jaiswal" />
                                {errors.name && <em>{errors.name}</em>}
                            </label>
                            <label className="abc-field">
                                <span>Business / company name *</span>
                                <input value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="e.g. Ahaan Software Consulting" />
                                {errors.business && <em>{errors.business}</em>}
                            </label>
                            <label className="abc-field">
                                <span>WhatsApp / mobile number *</span>
                                <input value={form.mobile} onChange={(e) => update("mobile", e.target.value)} placeholder="+91 983-037-1143" />
                                {errors.mobile && <em>{errors.mobile}</em>}
                            </label>
                            <label className="abc-field">
                                <span>Email address *</span>
                                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@ahaansoftware.com" />
                                {errors.email && <em>{errors.email}</em>}
                            </label>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="abc-step">
                            <fieldset className="abc-field">
                                <legend>What best describes your current website? *</legend>
                                {WEBSITE_STATUS_OPTIONS.map((opt) => (
                                    <label key={opt} className="abc-radio">
                                        <input
                                            type="radio"
                                            name="websiteStatus"
                                            checked={form.websiteStatus === opt}
                                            onChange={() => update("websiteStatus", opt)}
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                                {errors.websiteStatus && <em>{errors.websiteStatus}</em>}
                            </fieldset>

                            <fieldset className="abc-field">
                                <legend>What are you most interested in right now? *</legend>
                                {INTEREST_OPTIONS.map((opt) => (
                                    <label key={opt} className="abc-radio">
                                        <input
                                            type="radio"
                                            name="interest"
                                            checked={form.interest === opt}
                                            onChange={() => update("interest", opt)}
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                                {errors.interest && <em>{errors.interest}</em>}
                            </fieldset>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="abc-step">
                            <fieldset className="abc-field">
                                <legend>What would you most like to improve? (choose up to 2)</legend>
                                {IMPROVEMENT_OPTIONS.map((opt) => (
                                    <label key={opt} className="abc-check">
                                        <input
                                            type="checkbox"
                                            checked={form.improvements.includes(opt)}
                                            onChange={() => toggleImprovement(opt)}
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </fieldset>

                            <fieldset className="abc-field">
                                <legend>When would you like to do this? *</legend>
                                {TIMELINE_OPTIONS.map((opt) => (
                                    <label key={opt} className="abc-radio">
                                        <input
                                            type="radio"
                                            name="timeline"
                                            checked={form.timeline === opt}
                                            onChange={() => update("timeline", opt)}
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                                {errors.timeline && <em>{errors.timeline}</em>}
                            </fieldset>

                            <fieldset className="abc-field">
                                <legend>Would you like a free 15-minute discussion with Ahaan? *</legend>
                                {DISCUSSION_OPTIONS.map((opt) => (
                                    <label key={opt} className="abc-radio">
                                        <input
                                            type="radio"
                                            name="discussion"
                                            checked={form.discussion === opt}
                                            onChange={() => update("discussion", opt)}
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                                {errors.discussion && <em>{errors.discussion}</em>}
                            </fieldset>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="abc-step">
                            <fieldset className="abc-field">
                                <legend>Optional — who else should we help?</legend>
                                <p className="abc-hint">Know another business owner who could use a professional website or software?</p>
                                {REFERRAL_OPTIONS.map((opt) => (
                                    <label key={opt} className="abc-radio">
                                        <input
                                            type="radio"
                                            name="referral"
                                            checked={form.referral === opt}
                                            onChange={() => update("referral", opt)}
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </fieldset>
                            {form.referral === "Yes, I can introduce someone" && (
                                <label className="abc-field">
                                    <span>Their name / business / phone</span>
                                    <textarea
                                        rows={3}
                                        value={form.referralDetails}
                                        onChange={(e) => update("referralDetails", e.target.value)}
                                        placeholder="e.g. Priya Shah, Shah Interiors, 98xxxxxxx0"
                                    />
                                </label>
                            )}
                        </div>
                    )}

                    <div className="abc-nav">
                        {step > 1 && (
                            <button type="button" className="abc-btn abc-btn-ghost" onClick={goBack}>
                                Back
                            </button>
                        )}
                        {step < totalSteps && (
                            <button type="button" className="abc-btn abc-btn-primary" onClick={goNext}>
                                Next
                            </button>
                        )}
                        {step === totalSteps && (
                            <button type="submit" className="abc-btn abc-btn-primary" disabled={submitting}>
                                {submitting ? "Sending…" : "🚀 Show me my opportunities"}
                            </button>
                        )}
                    </div>
                    {submitError && <p className="abc-error">{submitError}</p>}
                    <p className="abc-noObligation">No obligation. Just a quick business check.</p>
                </form>
            </div>

            {showCongrats && (
                <div className="abc-overlay" role="dialog" aria-modal="true">
                    <div className="abc-modal">
                        <h2>Thank you! 🎉</h2>
                        <p>We've received your business details.</p>
                        {form.discussion === "Yes — I'd like to discuss my requirement" ? (
                            <p>Vishal &amp; team from Ahaan Software will personally connect with you.</p>
                        ) : (
                            <p>We'll be in touch shortly with the right information for you.</p>
                        )}
                        <p className="abc-spinTeaser">One more thing — you've unlocked a free spin 🎡</p>
                        <button className="abc-btn abc-btn-primary" onClick={openSpin}>
                            Spin to win
                        </button>
                    </div>
                </div>
            )}

           {showSpin && (
    <div className="abc-overlay" role="dialog" aria-modal="true">
        <div className="abc-modal abc-modal-spin">

            {!prizeWon ? (
                <>
                    <h2>Spin the wheel 🎡</h2>
                    <p>One spin per email address — good luck!</p>

                    <div className="abc-wheelBox">
                        <div className="abc-pointer" />

                        <div
                            className="abc-wheel"
                            style={{
                                transform: `rotate(${wheelRotation}deg)`,
                                transition: spinning
                                    ? "transform 4.2s cubic-bezier(0.17, 0.67, 0.12, 0.99)"
                                    : "none",
                            }}
                        >
                            {WHEEL_PRIZES.map((prize, index) => (
                                <div
                                    key={prize}
                                    className={`abc-wheelLabel abc-wheelLabel-${index}`}
                                >
                                    {prize}
                                </div>
                            ))}
                        </div>
                    </div>

                    {spinError && (
                        <p className="abc-error">{spinError}</p>
                    )}

                    <button
                        className="abc-btn abc-btn-primary"
                        onClick={spinWheel}
                        disabled={spinning || alreadySpun}
                    >
                        {spinning ? "Spinning…" : "Spin now"}
                    </button>
                </>
            ) : (
                <>
                    <h2>Congratulations! 🎉</h2>
                    <p>Your lucky prize is ready.</p>

                    <div className="abc-prizeResult">
                        <p className="abc-prizeLabel">🎉 You won:</p>

                        <p className="abc-prizeName">
                            {prizeWon.label}
                        </p>

                        <div className="abc-claimCard">
                            <p className="abc-claimSuccess">
                                Your prize has been saved successfully. 🎉
                            </p>

                            <p>
                                📸 <strong>Take a screenshot of this screen.</strong>
                            </p>

                            <p>
                                Show this screen to Vishal to claim your gift.
                            </p>

                            <div className="abc-companyDetails">
                                <strong>Ahaan Software Consulting</strong>
                                <span>📞 +91 98303 71143</span>
                                <span>🌐 www.ahaansoftware.com</span>
                            </div>

                            <p className="abc-thankYou">
                                Thank you for being part of the Ahaan experience! ❤️
                            </p>
                        </div>

                        <button
                            className="abc-btn abc-btn-primary"
                            onClick={resetAll}
                        >
                            Done
                        </button>
                    </div>
                </>
            )}

        </div>
    </div>
)}
        </section>
    );
};

export default BusinessCheckForm;