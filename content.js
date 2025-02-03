// Developer: Upen (https://upen.dev)
// GitHub: https://github.com/eupendra

function removePromotedPosts() {
  const xpath = `//div[contains(@data-id,"urn:li:activity") and .//span[text()="Promoted"]]`;
  const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
  let node = iterator.iterateNext();
  while (node) {
    const nextNode = iterator.iterateNext();
    node.remove();
    node = nextNode;
  }
}

removePromotedPosts();
const observer = new MutationObserver(removePromotedPosts);
observer.observe(document.body, { childList: true, subtree: true });