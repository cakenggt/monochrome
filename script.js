const fs = require("fs");
const { writeFileSync } = fs;

const black = "#0A0A0A";
const blue = "#040080";
const white = "#FFFFFF";

const totalJSON = {
  name: "Paper",
  type: "light",
  colors: {
    ["editor.background"]: white,
    ["editor.foreground"]: black,
  },
  tokenColors: [
    {
      name: "Regular",
      scope: [
        "keyword", // Keywords
        "storage", // Keywords
        "keyword.operator", // Operators
        "variable", // Variables
        "storage.type.function.arrow", // Arrow Function Arrows
        "constant", // Numbers and Characters
        "meta.template.expression", // Template Expressions
        "punctuation", // Punctuation
        "meta.tag", // HTML Tags
        "punctuation.definition.tag.html", // HTML Tags
        "punctuation.definition.tag.begin.html", // HTML Tags
        "punctuation.definition.tag.end.html", // HTML Tags
        "meta.function-call.arguments",
      ],
      settings: { fontStyle: "" },
    },
    {
      name: "Italic",
      scope: [
        "comment",
        "punctuation.definition.comment",
        "comment.block.preprocessor",
        "comment.documentation",
        "comment.block.documentation",
        "string.quoted.docstring",
        "keyword.control.conditional",
        "keyword.control.trycatch",
        "support",
        "storage.type",
        "constant.language",
        "variable.language",
        "variable.parameter.function.language.special",
        "string",
        "meta.tag entity.other.attribute-name",
        "entity.other.attribute - name.html",
        "keyword.control.from",
      ],
      settings: { fontStyle: "italic" },
    },
    {
      name: "Bold",
      scope: [
        "support.function",
        "entity.name.function",
        "meta.function-call",
        "entity.name.type",
        "entity.other.inherited-class",
        "punctuation.accessor",
        "entity.name.tag",
        "support.class.component.tsx",
        "support.class.component.jsx",
        "keyword.operator.arithmetic",
        "keyword.control.import",
      ],
      settings: { fontStyle: "bold" },
    },
    {
      name: "Underline",
      scope: ["keyword.control.flow"],
      settings: { fontStyle: "underline" },
    },
  ],
};

writeFileSync("./themes/paper.json", JSON.stringify(totalJSON, undefined, 2));

totalJSON.name = "Blueprint";
totalJSON.type = "dark";
totalJSON.colors["editor.background"] = blue;
totalJSON.colors["editor.foreground"] = white;

writeFileSync(
  "./themes/blueprint.json",
  JSON.stringify(totalJSON, undefined, 2),
);
