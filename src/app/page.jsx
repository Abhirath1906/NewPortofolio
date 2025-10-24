"use client"

import { Layout, Avatar, Divider, Card } from "antd"
import Link from "next/link"
import gsap from "gsap"
import React, { useEffect, useState } from "react"
import { InstagramOutlined, GithubOutlined, FacebookOutlined } from "@ant-design/icons";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "../app/styles/global.css"

const { Content, Header, Footer } = Layout

export default function Home() {
  const [text, setText] = useState("")
  const fullText = "Hi, I'm Abhirath"


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(".gambarprof", { y: -150, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
    gsap.fromTo(".Desc", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, delay: 0.4, ease: "power3.out" })
    gsap.fromTo(".Role", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, delay: 0.8, ease: "power3.out" })
    gsap.fromTo(".textportoo", { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, scrollTrigger: {
        trigger: ".textportoo",
      }
    })

    gsap.fromTo(".divPorto .PortoGambar", { y: 150, opacity: 0 }, {
      y: 0, opacity: 1, stagger: {
        grid: "auto",
        amount: 1
      }, scrollTrigger: {
        trigger: ".divPorto .PortoGambar"
      }
    })


    gsap.fromTo(".TextContact", { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, direction: 1.5, scrollTrigger: {
        trigger: ".TextContact"
      }
    })

    gsap.fromTo(".ContactForm", { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, scrollTrigger: {
        trigger: ".ContactForm"
      }
    })




  }, [])


  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(timer)
    }, 120)
    return () => clearInterval(timer)
  }, [])



  //  Form 
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }

    try {
      const response = await fetch("https://formspree.io/f/mwprabkl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Pesan berhasil dikirim! 🎉")
        e.target.reset()
      } else {
        alert("Terjadi kesalahan, coba lagi nanti.")
      }
    } catch (error) {
      console.error(error)
      alert("Terjadi error saat mengirim pesan.")
    }
  }

  return (
    <>

      <Header className="Headerr">
        <div className="divHeader">
          <p className="TextHeader">Abhirath</p>
          <div className="divLink">
            <p className="textHeader1" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</p>
            <p className="textHeader1" onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}>Portofolio</p>
            <p className="textHeader1" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</p>
          </div>
        </div>
      </Header>

      <Layout className="MainLayout">



        <Layout>
          <Content className="Contentt relative overflow-hidden">
            <div>
              {/* === BACKGROUND ANIMATION === */}
              <div className="animated-bg"></div>
              <div className="neon-particles">
                {[...Array(105)].map((_, i) => (
                  <span key={i} className="particle"></span>
                ))}
              </div>

              <div id="home" className="AllDivHome relative z-10">
                <div className="text-section">
                  {/* Efek Mengetik */}
                  <p className="Name">
                    <span className="typed-text">{text}</span>
                    <span className="cursor"></span>
                  </p>

                  <b className="Role">Front End Developer</b>

                  <p className="Desc">
                    Terampil menggunakan HTML, CSS, dan JavaScript, serta memiliki
                    keinginan kuat untuk terus belajar teknologi baru.<br />
                    Berorientasi pada detail, disiplin, dan siap berkontribusi
                    sebagai <span className="highlight">Junior Web Developer.</span>
                  </p>
                </div>

                <div className="image-section">
                  <Avatar
                    size={300}
                    shape="circle"
                    src="/gambar.jpeg"
                    className="gambarprof"
                  />
                </div>
              </div>

              <Divider />




              <div style={{ marginTop: "220px" }}>
                <div id="portfolio" className="Portotext">
                  <p className="textportoo">Portofolio</p>
                </div>

                <div className="divPorto">
                  <Card className="PortoGambar">
                    <Avatar
                      size={200}
                      shape="square"
                      src="/porto1.png"
                      style={{ width: "300px" }}
                    />
                    <Divider />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ color: "white" }}>Website Link :
                        <span><Link style={{ color: "#00ffff" }} target="_" href="https://compannyprof.vercel.app"> Project 1</Link></span></p>
                    </div>
                  </Card>

                  <Card className="PortoGambar">
                    <Avatar
                      size={200}
                      shape="square"
                      src="/porto2.png"
                      style={{ width: "300px" }}
                    />
                    <Divider />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ color: "white" }}>Website Link :
                        <span><Link style={{ color: "#00ffff" }} target="_" href="https://new-portofolio-less.vercel.app/"> Project 2</Link></span></p>
                    </div>
                  </Card>

                  <Card className="PortoGambar">
                    <Avatar
                      size={200}
                      shape="square"
                      src="/porto3.png"
                      style={{ width: "300px" }}
                    />
                    <Divider />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <p style={{ color: "white" }}>Website Link :
                        <span><Link style={{ color: "#00ffff" }} target="_" href="https://quiz-client-iota.vercel.app"> Project 3</Link></span></p>
                    </div>
                  </Card>
                </div>





                <div className="TextContact">
                  <p>Contact</p>
                </div>

                <div id="contact" className="ContactForm">
                  <form onSubmit={handleSubmit} className="FormContainer">
                    <input
                      type="text"
                      name="name"
                      placeholder="Username"
                      required
                      className="FormInput"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="FormInput"
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                      className="FormTextarea"
                    />
                    <button type="submit" className="FormButton">Send</button>
                  </form>
                </div>



              </div>
            </div>


          </Content>


          <Footer className="Footerr">
            <div>

              <p style={{ fontSize: "25px", fontWeight: "500" }}>Abhirath</p>

              <div style={{
                display: "flex", gap: "30px", alignItems: "center", justifyContent: "center",
                fontSize: "30px", marginTop: "20px"
              }}>
                <a href="https://www.instagram.com" target="_"><InstagramOutlined /></a>
                <a href="https://github.com" target="_"><GithubOutlined /></a>
                <a href="https://www.facebook.com/?locale=id_ID" target="_"><FacebookOutlined /></a>
              </div>

            </div>
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}
