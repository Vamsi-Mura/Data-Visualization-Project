import { useEffect, useState } from "react";
import BarChart from "../../components/charts/ApexCharts/BarChart";
import PieChart from "../../components/charts/ApexCharts/PieChart";
import LineChart from "../../components/charts/D3Charts/LineChart";

import "./dashboard.css";
import { Button, Col, Row } from "react-bootstrap";
import FilterModal from "./FilterModal";
import {ReactComponent as FilterIcon} from "./filter-circle.svg"

<div class="main-content">
  <h1>Welcome to the Dashboard</h1>
  <p>Here is your main content area.</p>
</div>;

export const Dashboard = () => {
  // Chart.register(ArcElement);

  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const applyFilters = (filters) => {
    console.log("Filters Applied:", filters);
    // Handle filtered data (e.g., call an API or update dashboard)
    getProducts(false, filters);
  };
  useEffect(() => {
    getProducts(true);
  }, []);

  const getProducts = (isInitialData = false, filters) => {
    let params = "";
    if (!isInitialData) {
      params = new URLSearchParams(filters).toString();
    }

    fetch(`http://127.0.0.1:8000/dashboard/?${params}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        // console.log(data, "lll");
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  {
    console.log(data?.length);
  }
  return (
    <>
      <div class="topbar">
        <div class="logo">Charts</div>

        <div class="search-bar">
          <input type="text" placeholder="Search..." />
        </div>

        <div class="icons">
          <div class="icon">
            <i class="fas fa-envelope"></i>
            <span class="badge">3</span>
          </div>
          <div class="icon">
            <i class="fas fa-bell"></i>
            <span class="badge">5</span>
          </div>
        </div>
      </div>
      <div class="body right-main p-10">
        <Row>
          <Col className="col-2">
            <div class="sidebar">
              <div class="sidebar-header">Dashboard</div>
              <a href="#section1">Overview</a>
              <a href="#section2">Reports</a>
              <a href="#section3">Analytics</a>
              <a href="#section4">Settings</a>
            </div>
          </Col>

          <Col className="col-10 ">
            <div className="d-flex  gap-3 filter justify-content-center align-items-center">
              <h1>Analysis Dashboard</h1>
              <FilterIcon onClick={handleOpenModal}/>
              {/* <Button variant="primary" className="w-5" onClick={handleOpenModal}>
                Open Filters
              </Button> */}
            </div>

            {data.length > 0 && (
              <div className="container-fluid">
                <div className="left">
                  <h2>Intensity</h2>
                  <BarChart
                    allData={data}
                    itemKey="intensity"
                    name="Intensity Records"
                  />
                </div>
                <div className="left">
                  <h2>End Year</h2>
                  <BarChart
                    allData={data}
                    itemKey="end_year"
                    name="Records for End Year"
                  />
                </div>
                {/* </div> */}
                <div>
                  <div className="main">
                    <h2>Topic</h2>
                    <PieChart allData={data} itemKey="topic" />
                  </div>
                </div>
                <div>
                  <div className="main">
                    <h2>Relevance vs Year</h2>
                    {/* <RelevanceLineChart data={data} /> */}
                    {/* <LineChart data={data} /> */}
                    <LineChart data={data} />
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
        <FilterModal
          show={showModal}
          handleClose={handleCloseModal}
          applyFilters={applyFilters}
        />
      </div>
    </>
  );
};
