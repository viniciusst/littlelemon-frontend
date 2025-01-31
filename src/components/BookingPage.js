import { useNavigate } from "react-router-dom";
import { submitAPI, fetchAPI } from "./Api";
import BookingForm from "./BookingForm";
import { useReducer } from "react";

function BookingPage() {
  const navigate = useNavigate();

  const initializeTimes = () => {
    return fetchAPI(new Date());
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return fetchAPI(new Date(action.payload));
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate("/booking-confirmed");
    }
    return success;
  };

  return (
    <main className="booking-page">
      <section className="booking-section">
        <div className="booking-content">
          <h1>Reserve a Table</h1>
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </section>
    </main>
  );
}

export default BookingPage;
