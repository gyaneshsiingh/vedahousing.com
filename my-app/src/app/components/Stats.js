
const Stats = () => {
    const stats = [
        { number: "100+", label: "Projected Completed" },
        { number: "15+", label: "Years Experience" },
        { number: "98%", label: "Client Satisfaction" },
    ];

    return (
        <section className="vh-stats">
            <div className="vh-stats-inner">
                {stats.map((item, index) => (
                    <div key={index} className="vh-stat-item">
                        <h2 className="vh-stat-number">{item.number}</h2>
                        <p className="vh-stat-label">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;