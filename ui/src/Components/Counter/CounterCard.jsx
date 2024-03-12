import { useState } from "react";
import React, { useEffect, useRef } from 'react';
export default function CounterCard() {
    const timersRef = useRef([]);
    useEffect(() => {
        const counter = (id, start, end, duration) => {
            let obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 1 : -1,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                    current += increment;
                    obj.textContent = current;
                    if (current === end) {
                        clearInterval(timer);
                    }
                }, step);
            timersRef.current.push(timer);
        };
        counter("count0", 0, 1500, 6000, 1);
        counter("count1", 0, 200, 6000, 1);
        counter("count2", 0, 20, 6000, 1);
        counter("count3", 0, 20, 6000, 1);
        return () => {
            timersRef.current.forEach(clearInterval);
        };
    }, []);

    const [BookCard, setBookCard] = useState('white')
    const [ComputerCard, setComputerCard] = useState('white')
    const [Establishment, setEstablishment] = useState('white')
    const [BookCardText, setBookCardText] = useState('black')
    const [ComputerCardText, setComputerCardText] = useState('black')
    const [EstablishmentText, setEstablishmentText] = useState('black')
    const CardData =
    {
        title: 'Students enrolled',
    }

    return (
        <div>
            <div className="card-group my-4 text-center rounded-0">
                <div className="card myshadow border border-light-subtle rounded rounded-0 mx-1"
                    style={{ background: ComputerCard, color: ComputerCardText }} data-aos="fade-up" data-aos-duration="300" id='counter1'>
                    <div className="card-body  ">
                        <h1 className=" w-100 m-auto mt-1 py-5 fw-bolder  text-white counter"
                            style={{ background: 'var(--BooksBgCard)' }}> <b id="count0" >20</b></h1>
                        <h5 className="card-title">{CardData.title}</h5>
                    </div>
                </div>
                <div className="card myshadow border border-light-subtle  rounded rounded-0 mx-1" style={{ background: BookCard, color: BookCardText }}
                    data-aos="fade-up" data-aos-duration="500"  id='counter2'>
                    <div className="card-body ">
                        <h1 className="  w-100 m-auto mt-1 py-5 fw-bolder  text-white counter"
                            style={{ background: 'var(--computerBgCard)' }}> <b id="count1" >200</b></h1>
                        <h5 className="card-title">Books in Library</h5>
                    </div>
                </div>

                <div className="card myshadow border border-light-subtle rounded rounded-0 mx-1"
                    style={{ background: Establishment, color: EstablishmentText }}
                    data-aos="fade-up" data-aos-duration="700"  id='counter3'>
                    <div className="card-body  ">
                        <h1 className="w-100 m-auto mt-1 py-5 fw-bolder text-white counter"
                            style={{ background: 'var(--EstablishmentBgCard)' }}> <b id="count3" >20</b></h1>
                        <h5 className="card-title">Establishment(in year): 20+</h5>
                    </div>
                </div>
                <div className="card myshadow border border-light-subtle rounded rounded-0 mx-1"
                    style={{ background: ComputerCard, color: ComputerCardText }} data-aos="fade-up" data-aos-duration="1000"  id='counter4'>
                    <div className="card-body  ">
                        <h1 className=" w-100 m-auto mt-1 py-5 fw-bolder  text-white counter"
                            style={{ background: 'var(--BooksBgCard)' }}> <b id="count2" >20</b></h1>
                        <h5 className="card-title">Computers</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
