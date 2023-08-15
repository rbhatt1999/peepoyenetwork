import { NextResponse } from "next/server";
import blogdata from "../../blog";

export async function GET(req, { params }) {
  const yearMonth = params.slug;

  const data = blogdata.filter((blog) => {
    const date = new Date(blog.date);
    const month = date.getMonth();
    const year = date.getFullYear();
    const key = `${year}-${month}`;
    return key === yearMonth;
  });

  return NextResponse.json(data);
}

