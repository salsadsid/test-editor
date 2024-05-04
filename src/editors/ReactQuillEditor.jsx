import { useState } from "react";
import "../App.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { htmlData } from "../assets/data";

const ReactQuillEditor = () => {
  const [value, setValue] = useState(htmlData);
  console.log(value);
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  const handleDownload = () => {
    const file = new Blob([value], { type: "text/html" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = "htllo" + ".html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        modules={modules}
        onChange={setValue}
      />
      <button
        className="text-white px-3 mb-1 py-1 border-2 border-brand-main-400 rounded-md font-medium text-md  hover:bg-white bg-brand-main-400 hover:text-brand-main-400 transition-all ease-in-out duration-300"
        onClick={handleDownload}
      >
        <div className="flex justify-center items-center gap-1">
          Download HTML
        </div>
      </button>
    </>
  );
};

export default ReactQuillEditor;
