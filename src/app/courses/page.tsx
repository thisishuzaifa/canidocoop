'use client';

import CourseTile from "@/components/CourseTile";

export default function Courses() {
    return (
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center mt-10">
            Which college are you in?
        </h1>
        <CourseTile />
        </div>
    );
    }
    
