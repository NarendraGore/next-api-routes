import { user } from "@/utils/DB";
import { NextResponse } from "next/server";


export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const data = user;
  const { id } = await params;

  //   console.log("Data from DB id", data);
  const filteredData = data.filter((item) => item.id === Number(id));

  //   console.log("ID from URL", id);
  return NextResponse.json(
    filteredData.length == 0
      ? { result: "No user found", success: false }
      : { result: filteredData[0], success: true },
    { status: 200 },
  );
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const payload = await request.json();
  const { id } = await params;
  const userID = id;
  payload.id = userID;
  console.log("User ID from URL", userID);
  console.log("Payload from PUT API", payload);
  if (!payload.name || !payload.age || !payload.city) {
    return NextResponse.json(
      { error: "request data is not valid", success: false },
      { status: 400 },
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export  async function DELETE(
  request: Request,
  { params }: { params: { id: number } },
) {
  const { id } = await params;
  if(id){
    return NextResponse.json(
      { message: "User deleted successfully", success: true },
      { status: 200 },
    );
  }
  else{    return NextResponse.json(
      { message: "User ID is required for deletion", success: false },
      { status: 400 },
    );
  }
  
}
