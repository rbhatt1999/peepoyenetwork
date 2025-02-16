import { NextResponse } from "next/server";
import blogdata from "../blog";
import { notFound } from 'next/navigation';

export async function GET(req) {
  let tempdata = blogdata.sort((a, b) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return bDate - aDate;
  }).filter((item) => {
    return item.linktree;
  });
  
  let page = req.nextUrl.searchParams.get("page")
  let search = req.nextUrl.searchParams.get("search")

  if (search) {
    search = decodeURIComponent(search);
    tempdata = tempdata.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  let total = tempdata.length;
  let count = 12;
  let totalPage = Math.ceil(total / count);

  page ? page = parseInt(page) : page = 1;
  let range;

  if (page > totalPage) {
    range = [0, count - 1];
  }
  else if (page <= 0) {
    range = [0, count - 1];
  }
  else {
    range = [(page - 1) * count, page * count - 1];
  }

  tempdata = tempdata.slice(range[0], range[1] + 1)

  const data = tempdata.map((item) => {
    return {
      title: item.title,
      slug: item.slug,
      image: item.linktree.image,
    };
  });
  
  return NextResponse.json({data, totalPage});
}