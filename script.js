const fs = require("fs");
const { writeFileSync } = fs;

const black = "#0A0A0A";
const blue = "#040080";
const white = "#FFFFFF";
const cream = "#FEFFE8";

const HEX_REGEX = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/;

const generateBlend = (start, stop) => {
  const result = [];
  const startArray = start
    .match(HEX_REGEX)
    .slice(1, 4)
    .map(chars => parseInt(chars, 16));
  const stopArray = stop
    .match(HEX_REGEX)
    .slice(1, 4)
    .map(chars => parseInt(chars, 16));
  const diff = startArray.map((value, i) => stopArray[i] - value);
  const BLEND_NUMBER = 8;
  for (let i = 0; i < BLEND_NUMBER; i++) {
    const currentColor = startArray
      .map((value, j) => Math.floor(value + (diff[j] * i) / (BLEND_NUMBER - 1)))
      .map(value => value.toString(16))
      .map(value => (value.length < 2 ? `0${value}` : value))
      .join("");
    result.push(`#${currentColor.toUpperCase()}`);
  }
  return result;
};

const totalJSON = {
  colors: [
    // foreground to background list
    [
      "editor.foreground",
      "foreground",
      "tab.activeForeground",
      "editorLineNumber.activeForeground",
      "sideBar.foreground",
      "list.activeSelectionBackground",
      "list.inactiveSelectionForeground",
      "activityBar.foreground",
      "badge.foreground",
      "activityBarBadge.foreground",
      "sideBar.border",
      "activityBar.border",
    ],
    [
      "editorGroup.border",
      "tab.activeBorder",
      "editorLineNumber.foreground",
      "activityBar.inactiveForeground",
    ],
    [],
    [],
    [],
    [
      "editorLineNumber.activeForeground",
      "editor.lineHighlightBorder",
      "list.inactiveSelectionBackground",
      "list.activeSelectionForeground",
      "statusBar.background",
      "activityBarBadge.background",
      "badge.background",
    ],
    ["titleBar.activeBackground", "tab.inactiveBackground"],
    [
      "editor.background",
      "editorGroupHeader.tabsBackground",
      "tab.border",
      "activityBar.background",
      "sideBar.background",
    ],
  ],
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
        "support.type.property-name", // JSON properties
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
        "keyword.control.switch",
        "support",
        "storage.type",
        "constant.language",
        "variable.language",
        "variable.parameter.function.language.special",
        "string",
        "meta.tag entity.other.attribute-name",
        "entity.other.attribute - name.html",
        "keyword.control.from",
        "markup.italic",
        "punctuation.definition.italic",
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
        "markup.bold",
        "punctuation.definition.bold",
      ],
      settings: { fontStyle: "bold" },
    },
    {
      name: "Underline",
      scope: [
        "keyword.control.flow",
        "markup.underline",
        "punctuation.definition.underline",
      ],
      settings: { fontStyle: "underline" },
    },
    {
      name: "Bold Underline",
      scope: ["markup.heading", "punctuation.definition.heading"],
      settings: { fontStyle: "bold underline" },
    },
  ],
};

const createTheme = (name, type, colors) => {
  const theme = Object.assign({}, totalJSON);
  theme.name = name;
  theme.type = type;
  theme.colors = theme.colors.reduce((acc, selectors, i) => {
    selectors.forEach(selector => (acc[selector] = colors[i]));
    return acc;
  }, {});
  return theme;
};

writeFileSync(
  "./themes/paper.json",
  JSON.stringify(
    createTheme("Paper", "light", generateBlend(black, white)),
    undefined,
    2,
  ),
);

writeFileSync(
  "./themes/blueprint.json",
  JSON.stringify(
    createTheme("Blueprint", "dark", generateBlend(cream, blue)),
    undefined,
    2,
  ),
);
