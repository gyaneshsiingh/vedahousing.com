"use client"
import React from "react";
import { useState } from "react";
import { db } from "@/firebase/config"
import { Timestamp } from "firebase/firestore";
import {
    addDoc,
    collection,
    query,
    where,
    getDocs,
} from "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Appoint.modules.css"
import "../Contact/contact.modules.css"

interface AppointProps {
    onClose?: () => void;
}
const Appoint = ({ onClose }: AppointProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState("");
    const [bookSlots, setBookSlots] = useState<string[]>([]);
    const [success, setSuccess] = useState(false);


    const timeSlots = [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "17:00",
        "18:00",
        "19:00",
    ];


    const fetchData = async (selectedDate: string) => {

        const q = query(
            collection(db, "appointment"),
            where("date", "==", selectedDate)
        );

        const snapshot = await getDocs(q);

        const slots: string[] = [];

        snapshot.forEach((doc) => {
            slots.push(doc.data().time);
        });

        setBookSlots(slots);
        setTime("");
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const q = query(
            collection(db, "appointment"),
            where("date", "==", date),
            where("time", "==", time)
        );

        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
            alert("already booked");
            return;
        }
        if (!date) return;

        const formattedDate = date.toLocaleDateString("en-CA");

        const expireDate = new Date(date);
        expireDate.setHours(23, 59, 59, 999);

        try {
            const docRef = await addDoc(collection(db, "appointment"), {
                name,
                phone,
                email,
                date: formattedDate,
                time,
                expireAt: Timestamp.fromDate(expireDate),
            });

            console.log("Saved:", docRef.id);

            console.log("Success", docRef);

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phone,
                    email,
                    date: formattedDate,
                    time,
                }),
            });

            if (response.ok) {
                setSuccess(true);

            }

        } catch (err) {
            console.error("Firebase Error:", err);

        }

    }


    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    const minDate = today.toISOString().split("T")[0];

    if (success) {
        return (
            <div className="vh-success">
                <h2>Thank You!</h2>

                <p>Your appointment has been scheduled successfully.</p>
                <p>
                    A confirmation email has been sent to
                    <br />
                    <strong>{email}</strong>.
                </p>
                <button
                    className="vh-close-btn"
                    onClick={() => {
                        // console.log("Child button clicked");
                        // console.log(onClose);
                        onClose?.();
                    }}
                >
                    X
                </button>

            </div>
        )
    }

    return (
        <section className="vh-appoint">
            <form className="vh-appoint-inner" onSubmit={handleSubmit} >
                <div className="vh-appoint-header">
                    <h1 className="vh-appoint-title">Make Your Appointment</h1></div>
                <input type="text" required className="vh-name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="tel" required className="vh-ph" placeholder="Enter Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="email" required className="vh-em" placeholder="Enter Your Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                <DatePicker
                    selected={date}
                    onChange={(selectedDate: Date | null) => {
                        setDate(selectedDate);

                        if (selectedDate) {
                            const formatted = selectedDate.toLocaleDateString("en-CA");
                            fetchData(formatted);
                        }
                    }}
                    placeholderText="DD / MM / YYYY"
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    className="vh-date"
                    required
                />
                <select className="vh-time" required value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="">Select Time</option>
                    {timeSlots.map((slot) => (
                        <option
                            key={slot}
                            value={slot}
                            disabled={bookSlots.includes(slot)}
                        >
                            {slot} {bookSlots.includes(slot) ? "(Booked)" : ""}
                        </option>
                    ))}
                </select>

                <button type="submit" className="vh-primary-btn1">
                    Book Appointment
                </button>
            </form>


        </section>
    )


}

export default Appoint;