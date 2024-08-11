import React, { useRef } from 'react';
import './Reservation.css';
import { Element } from 'react-scroll';
import dateIcon from '../assets/icons/date.png';
import timeIcon from '../assets/icons/clock.png';

const Reservation = () => {
    const dateInputRef = useRef(null);
    const timeInputRef = useRef(null);

    const openDatePicker = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    const openTimePicker = () => {
        if (timeInputRef.current) {
            timeInputRef.current.showPicker();
        }
    };

    return (
        <Element name='reservation'>
            <div className="reservation-form-container">
                <form className="reservation-form">
                    <h2>Reservation Form</h2>

                    <div className="input-container">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            ref={dateInputRef}
                            required
                        />
                        <img
                            src={dateIcon}
                            alt="Date picker icon"
                            className="custom-icon-date"
                            onClick={openDatePicker}
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="time">Time:</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            ref={timeInputRef}
                            required
                        />
                        <img
                            src={timeIcon}
                            alt="Time picker icon"
                            className="custom-icon-time"
                            onClick={openTimePicker}
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="guests">Number of Guests:</label>
                        <input type="number" id="guests" name="guests" required min="1" />
                    </div>

                    <div className="input-container">
                        <label htmlFor="seating" className="custom-select-label">
                            Seating:
                        </label>
                        <div className="custom-select-wrapper">
                            <select id="seating" name="seating" className="custom-select">
                            <option value="noPreference">No Preference</option>
                                <option value="indoor">Indoor</option>
                                <option value="outdoor">Outdoor</option>
                                <option value="rooftop">Rooftop</option>
                                <option value="balcony">Balcony</option>
                            </select>
                        </div>
                    </div>

                    <div className="input-container">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type='tel' id="phone" name="phone" required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="requests">Special Requests:</label>
                        <textarea id="requests" name="requests"></textarea>
                    </div>

                    <div className="button-container">
                        <button type="submit">Submit Reservation</button>
                    </div>
                </form>
            </div>
        </Element>
    );
}

export default Reservation;
