import {
  isAktivnosti,
  isDesavanja,
  isJobs,
} from "@/utills/url_config_functions/url_config_functions";
import RelevantPosts from "@/Components/RelevantPosts/RelevantPosts";

export default function RelevantPostsDecider({ type, postId, categoryNames }) {
  if (categoryNames) {
    return isJobs(type) || isDesavanja(type) || isAktivnosti(type) ? null : (
      <RelevantPosts postId={postId} categoryNames={categoryNames} />
    );
  }
}
