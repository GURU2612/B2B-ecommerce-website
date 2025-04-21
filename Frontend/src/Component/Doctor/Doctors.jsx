import React from 'react';
import advisorImage from '../../assets/images/doctor.png';
import DrCart from "../../Content/DrCart/DrCart.jsx";
import Banner from "../../Content/AboutusBanner/Banner.jsx";
import Blog from "../../Content/Blog/Blog.jsx"; // Use the same image for demo
import './Doctors.css'
const Doctors=()=> {
    const doctorList = [
        { name: "Dr. Mitesh Shah", title: "Dermatologist", image: advisorImage },
        { name: "Dr. Priya Patel", title: "Cardiologist", image: advisorImage },
        { name: "Dr. Ravi Mehta", title: "Neurologist", image: advisorImage },
        { name: "Dr. Anjali Rao", title: "Pediatrician", image: advisorImage },
        { name: "Dr. Karan Joshi", title: "Orthopedic", image: advisorImage },
        { name: "Dr. Sneha Desai", title: "ENT Specialist", image: advisorImage },
        { name: "Dr. Mehul Shah", title: "Dentist", image: advisorImage },
        { name: "Dr. Nidhi Verma", title: "Gynecologist", image: advisorImage },
        { name: "Dr. Raj Singh", title: "General Physician", image: advisorImage },
        { name: "Dr. Alka Bhatt", title: "Ophthalmologist", image: advisorImage },
        { name: "Dr. Hitesh Solanki", title: "Psychiatrist", image: advisorImage },
        { name: "Dr. Komal Jain", title: "Oncologist", image: advisorImage },
    ];

    return (
        <>
            <div className="Dr-main">
            <Banner
                title="Doctors"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                breadcrumb="Home > Doctors"
            />

            <div className="doctor-list-wrapper">
            {doctorList.map((doctor, index) => (
                <DrCart
                    key={index}
                    name={doctor.name}
                    title={doctor.title}
                    image={doctor.image}
                />
            ))}
        </div>

<Blog/>            </div>
        </>
    );
}

export default Doctors;
