"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Bold, Italic, Underline, List, ListOrdered, Quote, Link,
  Paperclip, Mic, ImageIcon, Sparkles, MoreHorizontal,
  CornerDownLeft, X, Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface Attachment {
  id: string;
  fileName: string;
  fileType: "image" | "document";
  thumbnailUrl?: string;
}

export interface ComposerInputProps extends React.HTMLAttributes<HTMLDivElement> {
  onSend: (message: string, attachments: Attachment[]) => void;
  initialAttachments?: Attachment[];
  placeholder?: string;
}

const toolbarItems = [
  { icon: Bold,         tooltip: "Bold" },
  { icon: Italic,       tooltip: "Italic" },
  { icon: Underline,    tooltip: "Underline" },
  { icon: List,         tooltip: "Bullet List" },
  { icon: ListOrdered,  tooltip: "Numbered List" },
  { icon: Quote,        tooltip: "Quote" },
  { icon: Link,         tooltip: "Link" },
];

const actionItems = [
  { icon: Paperclip,      tooltip: "Attach File" },
  { icon: Mic,            tooltip: "Voice Message" },
  { icon: ImageIcon,      tooltip: "Add Image" },
  { icon: Sparkles,       tooltip: "AI Assist" },
  { icon: MoreHorizontal, tooltip: "More Options" },
];

const ComposerInput = React.forwardRef<HTMLDivElement, ComposerInputProps>(
  ({ className, onSend, initialAttachments = [], placeholder = "Type your message...", ...props }, ref) => {
    const [message, setMessage] = React.useState("");
    const [attachments, setAttachments] = React.useState<Attachment[]>(initialAttachments);

    const handleSend = () => {
      if (message.trim() || attachments.length > 0) {
        onSend(message, attachments);
        setMessage("");
        setAttachments([]);
      }
    };

    return (
      <TooltipProvider>
        <div
          ref={ref}
          className={cn(
            "flex flex-col w-full rounded-xl border border-light-200 bg-white shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-200 focus-within:ring-offset-2",
            className
          )}
          {...props}
        >
          {/* Toolbar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-light-200">
            <div className="flex items-center gap-0.5">
              {toolbarItems.map((item) => (
                <Tooltip key={item.tooltip}>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-dark-100 hover:text-dark-300">
                      <item.icon className="h-3.5 w-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>{item.tooltip}</p></TooltipContent>
                </Tooltip>
              ))}
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-dark-100 hover:text-red-500">
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>Clear</p></TooltipContent>
            </Tooltip>
          </div>

          {/* Textarea */}
          <div className="px-2 py-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={placeholder}
              className="min-h-[90px] border-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none text-sm"
            />
          </div>

          {/* Attachments */}
          {attachments.length > 0 && (
            <div className="px-3 pb-2">
              <div className="grid grid-cols-3 gap-2">
                <AnimatePresence>
                  {attachments.map((att) => (
                    <motion.div
                      key={att.id}
                      layout
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="relative group"
                    >
                      <div className="aspect-square rounded-lg overflow-hidden bg-light-100 border border-light-200 flex items-center justify-center">
                        {att.fileType === "image" && att.thumbnailUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={att.thumbnailUrl} alt={att.fileName} className="h-full w-full object-cover" />
                        ) : (
                          <Paperclip className="h-5 w-5 text-dark-100" />
                        )}
                      </div>
                      <button
                        onClick={() => setAttachments((p) => p.filter((a) => a.id !== att.id))}
                        className="absolute -top-1 -right-1 bg-white border border-light-200 rounded-full p-0.5 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                        aria-label="Remove attachment"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-3 py-2 border-t border-light-200">
            <div className="flex items-center gap-0.5">
              {actionItems.map((item) => (
                <Tooltip key={item.tooltip}>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-dark-100 hover:text-dark-300">
                      <item.icon className="h-3.5 w-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent><p>{item.tooltip}</p></TooltipContent>
                </Tooltip>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button onClick={handleSend} size="sm" className="gap-1.5 h-8 text-xs px-3">
                Send
                <CornerDownLeft className="h-3.5 w-3.5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </TooltipProvider>
    );
  }
);

ComposerInput.displayName = "ComposerInput";

export { ComposerInput };
