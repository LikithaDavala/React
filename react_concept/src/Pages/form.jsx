import { useState } from "react";

function Form (){
    const [firstValue,firstInput] = useState("");
    const [middleValue,middleInput] = useState("");
    const [error, setError] = useState("");
    const [touched, setTouched] = useState(false);

    const isFirstNameValid = firstValue.trim().length > 0;

    function Submit(){
        setTouched(true);

        if (!isFirstNameValid) {
            setError("First Name is required.");
            return;
        }

        setError("");
        alert("Form submitted successfully!");
    }
    return(
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <div style={{ marginBottom: "8px" }}>
                <label style={{ color: "#1f2937", fontWeight: "bold" }}>
                    First Name:<span style={{ color: "red", marginLeft: "4px" }}>*</span>
                </label>
         </div>
            <input
                value={firstValue}
                onBlur={() => setTouched(true)}
                onChange={(e) => {
                    firstInput(e.target.value);
                    if (error) setError("");
                }}
                style={{
                    width: "220px",
                    padding: "10px",
                    margin: "0 0 8px",
                    border: touched && isFirstNameValid ? "2px solid red" : "2px solid #0d0d10",
                    borderRadius: "8px",
                    backgroundColor: "#eef2ff",
                    color: "#111827",
                    outline: "none"
                }}
            />
            {touched && !isFirstNameValid && <div style={{ color: "red", fontSize: "12px", marginBottom: "12px" }}>{error || "First Name is required."}</div>}

            <label style={{ color: "#1f2937", fontWeight: "bold", display: "block" }}>Middle Name:</label>
            <input
                value={middleValue}
                onChange={(e) => middleInput(e.target.value)}
                style={{
                    width: "220px",
                    padding: "10px",
                    margin: "8px 0 16px",
                    border: "2px solid #10b981",
                    borderRadius: "8px",
                    backgroundColor: "#ecfdf5",
                    color: "#111827",
                    outline: "none"
                }}
            />
            <button
                onClick={Submit}
                disabled={!isFirstNameValid}
                style={{
                    padding: "10px 18px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: isFirstNameValid ? "#2563eb" : "#93c5fd",
                    color: "#ffffff",
                    cursor: isFirstNameValid ? "pointer" : "not-allowed",
                    fontWeight: "bold",
                    opacity: isFirstNameValid ? 1 : 0.7
                }}
            >
                Submit
            </button>
        </div>
    )
}
export default Form;

