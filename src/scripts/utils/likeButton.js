const buttonLikeSession = () => {
  return `
<button aria-label = "like this movie" id="likeButton" class="likeButton">
  <i class="fa fa-heart-o" area-hidden="true"></i>
</button>
`;
};

const buttonUnlikeSession = () => {
  return `
    <button aria-label = 'unlike this movie' id="likeButton" class = "likeButton">
        <i class="fa fa-heart" area-hidden='true'></li>
    </button>
`;
};

// const button = {
//     buttonLikeSession,
//     buttonUnlikeSession
// }

export { buttonLikeSession, buttonUnlikeSession };
