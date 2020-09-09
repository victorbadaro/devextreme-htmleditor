$(function() {
    var editor = $(".html-editor").dxHtmlEditor({
        height: 550,
        toolbar: {
            items: [
                "undo", "redo", "separator",
                {
                    formatName: "size",
                    formatValues: ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"] },
                {
                    formatName: "font",
                    formatValues: ["Arial", "Courier New", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Verdana"]
                },
                "separator", "bold", "italic", "strike", "underline", "separator",
                "alignLeft", "alignCenter", "alignRight", "alignJustify", "separator",
                "orderedList", "bulletList", "separator",
                {
                    formatName: "header",
                    formatValues: [false, 1, 2, 3, 4, 5]
                }, "separator",
                "color", "background", "separator",
                "link", "image", "separator",
                "clear", "codeBlock", "blockquote"
            ]
        },
        mediaResizing: {
            enabled: true
        }
    }).dxHtmlEditor("instance");

    $("#multiline").dxCheckBox({
        text: "Expandir barra de ferramentas",
        value: true,
        onValueChanged: function(e) {
            editor.option("toolbar.multiline", e.value);
        }
    });
});

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const customText = document.querySelector('.html-editor .dx-htmleditor-content').innerHTML

    console.log(customText)
})