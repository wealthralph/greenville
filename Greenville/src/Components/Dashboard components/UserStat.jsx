import React from "react";
import TokenIcon from "../../assets/icons/coins.png";
import RequestIcon from "../../assets/icons/truck_delivery.png";
import PendingIcon from "../../assets/icons/pending.png";
import RecycleIcon from "../../assets/icons/recycle.png";

const UserStat = () => {
  const stats = [
    { value: 400, label: "Total tokens", icon: TokenIcon },
    { value: 32, label: "Total requests", icon: RequestIcon },
    { value: 2, label: "Pending Request", icon: PendingIcon },
    { value: 327, label: "Plastic recycled", icon: RecycleIcon },
  ];

  return (
    <div className="user-stats-wrapper">
      <div className="user-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="user-stat-card">
            <img src={stat.icon} alt={stat.label} className="stat-icon" />
            <span className="stat-value">{stat.value.toLocaleString()}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStat;
