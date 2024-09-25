"use server";
import { postsCategoriesArray } from "@/utills/other_functions/categories_data";
import { postsPlacesArray } from "@/utills/other_functions/categories_data";
import { desavanjaCategoriesArray } from "@/utills/other_functions/categories_data";
import { desavanjaPlacesArray } from "@/utills/other_functions/categories_data";
import { jobsCategoriesArray } from "@/utills/other_functions/categories_data";
import { jobsPlacesArray } from "@/utills/other_functions/categories_data";

//?Test funkcije
import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateUsers() {
  revalidateTag("users");
}

export async function revalidateProducts() {
  revalidateTag("products");
}

export async function revalidatePage() {
  revalidatePath("/test");
}

//!--------------------------------------------------------------------------------------------------------------------------------------------------------------------

//?Funkcije koje ce se zapravo primeniti:

export async function revalidatePosts(path, secondPagePath) {
  revalidatePath(path);
  revalidatePath(secondPagePath);
}

export async function returnPaths(path, isPlaces) {
  let propsArray = [];

  if (path === "/vesti") {
    propsArray = isPlaces ? postsPlacesArray : postsCategoriesArray;
  } else if (path === "/desavanja") {
    propsArray = isPlaces ? desavanjaPlacesArray : desavanjaCategoriesArray;
  } else if (path === "/poslovni-adresar") {
    propsArray = isPlaces ? jobsPlacesArray : jobsCategoriesArray;
  }

  const propPrefix = isPlaces
    ? getPathPrefix(path, true)
    : getPathPrefix(path, false);

  const pathProps = propsArray.flatMap((item) => {
    const propFirstPage = `${propPrefix}/${item}`;
    const propSecondPage = `${propFirstPage}/page/[pageNumber]`;
    return [{ prop: propFirstPage }, { prop: propSecondPage }];
  });

  return pathProps;
}

function getPathPrefix(path, isPlaces) {
  if (path === "/vesti") {
    return isPlaces ? "/mesto" : "/category";
  } else if (path === "/desavanja") {
    return isPlaces ? "/mesto-desavanja" : "/kategorija-desavanja";
  } else if (path === "/poslovni-adresar") {
    return isPlaces
      ? "/poslovni-adresar-mesto"
      : "/poslovni-adresar-kategorija";
  }
}

export async function revalidateCategoriesAndPlaces(pathProps) {
  await Promise.all(
    pathProps.map(async ({ prop }) => {
      revalidatePath(prop);
    })
  );
}
