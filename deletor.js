async function sleep(millis) {
  return new Promise(r => setTimeout(r, millis))
}

function getNumberOfDrafts() {
  const draftsText = document.querySelector("[class='p-ia__view_header__subtitle']").textContent // n drafts
  return parseInt(draftsText.split(" ")[0])
}

function getTrashButtons() {
  if (draftsText() > 0) {
    return Array.from(document.querySelectorAll("[aria-label='Delete draft']"));
  }
}

async function deleteAllDrafts() {

  while (getNumberOfDrafts() > 0) {
    const draftButton = document.querySelector("[aria-label='Delete draft']")
    draftButton.click()
    await sleep(200) // wait for the UI to refresh

    const confirmDeleteButton = document.querySelector("[data-qa='drafts_page_draft_delete_confirm']");
    confirmDeleteButton.click();
    await sleep(200);
  }
}

// Delete all Draft messages
await deleteAllDrafts() 
