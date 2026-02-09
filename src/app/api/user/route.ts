
import { user } from "@/utils/DB";
import { NextResponse } from "next/server";

export function GET(){

    const data = user;
    // console.log("Data from DB", data);
    return NextResponse.json(data,{status:200})

    // return NextResponse.json({name:"ABC", age:30, city:"Pune"},{status:200})
}