import React from 'react';
import { LinkBubbleMenu } from '@norlandsoft/tide-extension-link';
import { TableCellBubbleMenu } from '@norlandsoft/tide-extension-table';
import { ImageBubbleMenu } from '@norlandsoft/tide-extension-image';
import {
  TextBubbleMenu,
  MenuBarContextProvider,
} from '@norlandsoft/tide-extension-menubar';
import { EditorLayout, EditorMenu, EditorContent } from './components';
import type { TideEditor } from './TideEditor';

export type EditorRenderProps = {
  editor: TideEditor | null;
  className?: string;
  style?: React.CSSProperties;
  menuClassName?: string;
  menuStyle?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
};

export const EditorRender: React.FC<EditorRenderProps> = ({
  editor,
  className,
  style,
  menuClassName,
  menuStyle,
  contentClassName,
  contentStyle,
}) => {
  if (!editor) {
    return null;
  }

  return (
    <EditorLayout editor={editor} style={style} className={className}>
      <MenuBarContextProvider editor={editor}>
        <EditorMenu
          editor={editor}
          menuStyle={menuStyle}
          menuClassName={menuClassName}
        />
        <EditorContent
          editor={editor}
          contentStyle={contentStyle}
          contentClassName={contentClassName}
        >
          <LinkBubbleMenu editor={editor} />
          <TableCellBubbleMenu editor={editor} />
          <ImageBubbleMenu editor={editor} />
          <TextBubbleMenu editor={editor} />
        </EditorContent>
      </MenuBarContextProvider>
    </EditorLayout>
  );
};

EditorRender.displayName = 'EditorRender';
