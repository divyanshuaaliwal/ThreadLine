import React from "react";
import MainCarousal from "../../components/HomeCarousal/MainCarousal";
import HomeSectionCarousal from "../../components/HomeSectionCarousal/HomeSectionCarousal";
import { mens_kurta } from '../../../Data/Men/mens_kurta';

const HomePage = () => {
    return (

        <div>

            <MainCarousal/>

            <div className="flex flex-col justify-center py-20 px-5 lg:px-10 space-y-10"> 
                <HomeSectionCarousal data = {mens_kurta} sectionName={"Men's Kurta"} /> 
                <HomeSectionCarousal data = {mens_kurta} sectionName={"Men's Shoes"} /> 
                <HomeSectionCarousal data = {mens_kurta} sectionName={"Men's Shirt"} /> 
                <HomeSectionCarousal data = {mens_kurta} sectionName={"Women's Saree"} /> 
                <HomeSectionCarousal data = {mens_kurta} sectionName={"Women's Dress"} /> 
            </div>


        </div>
        
    )
}

export default HomePage;