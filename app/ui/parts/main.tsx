import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import CardSection, { CardBar, ColorCard, MyLatestDraws, ProfileCard, ResultCard, SuperCard } from "../components/card";
import Image from "next/image";
import { Avatar } from "@nextui-org/react";



export default function Main() {
    return (
        <div className="p-4">
            <CardSection>            
                <CardBar />
                <div className="grid grid-cols-5 gap-4 p-2">
                    <ProfileCard />
                    <MyLatestDraws />
                    <SuperCard/>
                </div>

                <div className="grid grid-cols-4 gap-4 p-2">
                    <ColorCard/>   
                    <ResultCard/>   
                </div>

            </CardSection>
        </div>
    )
}