async function sleep(millis) {
  return new Promise(r => setTimeout(r, millis))
}

function getNumberOfDrafts() {
  const draftsText = 
document.querySelector("button[id='drafts'] span[data-qa='tabs_item_render_count']").innerText // n drafts
  return parseInt(draftsText)
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
