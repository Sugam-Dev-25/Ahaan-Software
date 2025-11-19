import React, { useState } from "react";

const events = {
  "2021-12-03": { color: "#3CB371", value: 3 },
  "2021-12-05": { color: "#FF4C4C", value: 5 },
  "2021-12-07": { color: "#3A7AFE", value: 7 },
  "2021-12-09": { color: "#FF4C4C", value: 9 },
  "2021-12-14": { color: "#FFC107", value: 7 },
  "2021-12-15": { color: "#3A7AFE", value: 2 },
  "2021-12-17": { color: "#FF4C4C", value: 8 },
  "2021-12-21": { color: "#3CB371", value: 6 },
  "2021-12-23": { color: "#FFC107", value: 4 },
  "2021-12-24": { color: "#3A7AFE", value: 7 }
};

export default function EventCalendar() {
  const [current, setCurrent] = useState(new Date(2021, 11, 1)); // December 2021

  const year = current.getFullYear();
  const month = current.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Calendar weeks array
  const weeks = [];
  let temp = [];

  // Leading empty cells
  for (let i = 0; i < firstDay; i++) temp.push(null);

  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    temp.push(day);

    if (temp.length === 7) {
      weeks.push(temp);
      temp = [];
    }
  }

  // Fill last row safely
  if (temp.length > 0) {
    while (temp.length < 7) temp.push(null);
    weeks.push(temp);
  }

  const goPrev = () => setCurrent(new Date(year, month - 1, 1));
  const goNext = () => setCurrent(new Date(year, month + 1, 1));
  const goToday = () => setCurrent(new Date());

  const styles = {
    wrapper: {
      width: "420px",
      background: "#fff",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      fontFamily: "sans-serif"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px"
    },
    navBtn: {
      padding: "6px 10px",
      borderRadius: "6px",
      cursor: "pointer",
      background: "#f2f2f2"
    },
    daysRow: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      fontWeight: "bold",
      color: "#666",
      marginBottom: "10px"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "5px"
    },
    cell: {
      height: "65px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "15px",
      position: "relative"
    },
    eventDot: {
      position: "absolute",
      bottom: "8px",
      width: "28px",
      height: "28px",
      borderRadius: "50%",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "12px",
      fontWeight: "bold"
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <div style={{ display: "flex", gap: "10px" }}>
          <span style={styles.navBtn} onClick={goPrev}>‹</span>
          <span style={styles.navBtn} onClick={goToday}>today</span>
          <span style={styles.navBtn}>month</span>
        </div>

        <h4 style={{ margin: 0 }}>
          {current.toLocaleString("en-US", { month: "long" })} {year}
        </h4>

        <span style={styles.navBtn} onClick={goNext}>›</span>
      </div>

      <div style={styles.daysRow}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div style={styles.grid}>
        {weeks.flat().map((day, i) => {
          if (!day) return <div key={i} style={styles.cell}></div>;

          const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(
            day
          ).padStart(2, "0")}`;

          const event = events[dateKey];

          return (
            <div key={i} style={styles.cell}>
              {day}

              {event && (
                <div
                  style={{
                    ...styles.eventDot,
                    background: event.color
                  }}
                >
                  {event.value}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
