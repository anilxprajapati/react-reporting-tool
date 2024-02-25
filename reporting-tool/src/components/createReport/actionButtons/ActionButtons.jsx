import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function ActionButtons() {

    const { isTableSelected } = useSelector(state => state.join)

    // Define an array of button objects
    const buttons = [
    {
        type: "filter",
        className: "filter-button",
        svg: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(113, 114, 173)"
            viewBox="0 0 16 16"
            role="img"
            aria-label="filter icon"
            className="Icon Icon-filter"
            width="20"
            height="20"
        >
            <path d="M1 4.5c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 1 1 0 2.5H2.25C1.56 5.75 1 5.19 1 4.5zM4 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm2 4.25a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z"></path>
        </svg>
        ),
        label: "Filter"
    },
    {
        type: "join",
        className: "join-button",
        svg: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(80, 158, 227)"
            viewBox="0 0 16 16"
            role="img"
            aria-label="join icon"
            className="Icon Icon-join"
            width="20"
            height="20"
            >
            <path d="M8.772 11.187A4.733 4.733 0 0 0 10 8a4.733 4.733 0 0 0-1.228-3.187A3.748 3.748 0 0 0 7 8c0 1.345.708 2.525 1.772 3.187z"></path><path d="M8 4.127a4.75 4.75 0 1 0 0 7.747 4.751 4.751 0 0 1 0-7.747zm.772.686a3.75 3.75 0 1 1 0 6.374c-.231.256-.49.486-.772.686a4.75 4.75 0 1 0 0-7.747c.282.201.54.431.772.687z"></path>
            </svg>
        ),
        label: "Join data"
        },
        {
        type: "aggregation",
        className: "aggregation-button",
        svg: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(113, 114, 173)"
            viewBox="0 0 16 16"
            role="img"
            aria-label="aggregation icon"
            className="Icon Icon-aggregation"
            width="20"
            height="20"
            >
            <path d="M2.295 2.745A.75.75 0 0 1 3 2.25h9a.75.75 0 1 1 0 1.5H5.072l3.486 2.906c.84.7.84 1.989 0 2.688L5.072 12.25h6.763a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.48-1.326l5.078-4.232a.25.25 0 0 0 0-.384L2.52 3.576a.75.75 0 0 1-.225-.831z"></path>
            </svg>
        ),
        label: "Aggregation"
        },
        {
        type: "groupby",
        className: "groupby-button",
        svg: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(147, 161, 171)"
            viewBox="0 0 576 512"
            role="img"
            aria-label="groupby icon"
            className="Icon Icon-groupby"
            width="20"
            height="20"
            >
            <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
            </svg>
        ),
        label: "Groupby"
        },
        {
        type: "sort",
        className: "sort-button",
        svg: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(147, 161, 171)"
            viewBox="0 0 16 16"
            role="img"
            aria-label="sort icon"
            className="Icon Icon-sort"
            width="20"
            height="20"
            >
            <path d="M5 12.75a.75.75 0 0 0 .75-.75V4.81l1.22 1.22a.75.75 0 1 0 1.061-1.06l-2.49-2.491a.748.748 0 0 0-1.078-.001L1.97 4.97a.75.75 0 1 0 1.06 1.06l1.22-1.22V12c0 .414.336.75.75.75zm6 1a.748.748 0 0 1-.537-.227L7.97 11.03a.75.75 0 0 1 1.06-1.06l1.22 1.22V4a.75.75 0 1 1 1.5 0v7.19l1.22-1.22a.75.75 0 0 1 1.06 1.06l-2.5 2.5a.748.748 0 0 1-.53.22z"></path>
            </svg>
        ),
        label: "Sort"
        },
        {
        type: "row-limit",
        className: "row-limit-button",
        svg: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(147, 161, 171)"
            viewBox="0 0 16 16"
            role="img"
            aria-label="row-limit icon"
            className="Icon Icon-Row-Limit"
            width="20"
            height="20"
            >
            <path d="M2 3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-8A.5.5 0 0 1 6 3h7.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-1zm0 4A.5.5 0 0 1 6 7h7.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-1zm0 4A.5.5 0 0 1 6 11h7.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-1z"></path>
            </svg>
        ),
        label: "Row Limit"
        }          
    ]

return (
    <div className={`action-buttons-container row p-4 me-0 ${!isTableSelected ? 'hide' : ''}`}>
      <div className="col-auto d-flex align-items-center flex-wrap d-grid gap-4">
        {/* Map over the buttons array and generate buttons dynamically */}
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={`${button.className} py-2 px-3 pointer rounded d-flex align-items-center flex-column`}
          >
            {button.svg}
            <span className="mt-1">{button.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ActionButtons;

