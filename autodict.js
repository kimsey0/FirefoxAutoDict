// Firefox doesn't change the dictionary until the element loses focus, then gains it again. This is a workaround.
function forceDictionaryChange(node) {
    if (node.nodeName == "INPUT" || node.nodeName == "TEXTAREA") {
        node.spellcheck = false;
        node.spellcheck = true;
    } else {
        node.contentEditable = false;
        node.contentEditable = true;
    }
}

function getContent(node) {
    if (node.nodeName == "INPUT" || node.nodeName == "TEXTAREA") {
        return node.value;
    } else {
        return node.innerText;
    }
}

async function detectLanguage(event) {
    const node = event.target;
    const content = getContent(node);

    // console.log("Detecting language for", node, "with content", content)
    const detectedLanguage = await browser.i18n.detectLanguage(content);
    if (detectedLanguage.isReliable && detectedLanguage.languages.length > 0) {
        const language = detectedLanguage.languages[0].language;
        if (node.lang !== language) {
            //console.log("Setting language to", language, "for", node);
            node.lang = language;
            forceDictionaryChange(node);
        }
    }
}

const throttledDetectLanguages = _.throttle(detectLanguage, 2000);

function detectChanges(node) {
    if(!node.spellcheck) {
        return;
    }

    if (!(node.nodeName === "INPUT"
        || node.nodeName === "TEXTAREA"
        || (node.nodeName === "DIV" && node.contentEditable === "true"))) {
        return;
    }

    // console.log("Adding listener for", node);

    node.addEventListener("input", throttledDetectLanguages);

    detectLanguage({ target: node });
}

function detectChildChanges(root) {
    if (!root.querySelectorAll) {
        return;
    }

    const nodes = root.querySelectorAll("input, textarea, div[contenteditable]");
    for (const node of nodes) {
        detectChanges(node);
    }
}

const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        switch(mutation.type) {
            case "attributes":
                detectChanges(mutation.target);
                break;

            case "childList":
                for (const newNode of mutation.addedNodes) {
                    detectChanges(newNode);
                    detectChildChanges(newNode);
                }
                break;
        }
    };
});
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["contenteditable"]
});

detectChildChanges(document);
