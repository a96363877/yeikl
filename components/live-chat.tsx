"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { format } from "date-fns"
import { ar } from "date-fns/locale"
import { MessageCircle, Send, X, Paperclip, Smile } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "مرحباً بك في خدمة دعم عملاء زين الكويت. كيف يمكنني مساعدتك اليوم؟",
      sender: "agent",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const sendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate agent response after a delay
    setTimeout(() => {
      const responses = [
        "شكراً لتواصلك معنا. كيف يمكنني مساعدتك بخصوص خدمات زين؟",
        "يسعدني تقديم المساعدة لك. هل يمكنك تزويدي بمزيد من التفاصيل؟",
        "أنا هنا للإجابة على استفساراتك. هل تحتاج إلى مساعدة بخصوص الفواتير أو الباقات أو الخدمات؟",
        "يمكنني مساعدتك في حل هذه المشكلة. هل يمكنك تزويدي برقم الهاتف المرتبط بحسابك؟",
        "سأقوم بتوجيهك للحصول على أفضل حل. هل جربت الخطوات المذكورة في موقعنا الإلكتروني؟",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "agent",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, agentMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 left-6 z-50 rounded-full shadow-lg p-4 h-14 w-14",
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-red-600 hover:bg-red-700",
        )}
        aria-label={isOpen ? "إغلاق المحادثة" : "فتح المحادثة"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-[90vw] sm:w-[400px] h-[500px] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200"
            dir="rtl"
          >
            {/* Chat Header */}
            <div className="bg-red-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="صورة وكيل خدمة العملاء" />
                  <AvatarFallback className="bg-red-700">ZK</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">خدمة عملاء زين</h3>
                  <div className="flex items-center text-xs">
                    <span className="h-2 w-2 rounded-full bg-green-400 mr-1"></span>
                    متصل الآن
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-red-700">
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn("flex", message.sender === "user" ? "justify-start" : "justify-end")}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg p-3 text-sm",
                        message.sender === "user"
                          ? "bg-white border border-gray-200 text-gray-800"
                          : "bg-red-600 text-white",
                      )}
                    >
                      <p>{message.content}</p>
                      <p className="text-xs mt-1 opacity-70 text-left">
                        {format(message.timestamp, "HH:mm", { locale: ar })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-end">
                    <div className="bg-gray-200 rounded-lg p-3 text-sm max-w-[80%]">
                      <div className="flex gap-1 items-center justify-center h-5">
                        <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></span>
                        <span
                          className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></span>
                        <span
                          className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Responses */}
            <div className="bg-white p-2 border-t border-gray-200 overflow-x-auto">
              <div className="flex gap-2 pb-1">
                <Badge
                  variant="outline"
                  className="whitespace-nowrap cursor-pointer hover:bg-gray-100 py-1 px-3 text-xs"
                  onClick={() => setInputValue("أريد معرفة المزيد عن باقات الإنترنت")}
                >
                  باقات الإنترنت
                </Badge>
                <Badge
                  variant="outline"
                  className="whitespace-nowrap cursor-pointer hover:bg-gray-100 py-1 px-3 text-xs"
                  onClick={() => setInputValue("كيف يمكنني دفع الفاتورة؟")}
                >
                  دفع الفواتير
                </Badge>
                <Badge
                  variant="outline"
                  className="whitespace-nowrap cursor-pointer hover:bg-gray-100 py-1 px-3 text-xs"
                  onClick={() => setInputValue("أواجه مشكلة في الاتصال بالإنترنت")}
                >
                  مشاكل الاتصال
                </Badge>
                <Badge
                  variant="outline"
                  className="whitespace-nowrap cursor-pointer hover:bg-gray-100 py-1 px-3 text-xs"
                  onClick={() => setInputValue("أين يمكنني العثور على أقرب فرع؟")}
                >
                  مواقع الفروع
                </Badge>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex items-end gap-2">
                <div className="flex-1 relative">
                  <Textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="اكتب رسالتك هنا..."
                    className="resize-none min-h-[60px] pr-12 text-right"
                    rows={2}
                  />
                  <div className="absolute bottom-2 right-2 flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                      <Smile className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={sendMessage}
                  disabled={inputValue.trim() === ""}
                  className="bg-red-600 hover:bg-red-700 h-10 w-10 rounded-full p-0 flex items-center justify-center"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Chat Footer */}
            <div className="p-2 bg-gray-50 border-t border-gray-200 text-center text-xs text-gray-500">
              خدمة العملاء متاحة على مدار الساعة، 7 أيام في الأسبوع
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
