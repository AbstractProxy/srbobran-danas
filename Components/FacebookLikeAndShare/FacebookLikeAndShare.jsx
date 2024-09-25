import FacebookButton from "../FacebookButton/FacebookButton";

export default async function FacebookLikeAndShare() {
  return (
    <div className="pb-3">
      <FacebookButton title={"like"} /> <FacebookButton title={"share"} />{" "}
      <br />
    </div>
  );
}
