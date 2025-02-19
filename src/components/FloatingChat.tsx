import { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircle, X } from "lucide-react";
import ChatAssistant from "./ChatAssistant";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="absolute bottom-20 right-0 mb-2">
          <ChatAssistant />
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="h-16 w-16 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-200"
      >
        {isOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <MessageCircle className="h-8 w-8" />
        )}
      </Button>
    </div>
  );
}
