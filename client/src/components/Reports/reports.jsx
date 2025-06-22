import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./reports.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Reports = () => {
    const navigate = useNavigate();

    const handleAddNew = () => {
        navigate("/reports/add");
    };

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/");
		window.location.reload();
	};

    const home = () => {
        navigate("/");
    };

    return (
		<div>
			<div className={styles.main_container}>
				<nav className={styles.navbar}>
					<div className={styles.title_container} onClick={home}>
						<FontAwesomeIcon icon={faHome} className={styles.home_icon} />
						<h1>Doctorly AI</h1>
					</div>
					<button className={styles.white_btn} onClick={handleLogout}>
						Logout
					</button>
				</nav>
			</div>
			<div className={styles.reports_container}>
				<div className={styles.header}>
					<img src="/images/labreports.svg" alt="Lab Tests" width="100px" className={styles.icon} />
					<h1>Lab Reports & Results</h1>
					<p>Review your lab reports and test results with ease.</p>
				</div>

				<div className={styles.buttons_container}>
					<div
						className={styles.button_card}
						onClick={() => navigate("/reports/labreports")}
					>
						<h2>Lab Reports</h2>
						<img src="/images/lab-test.png" alt="Lab Tests Icon" />
					</div>
					<div
						className={styles.button_card}
						onClick={() => navigate("/reports/results")}
					>
						<h2>View Results</h2>
						<img src="/images/results.png" alt="View Results Icon" />
					</div>
				</div>

				<button className={styles.add_new_btn} onClick={handleAddNew}>
					+ Add New
				</button>
			</div>
		</div>
    );
};

export default Reports;
