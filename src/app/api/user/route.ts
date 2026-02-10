import { user } from "@/utils/DB";
import { NextResponse } from "next/server";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
  // console.log("Data from DB", data);
  // return NextResponse.json({name:"ABC", age:30, city:"Pune"},{status:200})
}

export async function POST(request: Request) {
  const payload = await request.json();
  console.log("Payload from POST API", payload.id);

console.log("Payload from POST API", payload);
  if(!payload.name||!payload.age||!payload.city){
    return NextResponse.json({error:"All fields are required", success:false},{status:400})
}
//   console.log("Payload from POST API", payload);
// console.log("Request from POST API", request);
return NextResponse.json({result:"New user Created", success:true},{status:201})




}