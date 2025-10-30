"use client";
import { useState } from "react";
import { useChat } from "ai/react";
import { MessageSquare, X, Send } from "lucide-react";
import "./styles.css";

const LoadingDots = () => (
  <div className="chat-widget__message chat-widget__message--assistant" style={{ width: 60 }}>
    <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(109, 40, 217, 0.5)", animation: "bounce 1.4s infinite 0.2s" }}></div>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(109, 40, 217, 0.5)", animation: "bounce 1.4s infinite 0.4s" }}></div>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(109, 40, 217, 0.5)", animation: "bounce 1.4s infinite 0.6s" }}></div>
    </div>
  </div>
);

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { append, messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });

  const suggestions = ["What services do you offer?", "Tell me about your company", "How can I get started?", "What are your pricing plans?"];
  const handleSuggestionClick = (suggestion: string) => {
    const userMessage = { role: "user" as const, content: suggestion };
    append(userMessage);
  };
  return (
    <div className="chat-widget__container">
      <button className="chat-widget__button" onClick={() => setIsOpen(true)}>
        <MessageSquare className="w-6 h-6" style={{ color: "white" }} />
      </button>

      {isOpen && (
        <div className="chat-widget__window">
          <div className="chat-widget__header">
            <span className="chat-widget__header-title">Samdev AI Assistant</span>
            <button className="chat-widget__close" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="chat-widget__messages">
            {messages.length === 0 && (
              <div className="chat-widget__suggestions">
                {suggestions.map((suggestion, index) => (
                  <button key={index} className="chat-widget__suggestion" onClick={() => handleSuggestionClick(suggestion)}>
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {messages.map((message, index) => (
              <div key={index} className={`chat-widget__message ${message.role === "user" ? "chat-widget__message--user" : "chat-widget__message--assistant"}`}>
                {message.content}
              </div>
            ))}
            {isLoading && <LoadingDots />}
          </div>

          <div className="chat-widget__input-container">
            <form onSubmit={handleSubmit} className="chat-widget__input-form">
              <input type="text" value={input} onChange={handleInputChange} placeholder="Type a message..." className="chat-widget__input-field" />
              <button type="submit" className="chat-widget__submit" disabled={isLoading}>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
