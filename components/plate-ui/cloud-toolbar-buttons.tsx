"use client";
import React from "react";
import { PlateEditor, useEditorRef, Value } from "@udecode/plate-common";
import { Button } from "./button";
import { toast } from "sonner";

type Props = {
  descEnData: any;
  setDescEnData: (descEnData: any) => void;
  descArData: any;
  setDescArData: (descArData: any) => void;
};

export function CloudToolbarButtons({ setDescArData, setDescEnData }: Props) {
  const editor = useEditorRef<Value, PlateEditor>();

  const saveValue = () => {
    const editorValue = editor.children;
    const editorName = editor.id;

    if (editorName === "english-desc") {
      setDescEnData(editorValue);
      toast.success(
        "Saved successfully, but you must click Save Changes or Create to save if you are finished."
      );
    } else if (editorName === "arabic-desc") {
      setDescArData(editorValue);
      toast.success(
        "تم الحفظ بنجاح ولكن يجب ان تضغط على حفظ التغييرات او انشاء للحفظ ان كنت انتهيت"
      );
    }
  };

  return (
    <>
      <Button
        type="button"
        onClick={saveValue}
        className="!w-full  dark:!text-white dark:hover:opacity-[0.9] transition"
      >
        Save
      </Button>
    </>
  );
}
