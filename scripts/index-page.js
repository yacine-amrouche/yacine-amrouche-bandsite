const backend = new BandSiteApi("48bc6bc4-78d6-4b68-a757-b1dff5a33d60");

const feedback = document.querySelector(".feedback");

function displayComment(commentObject) {
  const feedbackContainer = document.createElement("div");
  feedbackContainer.classList.add("feedback__container");

  const feedbackContainerImg = document.createElement("div");
  feedbackContainerImg.classList.add("feedback__container--img");

  feedbackContainer.appendChild(feedbackContainerImg);

  const icon = document.createElement("i");
  icon.classList.add("icone");

  feedbackContainerImg.appendChild(icon);

  const feedbackContainerHeader = document.createElement("div");
  feedbackContainerHeader.classList.add("feedback__container--header");

  feedbackContainer.appendChild(feedbackContainerHeader);

  const feedbackHeader = document.createElement("div");
  feedbackHeader.classList.add("feedback__header");

  feedbackContainerHeader.appendChild(feedbackHeader);

  const feedbackHeaderName = document.createElement("p");
  feedbackHeaderName.classList.add("feedback__header--name");
  feedbackHeader.appendChild(feedbackHeaderName);

  const feedbackHeaderDate = document.createElement("p");
  feedbackHeaderDate.classList.add("feedback__header--date");
  feedbackHeader.appendChild(feedbackHeaderDate);

  const feedbackText = document.createElement("p");
  feedbackText.classList.add("feedback__text");

  feedbackContainerHeader.appendChild(feedbackText);

  feedbackHeaderName.textContent = commentObject.name;
  feedbackText.textContent = commentObject.comment;
  feedbackHeaderDate.innerText = new Date(
    commentObject.timestamp
  ).toDateString();

  feedback.appendChild(feedbackContainer);
}
async function displayComments() {
  try {
    const comments = await backend.getComments();
    console.log(comments);
    feedback.innerHTML = "";
    comments.sort((a, b) => b.timestamp - a.timestamp);

    for (const comment of comments) {
      displayComment(comment);
    }
  } catch (error) {
    console.log.error(error);
  }
}

displayComments();

document.querySelector("#submit-btn").addEventListener("click", async (e) => {
  e.preventDefault();

  const newName = document.querySelector("#name");
  const newComment = document.querySelector("#comment");

  const myNewComment = {
    name: newName,
    comment: newComment,
  };

  if (newName.value === "" || newComment.value === "") {
    alert("Please fill required fields");
    return;
  }

  await backend.postComment(myNewComment);

  displayComments();

  newName.value = "";
  newComment.value = "";
});

backend.deleteComment("c02bb202-067a-40a7-be54-2c7f24c833cb");
backend.deleteComment("fe81d3c6-6316-49c3-8eb6-b71a010e7ab1");
backend.deleteComment("524bfce9-1495-4013-bbb8-5384865743a9");
