'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'

interface ChatbaseFunction {
  (...args: any[]): void;
  (command: "getState"): string;
  q?: any[];
}

declare global {
  interface Window {
    chatbase: ChatbaseFunction;
  }
}


export const ChatbaseScript = () => {
  const [fallbackLoaded, setFallbackLoaded] = useState(false)

  useEffect(() => {
    // Check if Chatbase script failed to load after a timeout
    const timeoutId = setTimeout(() => {
      if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
        loadFallbackScript()
      }
    }, 3000) // 3 second timeout

    return () => clearTimeout(timeoutId)
  }, [])

  const loadFallbackScript = () => {
    if (fallbackLoaded) return
    
    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = 'HflE5bbCXasgCvOgcprE9'
    script.async = true
    script.defer = true
    script.onload = () => {
      setFallbackLoaded(true)
      // Initialize Chatbase
      // Initialize Chatbase
      if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
        const chatbaseFunc = function(...args: any[]) {
          if (!chatbaseFunc.q) {
            chatbaseFunc.q = [];
          }
          chatbaseFunc.q.push(args);
        } as ChatbaseFunction;

        window.chatbase = new Proxy(chatbaseFunc, {
          get(target, prop) {
            if (prop === 'q') {
              return target.q;
            }
            return (...args: any[]) => {
              if (prop === 'getState') {
                return 'initialized';
              }
              return target(prop, ...args);
            };
          }
        });
      }
    }
    document.body.appendChild(script)
  }

  return (
    <>
      <Script
        id="chatbase-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              if(!window.chatbase || window.chatbase("getState")!=="initialized") {
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){
                    window.chatbase.q=[]
                  }
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){
                      return target.q
                    }
                    return(...args)=>target(prop,...args)
                  }
                })
              }
            })();
          `
        }}
        onError={(e) => {
          console.error('Chatbase script failed to load:', e)
          loadFallbackScript()
        }}
        onLoad={() => {
          console.log('Chatbase script loaded successfully')
          // Load the main script after initialization
          const script = document.createElement('script')
          script.src = 'https://www.chatbase.co/embed.min.js'
          script.id = 'HflE5bbCXasgCvOgcprE9'
          script.defer = true
          script.async = true
          document.body.appendChild(script)
        }}
      />
      <style jsx global>{`
        @media (max-width: 768px) {
          #chatbase-bubble-window {
            width: 100% !important;
            height: 100% !important;
            max-height: 90vh !important;
            max-width: 100vw !important;
            border-radius: 0 !important;
            bottom: 0 !important;
            right: 0 !important;
            position: fixed !important;
            z-index: 999999 !important;
            margin: 0 !important;
            top: auto !important;
            transform: none !important;
          }
          
          #chatbase-bubble-window iframe {
            height: 100% !important;
            width: 100% !important;
            border-radius: 0 !important;
          }

          .chatbase-bubble-button {
            bottom: 20px !important;
            right: 20px !important;
          }
        }
      `}</style>
    </>
  )
}
