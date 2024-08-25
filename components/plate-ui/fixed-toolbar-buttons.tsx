import React from "react";
import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import {
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  ELEMENT_CODE_SYNTAX,
} from "@udecode/plate-code-block";
import { useEditorReadOnly } from "@udecode/plate-common";
import {
  MARK_BG_COLOR,
  MARK_COLOR,
  MARK_FONT_FAMILY,
  MARK_FONT_SIZE,
} from "@udecode/plate-font";
import { MARK_HIGHLIGHT } from "@udecode/plate-highlight";
import { ListStyleType } from "@udecode/plate-indent-list";
import { MARK_KBD } from "@udecode/plate-kbd";
import {
  ELEMENT_IMAGE,
  ELEMENT_MEDIA,
  ELEMENT_MEDIA_EMBED,
} from "@udecode/plate-media";
import { Icons, iconVariants } from "../../components/icons";
import { AlignDropdownMenu } from "./align-dropdown-menu";
import { ColorDropdownMenu } from "./color-dropdown-menu";
import { EmojiDropdownMenu } from "./emoji-dropdown-menu";
import { IndentListToolbarButton } from "./indent-list-toolbar-button";
import { IndentToolbarButton } from "./indent-toolbar-button";
import { LineHeightDropdownMenu } from "./line-height-dropdown-menu";
import { LinkToolbarButton } from "./link-toolbar-button";
import { MediaToolbarButton } from "./media-toolbar-button";
import { MoreDropdownMenu } from "./more-dropdown-menu";
import { OutdentToolbarButton } from "./outdent-toolbar-button";
import { TableDropdownMenu } from "./table-dropdown-menu";
import { FontFamilyDropdownMenu } from "./font-family-dropdown";
import { FontSizeDropdownMenu } from "./font-size-dropmenu";
import { FontWeightDropdownMenu } from "./font-weight-dropdown";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { ModeDropdownMenu } from "./mode-dropdown-menu";
import { ToolbarGroup } from "./toolbar";
import { TurnIntoDropdownMenu } from "./turn-into-dropdown-menu";

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="w-full overflow-hidden  mx-auto border rounded-[10px] px-1 ">
      <div
        className="w-full inline-flex flex-wrap  justify-start "
        style={{
          transform: "translateX(calc(-1px))",
        }}
      >
        {!readOnly && (
          <>
            <div className="flex flex-wrap gap-1 items-center">
              {/* <InsertDropdownMenu /> */}
              <TurnIntoDropdownMenu />
              <>
                <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
                  <Icons.bold />
                </MarkToolbarButton>
                <MarkToolbarButton
                  tooltip="Italic (⌘+I)"
                  nodeType={MARK_ITALIC}
                >
                  <Icons.italic />
                </MarkToolbarButton>
                <MarkToolbarButton
                  tooltip="Underline (⌘+U)"
                  nodeType={MARK_UNDERLINE}
                >
                  <Icons.underline />
                </MarkToolbarButton>

                <MarkToolbarButton
                  tooltip="Strikethrough (⌘+⇧+M)"
                  nodeType={MARK_STRIKETHROUGH}
                >
                  <Icons.strikethrough />
                </MarkToolbarButton>
                <MarkToolbarButton tooltip="Code (⌘+E)" nodeType={MARK_CODE}>
                  <Icons.code />
                </MarkToolbarButton>
                <FontFamilyDropdownMenu />
                <FontSizeDropdownMenu />
                <FontWeightDropdownMenu />
              </>
              <>
                <MarkToolbarButton
                  tooltip="Highlight"
                  nodeType={MARK_HIGHLIGHT}
                >
                  <Icons.highlight />
                </MarkToolbarButton>
                <ColorDropdownMenu nodeType={MARK_COLOR} tooltip="Text Color">
                  <Icons.color
                    className={iconVariants({ variant: "toolbar" })}
                  />
                </ColorDropdownMenu>
                <ColorDropdownMenu
                  nodeType={MARK_BG_COLOR}
                  tooltip="Highlight Color"
                >
                  <Icons.bg className={iconVariants({ variant: "toolbar" })} />
                </ColorDropdownMenu>
              </>

              <>
                <AlignDropdownMenu />

                <LineHeightDropdownMenu />

                <IndentListToolbarButton nodeType={ListStyleType.Disc} />
                <IndentListToolbarButton nodeType={ListStyleType.Decimal} />
                {/* <IndentListToolbarButton nodeType={ListStyleType.Circle} />
              <IndentListToolbarButton nodeType={ListStyleType.UpperRoman} />
              <IndentListToolbarButton nodeType={ListStyleType.Armenian} /> */}

                <OutdentToolbarButton />
                <IndentToolbarButton />
              </>

              <>
                <LinkToolbarButton />

                <MediaToolbarButton tooltip="Image" nodeType={ELEMENT_IMAGE} />
                <MediaToolbarButton tooltip="Media" nodeType={ELEMENT_MEDIA} />

                <TableDropdownMenu />

                <MarkToolbarButton tooltip="Keyboard" nodeType={MARK_KBD}>
                  <Icons.kbd />
                </MarkToolbarButton>

                <EmojiDropdownMenu />

                <MoreDropdownMenu />
              </>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
