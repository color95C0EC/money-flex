const langJa = {
    "help.assets": "使用素材など",
    "help.assets.images": "画像系",
    "help.assets.images.icooon-mono.edit": "「編集」など",
    "help.assets.fonts": "フォント",
    "ui.cancel": "キャンセル"
}

const langEn = {
    "help.assets": "",
    "help.assets.images": "",
    "help.assets.images.icooon-mono.edit": "",
    "help.assets.fonts": "Fonts",
    "ui.cancel": "Cancel"
}


function translate(lang, translationKey, args) {
    // https://ja.wikipedia.org/wiki/ISO_639-1%E3%82%B3%E3%83%BC%E3%83%89%E4%B8%80%E8%A6%A7
    let output;
    let langFile;
    switch (lang) {
        case "ja":
            langFile = langJa;
            break;
        case "en":
            langFile = langEn;
            break;
    }
    if (Object.keys(langFile).includes(translationKey)) {
        output = langFile[translationKey];
        if (args) {
            for (argKey of Object.keys(args)) {
                output = output.replace(argKey, args[argKey]);
            }
        }
    } else {
        output = translationKey;
    }
    return output;
}




const getFormattedDate = (date = new Date()) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
};


// const todayField = document.getElementById("today");
// const todayButton = document.getElementById("today-button");

// if (todayButton && todayField) {
//   todayButton.addEventListener("click", () => {
//     todayField.value = formatDate();
//   });
// } else {
//   console.error("要素が見つかりません。");
// }



function onLoad() {
    // ターゲット用class付きの要素を置き換え
    const targets = document.getElementsByClassName("translate-target");
    for (let i = 0; i < targets.length; i++) {
        targets[i].textContent = translate("ja", targets[i].textContent);
    }
}


document.addEventListener("DOMContentLoaded", onLoad());
