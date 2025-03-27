"use client"
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'
import { useState, useEffect, Fragment } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ColorSelector from "@/components/color-selector"
import Image from 'next/image'

export default function Home() {
  const getDefaultText = (color: string) => {
    switch(color) {
      case "blue":
        return "SWEET"
      case "green":
        return "brat"
      default:
        return "brat and it's completely different but also still brat"
    }
  }

  const [bgColor, setBgColor] = useState("green")
  const [text, setText] = useState(getDefaultText(bgColor))
  const [mirroredText, setMirroredText] = useState(getDefaultText(bgColor))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // 当背景色改变时更新文本
  useEffect(() => {
    const newText = getDefaultText(bgColor)
    setText(newText)
    setMirroredText(newText)
  }, [bgColor])

  // 当文本输入改变时更新镜像文本
  useEffect(() => {
    setMirroredText(text)
  }, [text])

  // 获取当前背景颜色类
  const getBgColorClass = () => {
    switch (bgColor) {
      case "white":
        return { backgroundColor: "#fff" }
      case "black":
        return { backgroundColor: "#8ACF00" }
      case "green":
        return { backgroundColor: "#8ACF00" }
      case "blue":
        return { backgroundColor: "#0A00AD" }
      default:
        return
    }
  }

  const bgStyle = getBgColorClass()
  const isObjectStyle = typeof bgStyle === 'object'

  return (
      <>
        <div className="container mx-auto space-y-8 px-4 sm:px-6 md:px-8 lg:px-16 overflow-x-hidden">
          {/* 主要内容区 */}
          <div
              className={isObjectStyle
                  ? 'flex-grow transition-colors duration-300 w-full'
                  : `flex-grow ${bgStyle} transition-colors duration-300 w-full`}
              style={isObjectStyle ? bgStyle : undefined}
          >
            <div className="w-full px-4 py-6 pt-1">
              <div className="mx-auto overflow-hidden mt-8">
                {/* 颜色选择器 */}
                <ColorSelector currentColor={bgColor} onColorChange={setBgColor} />

                {/* 输入区域 */}
                <div className="mb-6">
                  <Input
                      id="input-text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Enter text here..."
                      className="mb-3"
                  />

                  {/* 输出区域 */}
                  <div className="relative block w-full h-[40vh] sm:h-[50vh] mt-0 text-[0px] flex items-center justify-center overflow-hidden">
                    {bgColor === "blue" && (
                        <div className={`p-4 rounded-md min-h-20 break-words overflow-auto leading-none text-center text-[60px] sm:text-[90px] md:text-[120px] lg:text-[160px] inline-block blur-[0.8px] uppercase`}
                             style={{
                               ...isObjectStyle ? bgStyle : {},
                               color: '#DE0100',
                               fontFamily: 'compactablack',
                               filter: 'none',
                               fontWeight: 500
                             }}>
                          {mirroredText.split(' ').map((word, index) => (
                              <Fragment key={index}>{word} </Fragment>
                          ))}
                        </div>
                    )}

                    {bgColor === "green" && (
                        <div className={`p-4 rounded-md min-h-20 break-words overflow-auto leading-none text-center text-[40px] sm:text-[50px] md:text-[80px] lg:text-[100px] inline-block blur-[2px] scale-y-150`}
                             style={isObjectStyle ? bgStyle : undefined}>
                          {mirroredText.split(' ').map((word, index) => (
                              <Fragment key={index}>{word} </Fragment>
                          ))}
                        </div>
                    )}

                  {bgColor === "white" && (
                    <div className={`
                      p-5                    // padding: 20px
                      rounded-md 
                      min-h-20 
                      break-words 
                      overflow-auto 
                      leading-none 
                      text-justify          // text-align: justify
                      last:text-justify     // text-align-last: justify
                      text-[40px] 
                      md:text-[75px] 
                      inline-block 
                      blur-[0.5px]
                      max-w-[500px]         // max-width: 500px
                      h-[500px]             // height: 500px
                    `}
                      style={isObjectStyle ? bgStyle : undefined}>
                      {mirroredText.split(' ').map((word, index) => (
                        <Fragment key={index}>{word} </Fragment>
                      ))}
                    </div>
                  )}

                    {bgColor === "black" && (
                        <div className={`p-4 rounded-md min-h-20 break-words overflow-auto -scale-x-100 leading-none text-left text-[30px] sm:text-[40px] md:text-[60px] inline-block blur-[1.2px]`}
                             style={isObjectStyle ? bgStyle : undefined}>
                          {mirroredText.split(' ').map((word, index) => (
                              index === 1 || index === 4 || index === 6 || index === 8
                                  ? <Fragment key={index}>{word} </Fragment>
                                  : <Fragment key={index}>{word}<br/></Fragment>
                          ))}
                        </div>
                    )}
                  </div>
                </div>
                <p className="text-center text-sm">Take a screenshot to save ↑</p>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
