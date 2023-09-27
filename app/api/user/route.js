import { connectToDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { uid } = await req.json();
  try {
    await connectToDB();
    console.log(uid);
    const user = await User.findOne({ uid });
    console.log(user);
    if (!user) {
      await User.create({
        uid,
      });
      return NextResponse.json(
        { success: true, message: "User Added" },
        { status: 201 }
      );
    }
    return NextResponse.json(
      { success: false, message: "User Already Exists" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ success: false, message: err }, { status: 500 });
  }
}
