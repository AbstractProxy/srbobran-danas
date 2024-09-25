import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  returnPaths,
  revalidateCategoriesAndPlaces,
  revalidatePosts,
} from "@/utills/revalidate_functions/revalidate_functions";

export async function GET(request) {
  // client.clearStore();

  // client.resetStore();

  const type = request.nextUrl.searchParams.get("type") || "resetAll";

  const path = request.nextUrl.searchParams.get("path") || "/";

  const secondPagePath = `${path}/page/[pageNumber]`;

  if (type === "resetAll") {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path: path,
    });
  } else if (type === "revalidatePosts") {
    const categoryPathProps = await returnPaths(path, false);
    const placesPathProps = await returnPaths(path, true);
    revalidatePosts(path, secondPagePath);
    revalidateCategoriesAndPlaces(categoryPathProps);
    revalidateCategoriesAndPlaces(placesPathProps);

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path: path,
      secondPagePath,
      categoryPathProps,
      placesPathProps,
    });
  } else if (type === "revalidateSinglePost") {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path: path,
    });
  }
}
