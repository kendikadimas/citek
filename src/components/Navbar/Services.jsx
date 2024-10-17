import React from 'react'
import Card from './Card';

const Services = () => {
    return (
        <section className=''>
            <h2 className='text-center text-3xl font-semibold text-teal-400 p-8'>THE SERVICE WE'RE PROVIDE</h2>
            <div className='flex p-5'>
            <Card 
            image = "./doctor.png"
            title= "Calculating your Index Calorie"
            description="We Calculate your BMI Index from data like age, height and weight"
            />
            <Card 
            image="./doctor.png"
            title = "Calories Counter"
            description="We provide food recomendation according to your calorie requirements"
            />
            <Card 
            image="./doctor.png"
            title="Foodwise Program"
            description="Solve your queries by interacting with our bot"
            />
            <Card 
            image="./doctor.png"
            title="Waste Pickup"
            description="Get all the nutritional values of your preferred dish"
            />
            </div>
        </section>
    );
    };

    export default Services;