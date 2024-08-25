"use client";
import { Plate } from "@udecode/plate-common";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { CommentsProvider } from "@udecode/plate-comments";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CommentsPopover } from "../plate-ui/comments-popover";
import { Editor as SecEditor } from "../plate-ui/editor";
import { FixedToolbar } from "../plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "../plate-ui/fixed-toolbar-buttons";
import { plugins } from "./lib/plate-plugins";
import { CloudToolbarButtons } from "../plate-ui/cloud-toolbar-buttons";

const initialValue = [
  {
    id: "1",
    type: ELEMENT_PARAGRAPH,
    children: [{ text: "" }],
  },
];

type Props = {
  name: any;
  descEnData: any;
  setDescEnData: (descEnData: any) => void;
  descArData: any;
  setDescArData: (descArData: any) => void;
  value: any;
};

export function Editor({
  name,
  descEnData,
  descArData,
  setDescArData,
  setDescEnData,
  value,
}: Props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <CommentsProvider users={{}} myUserId="1">
        <Plate plugins={plugins} initialValue={value} id={name}>
          <FixedToolbar>
            <FixedToolbarButtons />
          </FixedToolbar>

          <SecEditor
            className=" px-[35px] py-8 !min-h-[350px] !max-h-[600px] overflow-auto mt-1  border  transition-all"
            focusRing={true}
            variant="ghost"
            size="md"
            name={name}
          />
          <div className="flex items-center gap-1 my-3 justify-center px-3">
            <CloudToolbarButtons
              descArData={descArData}
              descEnData={descEnData}
              setDescArData={setDescArData}
              setDescEnData={setDescEnData}
            />
          </div>
          <CommentsPopover />
        </Plate>
      </CommentsProvider>
    </DndProvider>
  );
}
